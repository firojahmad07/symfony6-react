<?php

namespace Spygar\UserManagement\Bundle\Repository;

use Spygar\UserManagement\Bundle\Entity\Role;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Role|null find($id, $lockMode = null, $lockVersion = null)
 * @method Role|null findOneBy(array $criteria, array $orderBy = null)
 * @method Role[]    findAll()
 * @method Role[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoleRepository extends \Doctrine\ORM\EntityRepository
{
    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {   
        $this->entityManager = $entityManager;
        $classMeta           = $this->entityManager->getClassMetadata(User::class); 
        parent::__construct($this->entityManager, $classMeta);
    }

    /**
     *  Get role list with page, limit
     *  @return []
     */
    public function roleListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('r')
            ->select('r.id, r.code, r.name, r.permissions')
            ->orderBy('r.id', 'asc')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
    }

    /** Get role details */ 
    public function getRoleDetails($param) {
        return $this->createQueryBuilder('r')
                    ->select('r.id, r.code, r.name, r.permissions')
                    ->where('r.id =:id')
                    ->setParameters(['id'=> $param['roleId']])
                    ->getQuery()
                    ->getOneOrNullResult();

    }
    // /**
    //  * @return Role[] Returns an array of Role objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Role
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
