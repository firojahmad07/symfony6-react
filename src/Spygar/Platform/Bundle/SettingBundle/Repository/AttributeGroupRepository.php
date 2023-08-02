<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
/**
 * @method AttributeGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttributeGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttributeGroup[]    findAll()
 * @method AttributeGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeGroupRepository extends EntityRepository
{
    /** @var EntityManagerInterface */
    protected $entityManager;

    /**
     * @param EntityManagerInterface $entityManager
    */
    public function __construct(
        EntityManagerInterface $entityManager
    ) {
        $this->entityManager = $entityManager;
        $classMeta = $this->entityManager->getClassMetadata(AttributeGroup::class);
        parent::__construct($this->entityManager, $classMeta);
    }


    /**
     * @return Locale[] Returns an array of Locale objects
     */

    public function attributeGroupListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
       return $this->createQueryBuilder('ag')
            ->select('ag.id, ag.code, ag.code as label, ag.labels, ag.shortOrder as short_order')
            ->orderBy('ag.shortOrder', 'ASC')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

    }
    /**
     * Get Attribute Details
     */

    public function getAttributeGroupByCode($code)
    {        
       return $this->createQueryBuilder('ag')
            ->select('ag.id, ag.code, ag.code as label, ag.labels, ag.shortOrder as short_order')
            ->orderBy('ag.shortOrder', 'ASC')
            ->where("ag.code =:code")
            ->setParameters(['code' => $code])
            ->getQuery()
            ->getOneOrNullResult()
        ;

    }

    /** Get attribute group by code */
    public function getTotalRecords($limit)
    {
        $results = $this->createQueryBuilder('ag')
                    ->select('count(ag.id)')->getQuery()->getOneOrNullResult();

        $pages = current($results)/$limit;

        return [
            "total" => current($results),
            "total_page" => (is_float($pages)) ? current(explode(".", $pages)) +1 : $pages,
        ];

    }
    
    /** create or update attribute group instance */
    public function createOrUpdate($params) 
    {
        $attributeGroupInctance = $this->findOneByCode($params['code']);
        $attributeGroupInctance = !empty($attributeGroupInctance) ? $attributeGroupInctance : new AttributeGroup;
        $shortOrder = $this->getTotalRecords(15);
        $shortOrder = !empty($shortOrder['total']) ? $shortOrder['total']+1 : 1;
        $attributeGroupInctance->setCode($params['code']);
        $attributeGroupInctance->setShortOrder($shortOrder);
        if (isset($params['labels'])) {
            $attributeGroupInctance->setLabels($params['labels']);
        }

        $this->entityManager->persist($attributeGroupInctance);
        $this->entityManager->flush();

        return $attributeGroupInctance->getCode();
    }
        
    // /**
    //  * @return AttributeGroup[] Returns an array of AttributeGroup objects
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
    public function findOneBySomeField($value): ?AttributeGroup
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
