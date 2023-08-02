<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Spygar\Platform\Bundle\SettingBundle\Repository\FamilyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Platform\Bundle\SettingBundle\Factory\FamilyFactory;
use Spygar\Platform\Bundle\SettingBundle\Form\FamilyForm;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage family.
 */
class FamilyController extends AbstractController
{
    /** @var FamilyRepository */
    private $familyRepository;

    /** @var FamilyFactory */
    private $familyFactory;

    /** @var FamilyForm */
    private $familyForm;

    /**
     * @param FamilyRepository $familyRepository
     * @param FamilyFactory    $familyFactory
     * @param FamilyForm       $familyForm
     */

    public function __construct(
        FamilyRepository $familyRepository,
        FamilyFactory    $familyFactory,
        FamilyForm       $familyForm
        )
    {
        $this->familyRepository = $familyRepository;
        $this->familyFactory    = $familyFactory;
        $this->familyForm       = $familyForm;
    }

    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        $results = $this->familyRepository->familyListWithPagination($page, $limit);
      
        // $records = $this->familyRepository->getTotalRecords($limit);

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

        return new JsonResponse($results);
    }

    /** Family form */
    public function generateForm(Request $request)
    {
        $familyCode         = $request->get('code');
        $fromData           = $this->familyForm->createForm($familyCode, $this->familyRepository);
        $fromData['family'] = $this->familyRepository->getFamilyDetailsByCode($familyCode);
       
        return new JsonResponse($fromData);
    }

    /** Create New Family */
    public function create(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : []; 
       

        try {
            $code = $this->familyFactory->createOrUpdate($requestParams, $this->familyRepository);
            $responseParams['code'] = $code;
        } catch (\Exception $ex) {
            // dump($ex->getMessage());die;
           $responseParams['code'] = null;
        }

        return new JsonResponse($responseParams);
    }
    /** Remove family by code */ 
    public function delete(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : [];       
        try {
            $this->familyRepository->deleteFamily($requestParams);
            $responseParams['success'] = true;
        } catch (\Exception $ex) {
           $responseParams['error'] = $ex->getMessage();
        }

        return new JsonResponse($responseParams);
    }

    public function details(Request $request)
    {
        $familyCode = $request->get('code');
        try {
            $result = $this->familyRepository->getFamilyDetailsByCode($familyCode);
            
        } catch (\Exception $ex) {
            $result = $ex->getMessage();
        }

        return new JsonResponse($result);
    }

    public function addAttributes(Request $request)
    {
        $requestParams  = $request->getContent();
        $requestParams  = !empty($requestParams) ? json_decode($requestParams, true) : [];
        $familyInstance = $this->familyRepository->findOneByCode($requestParams['familyCode']);
        $this->familyFactory->addAttributesIntoFamily($requestParams, $familyInstance);
        
        return new JsonResponse($requestParams);
    }
}