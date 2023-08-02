<?php
namespace Spygar\UserManagement\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * initiate Security Controller to manange login, logout and forget password of users. 
 */
class SecurityController extends AbstractController
{
    /**
     * @param Symfony\Component\HttpFoundation\Request                              $request
     * @param Symfony\Component\Security\Http\Authentication\AuthenticationUtils    $authenticationUtils
     */
    
    public function userLogin(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();
        
        return $this->render('@UserManagement/login.html.twig', [
            'error' => $error,
            'username' => $lastUsername
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