<?php

namespace Spygar\Platform\Bundle\SettingBundle\Entity;

use Spygar\Platform\Bundle\SettingBundle\Repository\AssociationTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Spygar\Platform\Bundle\ProductBundle\Entity\Product;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AssociationTypeRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Table(name="spygar_catalog_association_type")
 */
class AssociationType
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $code;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $labels = [];

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated;

    /**
     * @ORM\ManyToMany(targetEntity=Product::class)
     */
    private $product;  

    public function __construct()
    {
        $this->product = new ArrayCollection();
    }

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

    public function setLabels(?array $labels): self
    {
        $this->labels = $labels;

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
     * @return Collection|self[]
     */
    public function getProduct(): Collection
    {
        return $this->product;
    }

    public function addProduct(self $product): self
    {
        if (!$this->product->contains($product)) {
            $this->product[] = $product;
        }

        return $this;
    }

    public function removeProduct(self $product): self
    {
        $this->product->removeElement($product);

        return $this;
    }
}
