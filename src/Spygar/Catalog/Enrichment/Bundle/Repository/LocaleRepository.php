<?php

namespace Spygar\Catalog\Enrichment\Bundle\Repository;

use Spygar\Catalog\Enrichment\Bundle\Repository\ConfigurationRepository;
use Spygar\Catalog\Enrichment\Bundle\Entity\Locale;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;

/**
 * @method Locale|null find($id, $lockMode = null, $lockVersion = null)
 * @method Locale|null findOneBy(array $criteria, array $orderBy = null)
 * @method Locale[]    findAll()
 * @method Locale[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocaleRepository extends EntityRepository
{
    /** @var EntityManagerInterface */
    protected $entityManager;
    
    /** @var ConfigurationRepository */
    protected $configurationRepository;
    /**
     * @param EntityManagerInterface  $entityManager
     * @param ConfigurationRepository $configurationRepository
    */
    public function __construct(
        EntityManagerInterface  $entityManager,
        // ConfigurationRepository $configurationRepository
    ) {
        $classMeta = $entityManager->getClassMetadata(Locale::class);
        // $this->configurationRepository = $configurationRepository;

        parent::__construct($entityManager, $classMeta);
    }

    /**
     * @return Locale[] Returns an array of Locale objects
     */

    public function localeListWithPagination($page, $limit)
    {
        $pageSize       = ($limit * ($page-1));
                
        $results  = $this->createQueryBuilder('l')
            ->select('l.id, l.code, l.isActive as active')
            ->orderBy('l.id', 'ASC')
            ->setFirstResult($pageSize)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

        return $this->formattedData($results);      
    }

    /** Fetch active locales with pagination */
    public function activeLocaleListWithPagination($page, $limit)
    {
        $pageSize = ($limit * ($page-1)); 
        $locales  = $this->configurationRepository->getDetailBySectionAndName();

        if (empty($locales)) {
            return [];
        }
        $codes = json_decode($locales['value']);
        // dump($locales, $codes);die;
        
        $results  = $this->createQueryBuilder('l')
            ->select('l.id, l.code, l.isActive as active')
            ->orderBy('l.active', 'DESC')
            ->setFirstResult($pageSize)
            ->where('l.code IN (:codes)')
            ->setParameters(['codes' => $codes ])
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
            $codeExplode = explode("_", $result['code']);
            $flagCode = strtolower(end($codeExplode));
            // doc https://www.php.net/manual/en/locale.getdisplaylanguage.php
            $data[] = 
            [
                "id"         => $result['id'],
                "code"       => $result['code'],
                "flag"       => $flagCode,
                "flag_class" => "flag flag-".$flagCode,
                "active"     => $result['active'],
                "name"       => \Locale::getDisplayName($result['code']),
                "display_name" => \Locale::getDisplayLanguage($result['code']),
            ];
        }

        return $data;
    }

    /** get total pages */
    public function getTotalRecords($limit)
    {
        $resutl = $this->createQueryBuilder('l')
                    ->select('count(l.id)')->getQuery()->getOneOrNullResult();

        $pages = current($resutl)/$limit;

        return [
            "total" => current($resutl),
            "total_page" => (is_float($pages)) ? current(explode(".", $pages)) +1 : $pages,
        ];

    }
    
    public function getActiveLocales(): array
    {
        $data = [];
        $results = $this->createQueryBuilder('l')
            ->select('l.code')
            ->andWhere('l.isActive = :active')
            ->setParameter('active', true)
            ->getQuery()
            ->getResult()
        ;

        if (!empty($results)) {
            foreach ($results as $result) {
               $data[] = [
                   "code" => $result['code'],
                   "label"   => \Locale::getDisplayName($result['code']),
               ];
            }
        }

        return $data;        
    }

    public function formatConfigurationForLocale($details)
    {
        $codes = [];

        foreach($details as $detail) {
            $codes[] = $detail['code'];
        }

        return $codes;
    }
}
