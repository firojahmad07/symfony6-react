<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeOption;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method AttributeOption|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttributeOption|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttributeOption[]    findAll()
 * @method AttributeOption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeOptionRepository extends EntityRepository
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /**
     * @param EntityManagerInterface $entityManager
    */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $classMeta = $entityManager->getClassMetadata(AttributeOption::class);
        parent::__construct($entityManager, $classMeta);
    }

    /**
     * @return AttributeOption[] Returns an array of AttributeOption objects
     */

    public function getOptionsByAttributeCode($attributeCode)
    {
        return $this->createQueryBuilder('o')
            ->select('o.id, o.code, o.labels, o.sortOrder as sort_order')
            ->leftJoin('o.attribute', 'a')
            ->where('a.code =:code')
            ->orderBy('a.id', 'ASC')
            ->setParameter('code', $attributeCode)
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?AttributeOption
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
