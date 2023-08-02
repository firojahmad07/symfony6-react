<?php
namespace Spygar\Platform\Bundle\ProductBundle\Controller;

use Spygar\Platform\Bundle\ProductBundle\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage product.
 */
class ProductController extends AbstractController
{
    /** @var ProductRepository */
    private $productRepository;


    /**
     * @param ProductRepository $productRepository
     */
    public function __construct( ProductRepository $productRepository )
    {
        $this->productRepository = $productRepository;
    }

    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page  = is_numeric($request->get('page')) ? $request->get('page') : 1;
        $limit = is_numeric($request->get('limit')) ? $request->get('limit') : 15;
       
        
        $data  = $this->productRepository->getProductByPagination($page, $limit);

        return new JsonResponse($data);
    }

    /** Create New Category */
    public function create(Request $request)
    {
        
        $requestParams = $request->getContent();
        $requestParams = !empty($requestParams) ? json_decode($requestParams, true) : []; 
           
        try {
            $code = $this->productRepository->createOrUpdate($requestParams);
            $responseParams['code'] = $code;
        } catch (\Exception $ex) {
            // dump($ex->getMessage());die;
           $responseParams['code'] = null;
        }
        
        return new JsonResponse($responseParams);
    }
    
    /** Update Category */
    public function details(Request $request)
    {
        $productId = $request->get('productId');
        $product   = $this->productRepository->getProductDetails($productId);

        return new JsonResponse($product);
    }
}