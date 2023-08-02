<?php
namespace Spygar\Platform\Bundle\SettingBundle;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class SettingBundle extends Bundle 
{

    /**
     * {@inheritdoc}
     */
    public function build(ContainerBuilder $container) : void
    {
        // $container->addCompilerPass(new Compiler\DashboardCompilerPass());
    }
}