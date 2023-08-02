<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Entity\FamilyVariant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FamilyVariant|null find($id, $lockMode = null, $lockVersion = null)
 * @method FamilyVariant|null findOneBy(array $criteria, array $orderBy = null)
 * @method FamilyVariant[]    findAll()
 * @method FamilyVariant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FamilyVariantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FamilyVariant::class);
    }

    // /**
    //  * @return FamilyVariant[] Returns an array of FamilyVariant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FamilyVariant
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
