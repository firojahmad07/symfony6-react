<?php

namespace Spygar\Platform\Bundle\ProductBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Repository\FamilyRepository;
use Spygar\Platform\Bundle\ProductBundle\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\Persistence\ManagerRegistry;
/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends EntityRepository
{
    const PUBLISHED = "published";
    const DRAFT     = "draft";

    /** @var EntityManagerInterface */
    public $entityManager;

    /** @var FamilyRepository */
    public $familyRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        FamilyRepository $familyRepository
        )
    {
        $this->entityManager    = $entityManager;
        $this->familyRepository = $familyRepository;

        $classMeta = $this->entityManager->getClassMetadata(Product::class);
        parent::__construct($this->entityManager,$classMeta);
    }
    /** create or update product informations */
    public function createOrUpdate($params)
    {
        $product = $this->findOneByIdentifier($params['identifier']);
        $status  = !empty($product) ? self::PUBLISHED : self::DRAFT;
        $product = !empty($product) ? $product : new Product;
        $family  = $this->familyRepository->findOneByCode($params['family']['code']);
        
        $product->setIdentifier($params['identifier']);
        $product->setFamily($family);

        if(isset($params['rawValues'])) {
            $product->setRawValues($params['rawValues']);
        }
        $product->setStatus($status);

        $this->entityManager->persist($product);
        $this->entityManager->flush();

        return $product->getIdentifier();
    }

    public function getProductByPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('p')
            ->select("p.id, p.identifier, p.status, DATE_FORMAT(p.created, '%d %b %Y') as created")
            ->orderBy('p.created', 'asc')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
    }

    public function getProductDetails($productId)
    {
        $data = [];
        $productData = $this->createQueryBuilder('p')
                ->select("p.id,f.code as familyCode, f.labels as familyLabels, p.identifier, p.rawValues as values, p.status,
                 DATE_FORMAT(p.created, '%d %b %Y') as created")
                ->where('p.id =:id')
                ->leftJoin('p.family', 'f')
                ->setParameters(['id' => $productId])
                ->getQuery()
                ->getOneOrNullResult()
            ;
        
        $data['data'] = $productData;
        $data['form'] = $this->familyRepository->getProductForm($productData['familyCode']);
       
        return $data;
    }
    // /**
    //  * @return Product[] Returns an array of Product objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
