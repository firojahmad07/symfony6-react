<?php
namespace Spygar\Platform\Bundle\SettingBundle\Controller\Rest\Internal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Platform\Bundle\SettingBundle\Repository\CurrencyRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage currencies.
 */
class CurrencyController extends AbstractController
{
    /** @var CurrencyRepository */
    private $currencyRepository;

    /**
     * @param LocaleRepository $localeRepository
     */

    public function __construct(CurrencyRepository $currencyRepository)
    {
        $this->currencyRepository = $currencyRepository;
    }
    /**
     * render index page
     */
    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        $results = $this->currencyRepository->currencyListWithPagination($page, $limit);
       
        return new JsonResponse($results);

        // $records = $this->currencyRepository->getTotalRecords($limit);

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

   
}