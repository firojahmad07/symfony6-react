<?php

namespace Spygar\Platform\Bundle\SettingBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class SettingExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $fileLoader = new YamlFileLoader(
            $container, 
            new FileLocator(__DIR__ . "/../Resources/config")
        );
        
        $fileLoader->load('repositories.yaml');
        $fileLoader->load('providers.yaml');
        $fileLoader->load('controllers.yaml');
        $fileLoader->load('forms.yaml');
        $fileLoader->load('factory.yaml');
    }
}

?>