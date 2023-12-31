<?php
namespace Spygar\Catalog\Enrichment\Bundle\Controller\Rest\Internal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Spygar\Catalog\Enrichment\Bundle\Repository\LocaleRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 * 
 * This class to manage locales.
 */
class LocaleController extends AbstractController
{
    public function __construct(
        private LocaleRepository $localeRepository
    ) {
        $this->localeRepository = $localeRepository;
    }
    /**
     * Get locale list
     */
    public function list(Request $request)
    {
        $page  = $request->get('page');
        $limit = $request->get('limit');
        
        $records                 = $this->localeRepository->getTotalRecords($limit);
        $results['data']         = $this->localeRepository->localeListWithPagination($page, $limit);
        $results['current_page'] = $page;
        $results = array_merge($results, $records);

        return new JsonResponse($results);
    }

    /** Get active locale list */
    public function activeList(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
      
        $results = $this->localeRepository->activeLocaleListWithPagination($page, $limit);


        return new JsonResponse($results);
    }
}