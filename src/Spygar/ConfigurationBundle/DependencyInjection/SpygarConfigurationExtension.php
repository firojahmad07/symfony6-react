<?php

namespace Spygar\ConfigurationBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Finder\Finder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class SpygarConfigurationExtension extends Extension
{
    const CONFIG_PATH = '/../Resources/config';
    const COMMON_FILE = '/parameters.yaml';
    public function load($config, ContainerBuilder $container)
    {
        $finder = new Finder();
        $configReader = new YamlFileLoader($container, new FileLocator(__DIR__ . self::CONFIG_PATH));
        $directories = $finder->directories()->in(__DIR__ . self::CONFIG_PATH);

        if ($finder->hasResults()) {
            foreach ($directories as $directory) {
                if (file_exists($directory->getPathname() . self::COMMON_FILE)) {
                    $configReader->load($directory->getBasename() . self::COMMON_FILE);
                }
            }
        }
    }
}