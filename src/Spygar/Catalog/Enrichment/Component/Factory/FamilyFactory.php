<?php
namespace Spygar\Platform\Bundle\SettingBundle\Factory;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Spygar\Platform\Bundle\SettingBundle\Entity\Family;
use Doctrine\ORM\EntityManagerInterface;

class FamilyFactory
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var AttributeRepository */
    private $attributeRepository;
    
    public function __construct(
        EntityManagerInterface $entityManager,
        AttributeRepository    $attributeRepository
        )
    {
        $this->entityManager        = $entityManager;
        $this->attributeRepository  = $attributeRepository;
    }

    /** create new attribute */

    public function createOrUpdate($param, $familyRepository)
    {
        $family = $familyRepository->findOneByCode($param['code']);
        $family = !empty($family) ? $family : new Family;
        $family->setCode($param['code']);
        
        if (isset($param['labels'])) {
            $family->setLabels($param['labels']);
        }

        if (isset($param['label_attribute'])) {
            $labelAttribute = $this->attributeRepository->findOneByCode($param['label_attribute']);
            if (!empty($labelAttribute)) {
                $family->setLabelAttribute($labelAttribute);
            }
        }

        if (isset($param['image_attribute'])) {
            $imageAttribute = $this->attributeRepository->findOneByCode($param['image_attribute']);
            if (!empty($imageAttribute)) {
                $family->setLabelAttribute($imageAttribute);
            }
        }

        $this->entityManager->persist($family);
        $this->entityManager->flush();

        return $family->getCode();
    }

    public function addAttributesIntoFamily($params, $familyInstance) 
    {
        foreach($params['attributeCodes'] as $code) {
            $attributeInstance = $this->attributeRepository->findOneByCode($code);
            if(empty($attributeInstance)) { continue; }

            $familyInstance->addAttribute($attributeInstance);
            $this->entityManager->persist($familyInstance);
            $this->entityManager->flush();
        }
    }
    
}