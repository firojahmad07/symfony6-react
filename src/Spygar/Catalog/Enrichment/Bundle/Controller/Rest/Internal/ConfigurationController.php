<?php
namespace Spygar\Catalog\Enrichment\Bundle\Controller\Rest\Internal;

use Spygar\Catalog\Enrichment\Bundle\Repository\ConfigurationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * This class to manage System configuration.
 */

class ConfigurationController extends AbstractController
{
    const CONST_SYSTEM = "system";

    /** @var ConfigurationRepository */
    private $configurationRepository;

    /**
     * @param ConfigurationRepository   $configurationRepository
     */

    public function __construct(
        ConfigurationRepository $configurationRepository
        )
    {
        $this->configurationRepository = $configurationRepository;
    }

    /** Get Attribute By code */
    public function details(Request $request)
    {
       
        $data = $this->configurationRepository->getDetails(self::CONST_SYSTEM);
        
        return new JsonResponse($data);
    }
    /**
     * render index page
     */
    public function createAndUpdate(Request $request)
    {
        $params = $request->getContent();
        $params = !empty($params) ? json_decode($params, true) : [];
        
        if (empty($params)) {
            return new JsonResponse([]);
        }

        $this->configurationRepository->createOrUpdate($params);      
        
        return new JsonResponse($this->configurationRepository->getDetails(self::CONST_SYSTEM));
    }

    /**
     * Get Attribute create form.
     * 
     * @return []
     */
    
    public function attributeCreateForm()
    {
        return new JsonResponse($this->attributeForm->createForm());
    }

    /** Create new attribute */
    public function createAttribute(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];
        try {
            $attributeCode = $this->attributeFactory->createOrUpdate($requestParams);
            $responseParams['code'] = $attributeCode;
        } catch (\Exception $ex) {
            // dump($ex->getMessage());die;
           $responseParams['code'] = null;
        }

        return new JsonResponse($responseParams);
    }
}