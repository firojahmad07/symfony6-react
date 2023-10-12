<?php
namespace Spygar\Platform\Bundle\SettingBundle\Factory;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Doctrine\ORM\EntityManagerInterface;

class AttributeFactory
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var AttributeRepository */
    private $attributeRepository;

    /** @var AttributeGroupRepository */
    private $attributeGroupRepository;
    
    public function __construct(
        EntityManagerInterface      $entityManager,
        AttributeRepository         $attributeRepository,
        AttributeGroupRepository   $attributeGroupRepository
        )
    {
        $this->entityManager             = $entityManager;
        $this->attributeRepository       = $attributeRepository;
        $this->attributeGroupRepository = $attributeGroupRepository;
    }

    /** create new attribute */

    public function createOrUpdate($param)
    {
        $attributeGroupInstance   = $this->attributeGroupRepository->findOneByCode($param['attributeGroup']['code']);
        $attributeInstance        = $this->attributeRepository->findOneByCode($param['code']);
        
        $attributeInstance        = !empty($attributeInstance) ? $attributeInstance : new Attribute;

        $attributeInstance->setCode($param['code']);
        $attributeInstance->setLabels($param['labels']);
        $attributeInstance->setAttributeType($param['attributeType']);
        $attributeInstance->setGroup($attributeGroupInstance);     
        
        $attributeInstance->setIsRequired($param['is_required']);
        $attributeInstance->setIsUnique($param['is_unique']);
        $attributeInstance->setIsLocalizable($param['is_localizable']);
        $attributeInstance->setWysiwygEnabled($param['wysiwyg_enabled']);


        $this->entityManager->persist($attributeInstance);
        $this->entityManager->flush();

        return $attributeInstance->getCode();
    }
    
}