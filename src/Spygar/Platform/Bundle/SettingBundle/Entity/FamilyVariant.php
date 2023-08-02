<?php

namespace Spygar\Platform\Bundle\SettingBundle\Entity;

use Spygar\Platform\Bundle\SettingBundle\Repository\FamilyVariantRepository;
use Doctrine\ORM\Mapping as ORM;
use Spygar\Platform\Bundle\SettingBundle\Entity\Family;

/**
 * @ORM\Entity(repositoryClass=FamilyVariantRepository::class)
 * @ORM\Table(name="spygar_catalog_family_variant")
 * 
 */
class FamilyVariant
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Family::class, inversedBy="familyVariants")
     * @ORM\JoinColumn(nullable=false)
     */
    private $family;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $code;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFamily(): ?Family
    {
        return $this->family;
    }

    public function setFamily(?Family $family): self
    {
        $this->family = $family;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }
}
