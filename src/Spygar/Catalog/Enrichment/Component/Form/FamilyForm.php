<?php
namespace Spygar\Platform\Bundle\SettingBundle\Form;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Repository\LocaleRepository;
use Spygar\Platform\Bundle\SettingBundle\Form\AttributeType;

class FamilyForm
{
    const CREATE_FORM           = [];
    const ATTRIBUTE_GROUP_LIMIT = 200;
    const TEXT_TYPE_ATTRIBUTE   = 'spygar_catalog_text';
    const IMAGE_TYPE_ATTRIBUTE  = 'spygar_catalog_image';

    /** @var AttributeRepository */
    private $attributeRepository;

    /** @var LocaleRepository */
    private $localeRepository;


    public function __construct(
        AttributeRepository $attributeRepository,
        LocaleRepository $localeRepository
        )
    {
        $this->attributeRepository = $attributeRepository;
        $this->localeRepository    = $localeRepository;

    }

    /**
     * Create Attribute form
     * @return []
     */
    public function createForm($code, $familyRepository)
    {
        $formContents = [
                    [
                        "label"   => "Code",
                        "support" => "text",
                        "placeholder" => "code", 
                        "name" =>"code", 
                        "required" => true
                    ], [
                        "label" => "Attribute as label", 
                        "support" => "select",
                        "placeholder" => "", 
                        "name" =>"attribute_as_label", 
                        "required" => true, 
                        "options" => $this->attributeRepository->getAttributeByType([self::TEXT_TYPE_ATTRIBUTE])
                    ], [
                        "label" => "Attribute as the main picture", 
                        "support" => "select",
                        "placeholder" => "", 
                        "name" =>"attribute_as_image", 
                        "required" => true,
                        "options" => $this->attributeRepository->getAttributeByType([self::IMAGE_TYPE_ATTRIBUTE])
                    ]
        ];
               
        return [
                'form'          => $formContents,
                'attributes'    => $familyRepository->getFamilyAttributes($code),
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