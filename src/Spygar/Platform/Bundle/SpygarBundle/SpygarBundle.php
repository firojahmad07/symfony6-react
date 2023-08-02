<?php
namespace Spygar\Platform\Bundle\SpygarBundle;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class SpygarBundle extends Bundle 
{
    /**
     * {@inheritdoc}
     */
    public function build(ContainerBuilder $container) : void
    {
        // $container->addCompilerPass(new Compiler\DashboardCompilerPass());
    }
}