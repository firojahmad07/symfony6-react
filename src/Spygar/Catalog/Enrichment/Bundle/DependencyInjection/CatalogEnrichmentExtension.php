<?php

namespace Spygar\Catalog\Enrichment\Bundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class CatalogEnrichmentExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $fileLoader = new YamlFileLoader($container, new FileLocator(__DIR__ . "/../Resources/config"));
        
        $fileLoader->load('repositories.yaml');
        $fileLoader->load('providers.yaml');
        $fileLoader->load('controllers.yaml');
        // $fileLoader->load('forms.yaml');
        // $fileLoader->load('factory.yaml');
    }
}

?>