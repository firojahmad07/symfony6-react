<?php
namespace Spygar\Store\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * initiate Security Controller to manange login, logout and forget password of users.
 * 
 */
class UserController extends AbstractController
{
    public function account()
    {        
        return $this->render('@Store/user/account.html.twig');
    }

    public function products()
    {        
        return $this->render('@Store/products.html.twig');
    }

    public function productDetails()
    {        
        return $this->render('@Store/product-details.html.twig');
    }

    public function wishlist()
    {        
        return $this->render('@Store/index.html.twig');
    }
    public function cart()
    {        
        return $this->render('@Store/index.html.twig');
    }
}