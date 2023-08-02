<?php

namespace Spygar\Platform\Bundle\UiBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class UIExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $fileLoader = new YamlFileLoader(
            $container, 
            new FileLocator(__DIR__ . "/../Resources/config")
        );

        $fileLoader->load('services.yaml');
        $fileLoader->load('menu.yaml');
    }
}

?>