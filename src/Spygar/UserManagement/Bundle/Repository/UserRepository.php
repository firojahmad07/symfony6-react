<?php

namespace Spygar\UserManagement\Bundle\Repository;

use Spygar\UserManagement\Bundle\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\Persistence\ManagerRegistry;
/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements UserLoaderInterface
{
    public function __construct(ManagerRegistry $managerRegistry)
    {      
        parent::__construct($managerRegistry, User::class);
    }

    public function loadUserByIdentifier(string $usernameOrEmail): ?User
    {
        $entityManager = $this->getEntityManager();

        return $entityManager->createQuery(
                'SELECT u
                FROM Spygar\UserManagement\Bundle\Entity\User u
                WHERE u.username = :query
                OR u.email = :query'
            )
            ->setParameter('query', $usernameOrEmail)
            ->getOneOrNullResult();
    }

    
    /**
     *  Get user list with page, limit
     *  @return []
     */
    public function userListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('u')
            ->select('u.id, u.firstName, u.lastName, u.email, u.username')
            ->orderBy('u.id', 'asc')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
    }

    /** Get User with details by ID*/
    public function getUserDetails($id)
    {
        $userInfo = $this->createQueryBuilder('u')
            ->select('u.id, u.firstName, u.lastName, u.email, u.status, u.locales, u.catalogLocale')
            ->orderBy('u.id', 'asc')
            ->where('u.id =:id')
            ->setparameters(['id' => $id])
            ->getQuery()
            ->getOneOrNullResult()
        ;
        $userInfo['roles'] = $this->getRoles($id);
      
        return $userInfo;
    }
    /** Get Assigned roles user */
    public function getRoles($id)
    {
        return $this->createQueryBuilder('u')
            ->select('r.id, r.code, r.name')
            ->orderBy('r.id', 'asc')
            ->leftJoin('u.roles', 'r')
            ->where('u.id =:id')
            ->setparameters(['id' => $id])
            ->getQuery()
            ->getResult()
        ;
    }

    /** save user info */
    public function saveUser(User $userInstance)
    {
        $this->entityManager->persist($userInstance);
        $this->entityManager->flush();
    }
    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
