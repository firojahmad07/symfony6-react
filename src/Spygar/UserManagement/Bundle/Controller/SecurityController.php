<?php
namespace Spygar\UserManagement\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Spygar\UserManagement\Bundle\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Spygar\UserManagement\Bundle\Entity\User;

/**
 * initiate Security Controller to manange login, logout and forget password of users. 
 */
class SecurityController extends AbstractController
{
    /** @var UserRepository */
    private $userRepository;

    private $mappings;

    public function __construct(UserRepository $userRepository, $mappings) 
    {
        $this->userRepository = $userRepository;
        $this->mappings= $mappings;
    }

    public function userLogin(#[CurrentUser]?User $user)
    {
        if (null === $user) {
             return $this->json([
                 'message' => 'Invalide credentials',
             ], Response::HTTP_UNAUTHORIZED);
         }

         $token = $this->userRepository->generateAccessToken($user);
         
         return $this->json([
            'user'  => $user->getUserIdentifier(),
            'api_token' => $token,
        ]);
    }

    /** Verify login token */
    public function verifyToken(#[CurrentUser]?User $user)
    {
        dump($this->mappings);die;
        return $this->json([
            'user'  => $user->getUserIdentifier(),
            'api_token' => $user->getAccessToken(),
        ]);
    }
    /**
     * forgot user password and reset
     */
    public function forgotPassword()
    {
        return $this->render('@UserManagement/forgot-password.html.twig');
    }

    public function userLogout()
    {

    }
}