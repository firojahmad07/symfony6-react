<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage attribute groups.
 */

class AttributeGroupController extends AbstractController
{
    /** @var AttributeGroupRepository */
    private $attributeGroupRepository;

    /** @var AttributeRepository */
    private $attributeRepository;

    /**
     * @param AttributeGroupRepository $attributeGroupRepository
     */

    public function __construct(
        AttributeGroupRepository $attributeGroupRepository,
        AttributeRepository $attributeRepository
        )
    {
        $this->attributeGroupRepository = $attributeGroupRepository;
        $this->attributeRepository      = $attributeRepository;
    }
    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        
        $results = $this->attributeGroupRepository->attributeGroupListWithPagination($page, $limit);
        return new JsonResponse($results);
        // $records = $this->attributeGroupRepository->getTotalRecords($limit);

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

        // return new JsonResponse($response);
    }
    /** Get Attribute Group details with details by code */
    public function detail(Request $request) {
        $code       = $request->get('code');
        $results    = $this->attributeGroupRepository->getAttributeGroupByCode($code);
        $attributes = $this->attributeRepository->getAttributesByAttributeGroup($code);
        $results['attributes'] = !empty($attributes) ? $attributes : [];
        
        return new JsonResponse($results);
    }

    /** Create Or update attribute group */
    public function createOrUpdate(Request $request) {
        $params = $request->getContent();
        $params = !empty($params) ? json_decode($params, true) : [];

        if(empty($params)) {
            return new JsonResponse([]);
        }

        $result = $this->attributeGroupRepository->createOrUpdate($params);
        
        return new JsonResponse($result);
    }
    /** Add attributes into attribute group */
    public function addAttributesIntoAttributeGroup(Request $request) 
    {
        $params   = $request->getContent();
        $params   = !empty($params) ? json_decode($params, true) : [];
        try {
            $response[] = $this->attributeRepository->updateAttributesAndAssignAttributeGroup($params);
           
        } catch (\Exception $e) {
            $response[] = $e->getMessage();
        }

        return new JsonResponse($response);
    }

    /** Add attributes into attribute group */
    public function removeAttributesIntoAttributeGroup(Request $request) 
    {
        $params   = $request->getContent();
        $params   = !empty($params) ? json_decode($params, true) : [];
        try {
            $response[] = $this->attributeRepository->removeAttributeFromAttributeGroup($params);
        
        } catch (\Exception $e) {
            $response[] = $e->getMessage();
        }

        return new JsonResponse($response);
    }
    /** Delete attribute group */
    public function delete(Request $request) {
        $params = $request->getContent();
        $params = !empty($params) ? json_decode($params, true) : [];
        $response = [];
        if(empty($params)) {
            return new JsonResponse([]);
        }
        try {
            $this->attributeRepository->updateAttributesWithDefault($params['code']);
        } catch (\Exception $e) {
            $response[]= $e->getMessage();
            //throw $th;
        }
        return new JsonResponse($response);
    }
}