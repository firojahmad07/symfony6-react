<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Entity\AssociationType;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method AssociationType|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssociationType|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssociationType[]    findAll()
 * @method AssociationType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssociationTypeRepository extends EntityRepository
{
    /** @var EntityManagerInterface */
    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $classMeta = $this->entityManager->getClassMetadata(AssociationType::class);
        parent::__construct($this->entityManager, $classMeta);
    }

    // /**
    //  * @return AssociationType[] Returns an array of AssociationType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AssociationType
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /** create or update association type */
    public function createOrUpdateAssociaitonType($params)
    {
      
        $associationTypeInstance = $this->findOneByCode($params['code']);
        $associationTypeInstance = !empty($associationTypeInstance) ? $associationTypeInstance : new AssociationType;

        $associationTypeInstance->setCode($params['code']);
        if (isset($params['labels'])) {
            $associationTypeInstance->setLabels($params['labels']);
        }
        $this->entityManager->persist($associationTypeInstance);
        $this->entityManager->flush();

        return $associationTypeInstance->getCode();
    }

    /** 
     * Get all association types
     * @return []
     */
    public function associationTypesWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('a')
            ->select('a.id, a.code, a.labels')
            ->orderBy('a.created', 'asc')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
    }

    /** Get association type */
    public function getAssociationById($id)
    {
        $result = $this->createQueryBuilder('a')
                ->select('a.id, a.code, a.labels')
                ->where('a.id =:id')
                ->setParameters(['id' => $id ])
                ->getQuery()
                ->getOneOrNullResult()
            ;
        $result['labels'] = empty($result['labels']) ? null : $result['labels'];

        return $result;

    }
}
