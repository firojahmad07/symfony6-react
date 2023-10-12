<?php

namespace Spygar\Catalog\Enrichment\Bundle\Repository;

use Spygar\Catalog\Enrichment\Bundle\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Spygar\UserManagement\Component\Context\UserContext;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

class CategoryRepository extends EntityRepository
{
    const LIMIT = 1000;
    private $selected = true;

    /** @var [] */
    private $collections = [];
    
    /** @var [] */
    private $formattedData = [];

    /** @var boolean */
    private $isChildren = false;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var UserContext */
    private $userContext;

    /** Current User catalogLocale */
    private $catalogLocale;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserContext $userContext
        )
    {
        $this->entityManager = $entityManager;
        $this->userContext   = $userContext;
        $classMeta           = $this->entityManager->getClassMetadata(Category::class);

        parent::__construct($entityManager, $classMeta);
    }
    
    /** Get all Attribute with page, limit */
    public function categoryList()
    {   
        $this->catalogLocale = $this->userContext->getUserCatalogLocale();
        $parents             = $this->getParentList();
        $tree = [];
        foreach ($parents as $index => $parent) {
          $this->buildTree($parent, $tree[]);     
        }
        
        return $tree;
    }

    /** format childrens */
   
    public function buildTree($rootCategory, &$tree) 
    {
        $tree = [
            'id'     => $rootCategory->getId(),
            'value'   => $rootCategory->getCode(),
            'labels' => !empty($rootCategory->getLabels()) ? $rootCategory->getLabels() : null,
            'text'   => !empty($rootCategory->getLabels()) ? $rootCategory->getLabels()[$this->catalogLocale['code']] : $rootCategory->getCode(),
            'opened' => true
        ];
        if (count($rootCategory->getChildren()->toArray())) {
            foreach ($rootCategory->getChildren() as $child) {
                $this->buildTree($child, $tree['children'][]);
            }
        }
    }

    public function hasChild($category)
    {
        $childs = $this->findByParent($category->getId());

        return !empty($childs) ? $childs : null;
    }

    /** Get parents list */
    public function getParentList() 
    {
        return $this->findBy(['parent' => null]);
        ;
    }

    /** get total pages */
    public function getTotalRecords($limit)
    {
        $resutl = $this->createQueryBuilder('l')
                    ->select('count(l.id)')->getQuery()->getOneOrNullResult();

        $pages = current($resutl)/$limit;

        return [
            "total" => current($resutl),
            "total_page" => (is_float($pages)) ? current(explode(".", $pages)) +1 : $pages,
        ];
    }

    /** Create or Update Category */
    public function createOrUpdate($params)
    {
        $parent   = $this->findOneByCode($params['parentCode']);
        $category = $this->findBy(['parent' => $parent, 'code' =>$params['categoryCode']]);
        $category = !empty($category) ? $category : new Category;

        $category->setCode($params['categoryCode']);
        if (!empty($parent)) {
            $category->setParent($parent);
        }

        // $category->setLabels();

        $this->entityManager->persist($category);
        $this->entityManager->flush();

        return $category->getCode($params);
    }
    /** update category labels by category code */
    public function update($params) 
    {
        $category = $this->findOneBy(['code' => $params['categoryCode']]); 
        if(empty($category)) {
            return null;
        }
        $category->setLabels($params['labels']);

        $this->entityManager->persist($category);
        $this->entityManager->flush();

        return $category->getCode($params);
    }
    // /**
    //  * @return Category[] Returns an array of Category objects
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
    public function findOneBySomeField($value): ?Category
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
