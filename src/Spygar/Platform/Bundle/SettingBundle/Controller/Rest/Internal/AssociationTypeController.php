<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Platform\Bundle\SettingBundle\Repository\AssociationTypeRepository;
use Spygar\Platform\Bundle\SettingBundle\Traits\Forms;
use Spygar\Platform\Bundle\SettingBundle\Form\AttributeForm;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage assocations.
 */
class AssociationTypeController extends AbstractController
{
    use Forms;
    
    /** @var AssociationTypeRepository */
    private $associationTypeRepository;

    /**
     * @param AssociationTypeRepository   $associationTypeRepository
     */

    public function __construct(
        AssociationTypeRepository $associationTypeRepository
        )
    {
        $this->associationTypeRepository = $associationTypeRepository;
    }

    /** Get Attribute By code */
    public function details(Request $request)
    {
        $id = $request->get('id');
        $data = $this->associationTypeRepository->getAssociationById($id);

        return new JsonResponse($data);
    }
    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        $results = $this->associationTypeRepository->associationTypesWithPagination($page, $limit);
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

    /** Create new attribute */
    public function createOrUpdate(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];
        
        $form = $this->getAssociationTypeForm();
        $form->submit($requestParams);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) 
        { 
            $code = $this->associationTypeRepository->createOrUpdateAssociaitonType($requestParams);
            return new JsonResponse(['code' => $code]);
        } else {
            return new JsonResponse($this->getFormErrors($form), RESPONSE::HTTP_BAD_REQUEST);
        }
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