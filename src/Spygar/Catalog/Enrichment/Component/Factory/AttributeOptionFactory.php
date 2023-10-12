<?php
namespace Spygar\Platform\Bundle\SettingBundle\Factory;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeOptionRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeOption;
use Doctrine\ORM\EntityManagerInterface;


class AttributeOptionFactory
{
    /** @var EntityManagerInterface */
    private $entityManager;
    
    /** @var AttributeRepository */
    private $attributeRepo;

    /** @var AttributeOptionRepository */
    private $attributeOptionRepo;
    
    public function __construct(
        EntityManagerInterface $entityManager,
        AttributeRepository $attributeRepo,
        AttributeOptionRepository $attributeOptionRepo
        )
    {
        $this->entityManager       = $entityManager;
        $this->attributeRepo       = $attributeRepo;
        $this->attributeOptionRepo = $attributeOptionRepo;
    }

    /** create new attribute */

    public function createOrUpdate($param)
    {
        $attributeInstance = $this->attributeRepo->findOneByCode($param['attributeCode']);
        $attributeOption   = $this->attributeOptionRepo->findBy(['code' => $param['optionCode'], 'attribute' => $attributeInstance]);
        $attributeOption   = !empty($attributeOption) ? current($attributeOption) : new AttributeOption;
        
        $attributeOption->setCode($param['optionCode']);
        $attributeOption->setAttribute($attributeInstance);
       
        if (!empty($attributeOption) && isset($param['labels'])) {
            $attributeOption->setLabels($param['labels']);
        } else {
            $attributeOption->setLabels(null);
        }

        $this->entityManager->persist($attributeOption);
        $this->entityManager->flush();

        return $attributeOption->getCode();
    }
    
    /** remove option */
    public function removeOption($requestParam)
    {  
        $attributeInstance   = $this->attributeRepo->findOneByCode($requestParam['attributeCode']);
        $parameter = [
            'code' => $requestParam['optionCode'],
            'attribute' => $attributeInstance
        ];
        $option = $this->attributeOptionRepo->findBy($parameter);
        if (!empty($option)) {
            $this->entityManager->remove(current($option));
            $this->entityManager->flush();
        }
    }
}