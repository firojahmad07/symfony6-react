<?php
namespace Spygar\Platform\Bundle\UiBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
/**
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 */
class DashboardCompilerPass implements CompilerPassInterface
{
    
    /** @staticvar string  */

    const STRIDE_MENU_TAGS = "stride.menu.item";

    /** @staticvar string */

    const STRIDE_MENU_REGISTORY = "stride.menu.registory";

    /**
     * {@inheritdoc}
     */
    public function process(ContainerBuilder $container)
    {
        
    }
}