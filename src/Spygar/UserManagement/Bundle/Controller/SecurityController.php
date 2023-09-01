<?php
namespace Spygar\UserManagement\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Spygar\UserManagement\Bundle\Entity\User;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * initiate Security Controller to manange login, logout and forget password of users. 
 */
class SecurityController extends AbstractController
{
    public function userLogin(?User $user)
    {
        if (null === $user) {
             return $this->json([
                 'message' => 'missing credentials',
             ], Response::HTTP_UNAUTHORIZED);
         }
         $token = "as5d5f4as5df4a56sdf46as5d4f6a5sd4f6qrqwer4zcvasd6f54qwr4";
         
         return $this->json([
            'user'  => $user->getUserIdentifier(),
            'token' => $token,
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