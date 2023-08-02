<?php
namespace Spygar\UserManagement\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Spygar\UserManagement\Bundle\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Spygar\UserManagement\Bundle\Entity\Role;
use Spygar\UserManagement\Bundle\Entity\User;

/**
 * initiate User Controller to manange list, details users. 
 */

class UserController extends AbstractController
{
    /** @var UserRepository  */
    protected $userRepository;

    public function __construct(
        UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;        
    }

    /**
     * Get user list
     * @return []
     **/

    public function list(Request $request)
    {
        $page    = $request->get('page');
        $limit   = $request->get('limit');
        $results = $this->userRepository->userListWithPagination($page, $limit);

        return new JsonResponse($results);
    }

    /** 
     * Get Single User
     * @return []
     */

    public function details(Request $request)
    {
        $userId = $request->get('id');
        $results = $this->userRepository->getUserDetails($userId);
       
        return new JsonResponse($results);
    }

    /** Create or update user info */
    public function createOrUpdateUser(Request $request)
    {
        $params = $request->getContent();
        $params = !empty($params) ? json_decode($params, true) : [];

        if (empty($params)) {
            return new JsonResponse([]);
        }

        $userInfo    = $params['userInfo'];
        $userId      = isset($userInfo['id']) ? $userInfo['id'] : null;
        $userInstace =  $this->userRepository->findOneById($userId);
        $userInstace = !empty($userInstace) ? $userInstace : new User;

        $userInstace->setFirstName($userInfo['firstName']);
        $userInstace->setLastName($userInfo['lastName']);
        $userInstace->setEmail($userInfo['email']);
        $userInstace->setStatus($userInfo['status']);
        
        $userInstace->setLocales($userInfo['locales']);
        $userInstace->setCatalogLocale($userInfo['catalogLocale']);

        $this->userRepository->saveUser($userInstace);

        return new JsonResponse(['id' => $userInstace->getId()]);
    }

    /** delete user data with UserId */
    public function deleteUser(Request $request)
    {
        dump('delete');die;
    }

}