<?php
namespace Spygar\UserManagement\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Spygar\UserManagement\Bundle\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Spygar\UserManagement\Bundle\Repository\RoleRepository;

/**
 * initiate User Controller to manange list, details users. 
 */

class RoleController extends AbstractController
{
    /** @var RoleRepository  */
    protected $roleRepository;

    public function __construct(
        RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;        
    }

    /**
     * Get user list
     * @return []
     **/

    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');

        $results = $this->roleRepository->roleListWithPagination($page, $limit);

        return new JsonResponse($results);
    }

    /** 
     * Get Single User
     * @return []
     */

    public function details(Request $request)
    {
        try {
            $result = $this->roleRepository->getRoleDetails($this->getParsedData($request));
        } catch (\Exception $e) {
            //throw $th;
            $result[] = $e->getMessage();
        }

        return new JsonResponse($result);
    }

    /** 
     * Create a new role
     */

    public function createOrUpdate(Request $request)
    {

    }

    /** 
     * Create a new role
     */

    public function delete(Request $request)
    {

    }
    
    /** 
     * Parse post request param into array
     * @return []
     */
    public function getParsedData(Request $request) {
        $param = $request->getContent();
        return !empty($param) ? json_decode($param, true) : [];
    }
}