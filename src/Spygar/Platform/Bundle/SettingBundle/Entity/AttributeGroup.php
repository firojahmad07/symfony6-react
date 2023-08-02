<?php

namespace Spygar\Platform\Bundle\SettingBundle\Entity;

use Spygar\Platform\Bundle\SettingBundle\Repository\AttributeGroupRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AttributeGroupRepository::class)
 * @ORM\Table(name="spygar_catalog_attribute_group")
 */
class AttributeGroup
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $code;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $labels = [];

    /**
     * @ORM\Column(type="integer")
     */
    private $shortOrder;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getShortOrder(): ?int
    {
        return $this->shortOrder;
    }

    public function setShortOrder(int $shortOrder): self
    {
        $this->shortOrder = $shortOrder;

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
}
