<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeOptionRepository;
use Spygar\Platform\Bundle\SettingBundle\Factory\AttributeOptionFactory;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage attribute option.
 */
class AttributeOptionController extends AbstractController
{
    /** @var AttributeOptionRepository */
    private $attributeOptionRepository;

    /** @var AttributeOptionFactory */
    private $attributeOptionFactory;

    /**
     * @param AttributeOptionRepository   $attributeOptionRepository
     * @param AttributeOptionFactory      $attributeFactory
     */

    public function __construct(
        AttributeOptionRepository $attributeOptionRepository,
        AttributeOptionFactory $attributeOptionFactory
        )
    {
        $this->attributeOptionRepository = $attributeOptionRepository;
        $this->attributeOptionFactory    = $attributeOptionFactory;
    }
    
    /** Create new attribute */
    public function createOption(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];
        
        try {
            $optionCode = $this->attributeOptionFactory->createOrUpdate($requestParams);
            $responseParams['code'] = $optionCode;
        } catch (\Exception $ex) {
            // dump($ex->getMessage());die;
           $responseParams['code'] = null;
        }

        return new JsonResponse($responseParams);
    }

    /**
     * Remove Option
     */
    public function removeOption(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];      
        $this->attributeOptionFactory->removeOption($requestParams);
        
        return new JsonResponse([]);
    }
}