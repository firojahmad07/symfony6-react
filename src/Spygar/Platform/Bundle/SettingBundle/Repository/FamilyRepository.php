<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Entity\Family;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
/**
 * @method Family|null find($id, $lockMode = null, $lockVersion = null)
 * @method Family|null findOneBy(array $criteria, array $orderBy = null)
 * @method Family[]    findAll()
 * @method Family[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

class FamilyRepository extends EntityRepository
{
    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $classMeta = $this->entityManager->getClassMetadata(Family::class);
        parent::__construct($this->entityManager, $classMeta);
    }

    /** Get all family with page, limit */

    public function familyListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('f')
            ->select('f.id, f.code, f.labels, 
            a.code as labelAttribute, a.labels as labelAttributeLabels,
            img.code as imageAttribute, img.labels as imageAttributeLabels
            ')
            ->orderBy('f.created', 'asc')
            ->leftJoin('f.labelAttribute', 'a')
            ->leftJoin('f.imageAttribute', 'img')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
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
    
    /** 
     * Get Family Attributes
     * @return []
     * */

    public function getFamilyAttributes($familyCode)
    {
        $attributes = $this->findOneByCode($familyCode)->getAttribute();
        $data = [];
        foreach($attributes->getValues() as $attribute) {
            $data[] = [
                'id' => $attribute->getId(),
                'code' => $attribute->getCode(),
                'labels' => $attribute->getLabels(),
                'localizable' => $attribute->getIsLocalizable(),
                'wysiwyg_enabled' => $attribute->getWysiwygEnabled(),
                'attribute_type' => $attribute->getAttributeType(),
            ];
        }

        return $data;
    }

    /** 
     * Get Family details by code
     * @return []
     * */

    public function getFamilyDetailsByCode(string $code)
    {
        $details = $this->createQueryBuilder('f')
                    ->select('f.id, f.code, f.labels, la.code as label_attribute, img.code as image_attribute')
                    ->leftJoin('f.labelAttribute', 'la')
                    ->leftJoin('f.imageAttribute', 'img')
                    ->where('f.code =:code')
                    ->setParameters(['code' => $code])
                    ->getQuery()->getOneOrNullResult();
        
        $details['attributes'] = $this->getFamilyAttributes($code);
        
        return $details;
    }
    
    /** Delete family */
    public function deleteFamily($payload)
    {
        $familyInstance = $this->findOneByCode($payload['code']);
        $this->entityManager->remove($familyInstance);
        $this->entityManager->flush();
    }

    /** Get product Form */
    public function getProductForm($code)
    {
        $attributes = $this->getFamilyAttributes($code);
        $form = [];
        foreach($attributes as $attribute)
        {
            $form[] = [
                "field" => $attribute['code'],
                "label" => !empty($attribute['labels']) ? $attribute['labels'] : [],
                "type"  => $attribute['attribute_type'],
                "localizable" => $attribute['localizable'],
                "wysiwyg_enabled" => $attribute['wysiwyg_enabled'],
            ];
        }

        return $form;
        
    }
    // /**
    //  * @return Family[] Returns an array of Family objects
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
    public function findOneBySomeField($value): ?Family
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
