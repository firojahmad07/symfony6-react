<?php
namespace Spygar\Platform\Bundle\UiBundle;

// use Spygar\Platform\Bundle\UiBundle\DependencyInjection\Compiler;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class UIBundle extends Bundle 
{

    /**
     * {@inheritdoc}
     */
    public function build(ContainerBuilder $container) : void
    {
        // $container->addCompilerPass(new Compiler\DashboardCompilerPass());
    }
}