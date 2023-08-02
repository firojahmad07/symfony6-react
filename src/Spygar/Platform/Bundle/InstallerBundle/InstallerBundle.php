<?php
namespace Spygar\Platform\Bundle\InstallerBundle;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class InstallerBundle extends Bundle 
{

    /**
     * {@inheritdoc}
     */
    public function build(ContainerBuilder $container) : void
    {
        // $container->addCompilerPass(new Compiler\DashboardCompilerPass());
    }
}