<?php
namespace Spygar\Platform\Bundle\SettingBundle\Traits;

use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Optional;
use Symfony\Component\Validator\Constraints\Url;

/**
 * form management
 */
trait Forms
{
    /** association type form */
    public function getAssociationTypeForm() 
    {
        $form = $this->createFormBuilder(null, [
            'allow_extra_fields' => true,
            'csrf_protection' => false
        ]);
        $formConstants = [
            'code' => new NotBlank()            
        ];


        foreach ($formConstants as $field => $constraint) {
            $form->add($field, null, [
                    'constraints' => [
                        $constraint
                    ]
                ]);
        }

        return $form->getForm();

    }

    /** 
     * form errors
     * @return []
     */
    public function getFormErrors($form)
    {
        $errorContext = [];
        foreach ($form->getErrors(true) as $key => $error) {
            $errorContext[$error->getOrigin()->getName()] = $error->getMessage();
        }

        return $errorContext;
    }

}

?>