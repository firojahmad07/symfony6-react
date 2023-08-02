<?php

namespace Spygar\Platform\Bundle\SettingBundle\Entity;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeRepository;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeOption;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AttributeRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Table(name="spygar_catalog_attribute")
 */
class Attribute
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=AttributeGroup::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(name="group_id", nullable=false)
     */
    private $group;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $code;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $labels = [];

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $wysiwygEnabled;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isRequired;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isUnique;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isLocalizable;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $attributeType;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $properties = [];

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated;

    /**
     * @ORM\OneToMany(targetEntity=AttributeOption::class, mappedBy="attribute", orphanRemoval=true)
     */
    private $attributeOptions;

    public function __construct()
    {
        $this->attributeOptions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGroup(): ?AttributeGroup
    {
        return $this->group;
    }

    public function setGroup(AttributeGroup $group): self
    {
        $this->group = $group;

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

    public function getLabels(): ?array
    {
        return $this->labels;
    }

    public function setLabels(array $labels): self
    {
        $this->labels = $labels;

        return $this;
    }

    public function getWysiwygEnabled(): ?bool
    {
        return $this->wysiwygEnabled;
    }

    public function setWysiwygEnabled(?bool $wysiwygEnabled): self
    {
        $this->wysiwygEnabled = $wysiwygEnabled;

        return $this;
    }

    public function getIsRequired(): ?bool
    {
        return $this->isRequired;
    }

    public function setIsRequired(bool $isRequired): self
    {
        $this->isRequired = $isRequired;

        return $this;
    }

    public function getIsUnique(): ?bool
    {
        return $this->isUnique;
    }

    public function setIsUnique(bool $isUnique): self
    {
        $this->isUnique = $isUnique;

        return $this;
    }

    public function getIsLocalizable(): ?bool
    {
        return $this->isLocalizable;
    }

    public function setIsLocalizable(bool $isLocalizable): self
    {
        $this->isLocalizable = $isLocalizable;

        return $this;
    }

    public function getAttributeType(): ?string
    {
        return $this->attributeType;
    }

    public function setAttributeType(string $attributeType): self
    {
        $this->attributeType = $attributeType;

        return $this;
    }

    public function getProperties(): ?array
    {
        return $this->properties;
    }

    public function setProperties(?array $properties): self
    {
        $this->properties = $properties;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    /**
     * @ORM\PrePersist
     */
    public function setCreated(): self
    {
        $this->created = new \DateTime();

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    /**
     * @ORM\PreUpdate
     */    
    public function setUpdated(): self
    {
        $this->updated = new \DateTime();
        return $this;
    }

    /**
     * @return Collection|AttributeOption[]
     */
    public function getAttributeOptions(): Collection
    {
        return $this->attributeOptions;
    }

    public function addAttributeOption(AttributeOption $attributeOption): self
    {
        if (!$this->attributeOptions->contains($attributeOption)) {
            $this->attributeOptions[] = $attributeOption;
            $attributeOption->setAttribute($this);
        }

        return $this;
    }

    public function removeAttributeOption(AttributeOption $attributeOption): self
    {
        if ($this->attributeOptions->removeElement($attributeOption)) {
            // set the owning side to null (unless already changed)
            if ($attributeOption->getAttribute() === $this) {
                $attributeOption->setAttribute(null);
            }
        }

        return $this;
    }
}
