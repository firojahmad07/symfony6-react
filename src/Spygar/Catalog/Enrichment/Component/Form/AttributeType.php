<?php
namespace Spygar\Platform\Bundle\SettingBundle\Form;

class AttributeType
{
    const TYPE = [
        [ "code" => "spygar_catalog_text", "label"=> "Text" ],
        [ "code" => "spygar_catalog_textarea", "label"=> "Textarea" ],
        [ "code" => "spygar_catalog_select", "label"=> "Select" ],
        [ "code" => "spygar_catalog_multiselect", "label"=> "Multi select" ],
        [ "code" => "spygar_catalog_boolean", "label"=> "Boolean" ],
        [ "code" => "spygar_catalog_price", "label"=> "Price" ],
        [ "code" => "spygar_catalog_number", "label"=> "Number" ],
        [ "code" => "spygar_catalog_image", "label"=> "Image" ],
    ];
}