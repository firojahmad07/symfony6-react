<?php

namespace Spygar\Platform\Bundle\SettingBundle\Repository;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeOptionRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method Attribute|null find($id, $lockMode = null, $lockVersion = null)
 * @method Attribute|null findOneBy(array $criteria, array $orderBy = null)
 * @method Attribute[]    findAll()
 * @method Attribute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeRepository extends EntityRepository
{
    const ATTRIBUTE_SELECT_STRING = 'a.code, g.code as attribute_group, a.labels, a.wysiwygEnabled as wysiwyg_enabled, 
                                     a.isRequired as is_required,a.isUnique as is_unique, a.isLocalizable as is_localizable, 
                                     a.attributeType, a.properties';

    const DEFAULT_ATTRIBUTE_GROUP = "other";

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var AttributeOptionRepository */
    protected $attributeOptionRepository;

    /** @var AttributeGroupRepository */
    protected $attributeGroupRepository;

    /**
     * @param EntityManagerInterface $entityManager
     * @param AttributeOptionRepository $attributeOptionRepository
    */
    public function __construct(
        EntityManagerInterface $entityManager,
        AttributeOptionRepository $attributeOptionRepository,
        AttributeGroupRepository $attributeGroupRepository
    ) {
        $this->entityManager = $entityManager;
        $classMeta = $this->entityManager->getClassMetadata(Attribute::class);
        $this->attributeOptionRepository = $attributeOptionRepository;
        $this->attributeGroupRepository  = $attributeGroupRepository;
        
        parent::__construct($this->entityManager, $classMeta);
    }

    /** 
     * Get attribute By Code 
     * @return []
     */
    public function getAttributeByCode($code)
    {
        $results = $this->createQueryBuilder('a')
                    ->select(self::ATTRIBUTE_SELECT_STRING)
                    ->leftJoin('a.group', 'g')
                    ->where('a.code =:code')
                    ->setParameters(['code' => $code])->getQuery()->getOneOrNullResult();
        
       $results['attributeGroup'] = $this->attributeGroupRepository->getAttributeGroupByCode($results['attribute_group']);
       unset($results['attribute_group']);
       if('spygar_catalog_select' == $results['attributeType']) {
           $results['options'] = $this->attributeOptionRepository->getOptionsByAttributeCode($code);
       }
       
       return $results;
    }

    
    /** Get all Attribute with page, limit */

    public function attributeListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        return $this->createQueryBuilder('a')
            ->select('a.id, a.code, a.labels, a.attributeType as type,
                g.code as groupCode, a.isLocalizable as localizable')
            ->orderBy('a.created', 'asc')
            ->leftJoin('a.group', 'g')
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

    /** Get attribute by attribute type */
    public function getAttributeByType(array $types)
    {
         return $this->createQueryBuilder('a')
            ->select('a.id, a.code, a.labels, a.attributeType ')
            ->orderBy('a.created', 'asc')
            ->where('a.attributeType IN (:types)')
            ->setparameters(['types' => $types])
            ->getQuery()
            ->getResult()
        ;
    }

    /** Get attributes whitch is available in attribute group */
    public function getAttributesByAttributeGroup($attributeCode) 
    {
        
        return $this->createQueryBuilder('a')
                    ->select(self::ATTRIBUTE_SELECT_STRING)
                    ->leftJoin('a.group', 'g')
                    ->where('g.code =:code')
                    ->setParameters(['code' => $attributeCode])->getQuery()->getResult();

    }

    /** After delete attribute group assigned all the attributes in default attribute group */
    public function updateAttributesWithDefault($attributeGroupCode)
    {
        $attributeGroupInstance = $this->attributeGroupRepository->findOneByCode($attributeGroupCode);
        $defaultAttributeGroup  = $this->attributeGroupRepository->findOneByCode(self::DEFAULT_ATTRIBUTE_GROUP);
        $this->createQueryBuilder('a')
            ->update()
            ->set('a.group', ':defaultAttributeGroup')
            ->where('a.group = :deletedAttributeGroup')
            ->setParameters(['deletedAttributeGroup' => $attributeGroupInstance, 
                                'defaultAttributeGroup' => $defaultAttributeGroup])
            ->getQuery()->getSingleScalarResult(); 

        $this->entityManager->remove($attributeGroupInstance);
        $this->entityManager->flush(); 
            
    }
    /** Update bulk attributes adn assin attribute group */
    public function updateAttributesAndAssignAttributeGroup(array $payload)
    {
        $attributeGroupInstance = $this->attributeGroupRepository->findOneByCode($payload['attributeGroupCode']);
        $updateResults = $this->createQueryBuilder('a')
                        ->update()
                        ->set('a.group', ':attributeGroup')
                        ->where('a.code IN (:codes)')
                        ->setParameters(['attributeGroup' => $attributeGroupInstance, 
                            'codes' => $payload['attributes']])
                        ->getQuery()->getSingleScalarResult();
                        
        
        return $updateResults;
    }

    /** Update bulk attributes adn assin attribute group */
    public function removeAttributeFromAttributeGroup(array $payload)
    {
        $attributeGroupInstance = $this->attributeGroupRepository->findOneByCode(self::DEFAULT_ATTRIBUTE_GROUP);
        $updateResults = $this->createQueryBuilder('a')
                        ->update()
                        ->set('a.group', ':attributeGroup')
                        ->where('a.code =:attrCode')
                        ->setParameters([
                            'attributeGroup' => $attributeGroupInstance, 
                            'attrCode' => $payload['attributeCode']])
                        ->getQuery()->getSingleScalarResult();
                        
        
        return $updateResults;
    }
}
