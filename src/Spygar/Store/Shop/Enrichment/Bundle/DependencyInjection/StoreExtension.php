<?php

namespace Spygar\Store\Bundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class StoreExtension extends Extension
{
    public function load($config, ContainerBuilder $container)
    {
        $fileLoader = new YamlFileLoader($container, new FileLocator(__DIR__ . "/../Resources/config"));

        $fileLoader->load('services.yaml');
    }
}
