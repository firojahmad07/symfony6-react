<?php
namespace Spygar\Platform\Bundle\ProductBundle;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class ProductBundle extends Bundle 
{
    /**
     * {@inheritdoc}
     */
    public function build(ContainerBuilder $container) : void
    {
        // $container->addCompilerPass(new Compiler\DashboardCompilerPass());
    }
}