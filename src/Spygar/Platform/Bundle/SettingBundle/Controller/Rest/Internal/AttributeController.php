<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Factory\AttributeFactory;
use Spygar\Platform\Bundle\SettingBundle\Form\AttributeForm;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage attribute.
 */
class AttributeController extends AbstractController
{
    /** @var AttributeRepository */
    private $attributeRepository;

    /** @var AttributeForm */
    private $attributeForm;

    /** @var AttributeFactory */
    private $attributeFactory;

    /**
     * @param AttributeRepository   $attributeRepository
     * @param AttributeForm         $attributeForm
     * @param AttributeFactory      $attributeFactory
     */

    public function __construct(
        AttributeRepository $attributeRepository,
        AttributeForm $attributeForm,
        AttributeFactory $attributeFactory
        )
    {
        $this->attributeRepository = $attributeRepository;
        $this->attributeForm       = $attributeForm;
        $this->attributeFactory    = $attributeFactory;
    }

    /** Get Attribute By code */
    public function getAttribute(Request $request)
    {
        $code = $request->get('code');
        $data = $this->attributeRepository->getAttributeByCode($code);

        return new JsonResponse($data);
    }
    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        $results = $this->attributeRepository->attributeListWithPagination($page, $limit);
        return new JsonResponse($results);

        // $records = $this->attributeRepository->getTotalRecords($limit);

        // $response = [
        //     "records"       => $results,
        //     "totalRecords"  => $records['total'],
        //     "pagination"    => [
        //             "first"         => 1,
        //             "limit"         => $limit,
        //             "total_page"    => $records['total_page'],
        //             "current"       => $page
        //     ]
        // ];
       
        return new JsonResponse($response);
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
    /** Get attributes by types */
    public function attributesByTypes(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];
        try {
            $results = $this->attributeRepository->getAttributeByType($requestParams);
        } catch (\Exception $ex) {
           $results = $ex->getMessage();
        }

        return new JsonResponse($results);
    }
}