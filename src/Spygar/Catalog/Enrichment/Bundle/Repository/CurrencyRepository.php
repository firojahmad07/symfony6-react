<?php

namespace Spygar\Catalog\Enrichment\Bundle\Repository;

use Spygar\Catalog\Enrichment\Bundle\Entity\Currency;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Intl\Currencies;

/**
 * @method Currency|null find($id, $lockMode = null, $lockVersion = null)
 * @method Currency|null findOneBy(array $criteria, array $orderBy = null)
 * @method Currency[]    findAll()
 * @method Currency[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CurrencyRepository extends EntityRepository
{
     /** @var EntityManagerInterface */
     protected $entityManager;

     /**
      * @param EntityManagerInterface $entityManager
     */
     public function __construct(
         EntityManagerInterface $entityManager
     ) {
         $classMeta = $entityManager->getClassMetadata(Currency::class);
     
         parent::__construct($entityManager, $classMeta);
     }
 
     /**
      * Get currency list with using pagination
      *
      * @return [] Returns an array of Locale objects
      */


    public function currencyListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        
        $results  = $this->createQueryBuilder('l')
            ->select('l.id, l.code, l.isActive as is_active')
            ->orderBy('l.isActive', 'desc')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

        return $this->formattedData($results);      
    }

    public function formattedData($results) 
    {
        $data = [];
        if(empty($results)) {
            return $data;
        }

        foreach($results as $result) 
        {
            $data[] = 
            [
                "id"             => $result['id'],
                "code"           => $result['code'],
                "label"          => $result['code'] . " (" .$this->currencyLabel($result['code']) . ")",
                "is_active"      => $result['is_active'] ? "Active" : "Inactive",
            ];
        }
        
        return $data;
    }

    /**
     * Returns the currency label
     *
     * @param string $code
     * @param string $translateIn
     *
     * @return string
     */
    public function currencyLabel($code)
    {
        return Currencies::getName($code);
    }

    /** get total pages */
    public function getTotalRecords($limit)
    {
        $resutl = $this->createQueryBuilder('c')
                    ->select('count(c.id)')->getQuery()->getOneOrNullResult();

        $pages = current($resutl)/$limit;

        return [
            "total" => current($resutl),
            "total_page" => (is_float($pages)) ? current(explode(".", $pages)) +1 : $pages,
        ];

    }
}
