<?php
namespace Spygar\Platform\Bundle\SettingBundle\Form;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\LocaleRepository;
use Spygar\Platform\Bundle\SettingBundle\Form\AttributeType;

class AttributeForm
{
    const CREATE_FORM           = [];
    const ATTRIBUTE_GROUP_LIMIT = 200;

    /** @var AttributeGroupRepository */
    private $attributeGroupRepository;

    /** @var LocaleRepository */
    private $localeRepository;


    public function __construct(
        AttributeGroupRepository $attributeGroupRepository,
        LocaleRepository $localeRepository
        )
    {
        $this->attributeGroupRepository = $attributeGroupRepository;
        $this->localeRepository         = $localeRepository;

    }

    /**
     * Create Attribute form
     * @return []
     */
    public function createForm()
    {
        $formContents = [
                    [
                        "label" => "Code", 
                        "types" => ['spygar_catalog_text'], 
                        "placeholder" => "Attribute code", 
                        "name" =>"code", 
                        "required" => true
                    ], [
                        "label" => "Attribute Type", 
                        "types" => ['spygar_catalog_select'], 
                        "placeholder" => "", 
                        "name" =>"attribute_type", 
                        "required" => true, 
                        "options" => AttributeType::TYPE,
                    ], [
                        "label" => "Attribute Group", 
                        "types" => ['spygar_catalog_select'], 
                        "placeholder" => "", 
                        "name" =>"attribute_group", 
                        "required" => true,
                        "options" => $this->attributeGroupRepository->attributeGroupListWithPagination(1,self::ATTRIBUTE_GROUP_LIMIT)
                    ]
        ];

        return [
                'form'      => $formContents,
                'tabs'      => ["Property", "Translation"],
                'others'    => $this->otherSettings(),
                'translation' => [
                    'name' => 'labels',
                    'translations' => $this->localeRepository->getActiveLocales()
                ]
            ];
    }

    /** Get other settings */
    public function otherSettings()
    {
        return [
                [ 'label' => "Rich text editor enabled", 'name' => 'wysiwyg_enabled', 
                    'attribute_type' => 'spygar_catalog_textarea'
                ],
                [ 'label' => "Require value", 'name' => 'is_required', 'attribute_type' => null],
                [ 'label' => "Unique value", 'name' => 'is_unique', 'attribute_type' => null ],
                [ 'label' => "Localizable value", 'name' => 'is_localizable', 'attribute_type' => null ],
        ];
    }
}