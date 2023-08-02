<?php

namespace Spygar\Platform\Bundle\SettingBundle\Entity;

use Spygar\Platform\Bundle\ProductBundle\Entity\Product;
use Spygar\Platform\Bundle\SettingBundle\Entity\FamilyVariant;
use Spygar\Platform\Bundle\SettingBundle\Repository\FamilyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Spygar\Platform\Bundle\SettingBundle\Entity\Attribute;

/**
 * @ORM\Entity(repositoryClass=FamilyRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Table(name="spygar_catalog_family")
 */
class Family
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Attribute::class)
     */
    private $labelAttribute;

    /**
     * @ORM\ManyToOne(targetEntity=Attribute::class)
     */
    private $imageAttribute;

    /**
     * @ORM\Column(type="string", length=60)
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
     * @ORM\ManyToMany(targetEntity=Attribute::class)
     */
    private $attribute;

    /**
     * @ORM\OneToMany(targetEntity=FamilyVariant::class, mappedBy="family")
     */
    private $familyVariants;

    /**
     * @ORM\OneToMany(targetEntity=Product::class, mappedBy="family", orphanRemoval=true)
     */
    private $products;

    public function __construct()
    {
        $this->attribute = new ArrayCollection();
        $this->familyVariants = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabelAttribute(): ?Attribute
    {
        return $this->labelAttribute;
    }

    public function setLabelAttribute(?Attribute $labelAttribute): self
    {
        $this->labelAttribute = $labelAttribute;

        return $this;
    }

    public function getImageAttribute(): ?Attribute
    {
        return $this->imageAttribute;
    }

    public function setImageAttribute(?Attribute $imageAttribute): self
    {
        $this->imageAttribute = $imageAttribute;

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
     * @return Collection|Attribute[]
     */
    public function getAttribute(): Collection
    {
        return $this->attribute;
    }

    public function addAttribute(Attribute $attribute): self
    {
        if (!$this->attribute->contains($attribute)) {
            $this->attribute[] = $attribute;
        }

        return $this;
    }

    public function removeAttribute(Attribute $attribute): self
    {
        $this->attribute->removeElement($attribute);

        return $this;
    }

    /**
     * @return Collection|FamilyVariant[]
     */
    public function getFamilyVariants(): Collection
    {
        return $this->familyVariants;
    }

    public function addFamilyVariant(FamilyVariant $familyVariant): self
    {
        if (!$this->familyVariants->contains($familyVariant)) {
            $this->familyVariants[] = $familyVariant;
            $familyVariant->setFamily($this);
        }

        return $this;
    }

    public function removeFamilyVariant(FamilyVariant $familyVariant): self
    {
        if ($this->familyVariants->removeElement($familyVariant)) {
            // set the owning side to null (unless already changed)
            if ($familyVariant->getFamily() === $this) {
                $familyVariant->setFamily(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setFamily($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getFamily() === $this) {
                $product->setFamily(null);
            }
        }

        return $this;
    }
}
