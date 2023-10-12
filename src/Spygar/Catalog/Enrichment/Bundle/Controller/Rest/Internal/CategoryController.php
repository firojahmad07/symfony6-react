<?php
namespace Spygar\Catalog\Enrichment\Bundle\Controller\Rest\Internal;

use Spygar\Catalog\Enrichment\Bundle\Repository\CategoryRepository;
use Spygar\Catalog\Enrichment\Bundle\Repository\LocaleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage Category.
 */
class CategoryController extends AbstractController
{
    /** @var CategoryRepository */
    private $categoryRepository;

    /** @var LocaleRepository */
    private $localRepository;


    /**
     * @param CategoryRepository $categoryRepository
     * @param LocaleRepository   $localRepository
     */
    public function __construct(
        CategoryRepository $categoryRepository,
        LocaleRepository $localRepository
        )
    {
        $this->categoryRepository = $categoryRepository;
        $this->localRepository    = $localRepository;
    }

    /**
     * render index page
     */
    public function list(Request $request)
    {
        $results  = $this->categoryRepository->categoryList();
        // $response = [
        //     "records"       => $results,
        //     "translations"  => $this->localRepository->getActiveLocales()
        // ];

        return new JsonResponse($results);
    }

    /** Create New Category */
    public function create(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : []; 
      
        try {
            $code = $this->categoryRepository->createOrUpdate($requestParams);
            $responseParams['code'] = $code;
        } catch (\Exception $ex) {
            // dump($ex->getMessage());die;
           $responseParams['code'] = null;
        }

        return new JsonResponse($responseParams);
    }
    
    /** Update Category */
    public function update(Request $request)
    {
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : []; 
      
        try {
            $code = $this->categoryRepository->update($requestParams);
            $responseParams['code'] = $code;
        } catch (\Exception $ex) {
            // dump();die;
           $responseParams[] = $ex->getMessage();
        }

        return new JsonResponse($responseParams);
    }
}