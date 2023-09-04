<?php

namespace Spygar\UserManagement\Bundle\Repository;

use Spygar\UserManagement\Bundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends \Doctrine\ORM\EntityRepository
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
     * Load user by identifier like usernamer or email
     * @return User
    */
    public function loadUserByIdentifier(string $identifier) 
    {
        return $this->entityManager->createQuery(
            'SELECT u
            FROM Spygar\UserManagement\Bundle\Entity\User u
            WHERE u.username = :query
            OR u.email = :query'
        )
        ->setParameter('query', $identifier)
        ->getOneOrNullResult();
    }
    
    /** Genereate Acess Token */
    public function generateAccessToken(User $user) 
    {
        $accessToken = $this->generateToken();
        $user->setAccessToken($accessToken);
        $this->saveUser($user);

        return $accessToken;
    }

    public function generateToken()
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
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
