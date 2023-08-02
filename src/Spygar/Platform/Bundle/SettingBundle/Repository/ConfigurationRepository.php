<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;


use Spygar\Platform\Bundle\SettingBundle\Entity\Configuration;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
/**
 * @method Configuration|null find($id, $lockMode = null, $lockVersion = null)
 * @method Configuration|null findOneBy(array $criteria, array $orderBy = null)
 * @method Configuration[]    findAll()
 * @method Configuration[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfigurationRepository extends EntityRepository
{
    const DEFAULT_SECTION = "system";
    const DEFAULT_NAME    = "locales";

    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $classMeta = $this->entityManager->getClassMetadata(Configuration::class);
        parent::__construct($this->entityManager, $classMeta);
    }
    
    /** 
     * Get system configuration details
     * @return []
     **/
    public function getDetails($section)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id, c.name, c.section, c.value')
            ->andWhere('c.section =:section')
            ->setParameters(['section' => $section])
            ->getQuery()
            ->getResult();
    }

    /** 
     * Get system configuration with section and by name
     * @return []
     **/
    public function getDetailBySectionAndName(
        $section = self::DEFAULT_SECTION, 
        $name = self::DEFAULT_NAME)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id, c.name, c.section, c.value')
            ->andWhere('c.section =:section')
            ->andWhere('c.name =:name')
            ->setParameters(['section' => $section, 'name' => $name])
            ->getQuery()
            ->getOneOrNullResult();
    }
    
    /** create or update new configuration */
    public function createOrUpdate($params)
    {
        foreach($params as $section => $names) 
        {
            foreach($names as $name => $value) 
            {                
                $value = is_array($value) ? json_encode($value) : $value;
                try {
                    $configuration = $this->findOneBy(['section' => $section, 'name' => $name]);
                    $configuration = !empty($configuration) ? $configuration : new Configuration;
                    
                    $configuration->setName($name);
                    $configuration->setSection($section);
                    $configuration->setValue($value);
            
                    $this->entityManager->persist($configuration);
                    $this->entityManager->flush();
                    //code...
                } catch (Exception $e) {
                    //throw $th;
                    dump($e->getMessage());die;
                }
            }            
        }
       
    }

    // /**
    //  * @return Configuration[] Returns an array of Configuration objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Configuration
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
