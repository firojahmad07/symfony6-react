<?php

namespace Spygar\UserManagement\Bundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class UserManagementExtension extends Extension
{
    public function load($config, ContainerBuilder $container)
    {
        $fileLoader = new YamlFileLoader($container,
            new FileLocator(__DIR__ . "/../Resources/config"));

        $fileLoader->load('controllers.yaml');
        $fileLoader->load('repositories.yaml');
        $fileLoader->load('services.yaml');
        $fileLoader->load('context.yaml');
        $fileLoader->load('commands.yaml');
    }
}
