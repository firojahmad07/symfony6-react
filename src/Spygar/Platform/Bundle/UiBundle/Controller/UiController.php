<?php
namespace Spygar\Platform\Bundle\UiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 */
class UiController extends AbstractController
{
    /**
     * render index page
     */
    public function index()
    {
        return $this->render('@UI/index.html.twig');
    }
}