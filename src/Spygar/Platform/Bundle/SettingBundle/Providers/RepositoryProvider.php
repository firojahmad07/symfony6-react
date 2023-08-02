<?php
namespace Spygar\Platform\Bundle\SettingBundle\Providers;

use Spygar\Platform\Bundle\SettingBundle\Repository\LocaleRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\CurrencyRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;

/** Provide all setting repository like attribute, attribute groups, locale, currency. */
class RepositoryProvider
{
    /** @var LocaleRepository  */
    public $localeRepository;

    /** @var CurrencyRepository */
    public $currencyRepository;

    /** @var AttributeGroupRepository */
    public $attributeGroupRepository;

    /**
     * @param LocaleRepository          $localeRepository
     * @param CurrencyRepository        $currencyRepository
     * @param AttributeGroupRepository  $attributeGroupRepository
     */

    public function __construct(
        LocaleRepository $localeRepository,
        CurrencyRepository $currencyRepository,
        AttributeGroupRepository  $attributeGroupRepository
    )
    {
        $this->localeRepository         = $localeRepository;
        $this->currencyRepository       =  $currencyRepository;
        $this->attributeGroupRepository = $attributeGroupRepository;
    }

    /** provide repository object */

    public function provide($type)
    {
        $repository = null;

        switch($type)
        {
            case "locale":
                $repository = $this->localeRepository;
            break;
            case "currency":
                $repository = $this->currencyRepository;
            break;
            case "attribute_group":
                $repository = $this->attributeGroupRepository;
            break;
        }

        return $repository;
    }
}