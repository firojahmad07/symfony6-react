<?php
namespace Spygar\Platform\Bundle\InstallerBundle\Commands;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Spygar\Platform\Bundle\SettingBundle\Providers\RepositoryProvider;
use Spygar\Platform\Bundle\SettingBundle\Entity\Locale;
use Spygar\Platform\Bundle\SettingBundle\Entity\Currency;
use Spygar\Platform\Bundle\SettingBundle\Entity\AttributeGroup;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Spygar\UserManagement\Bundle\Entity\Role;
use Spygar\UserManagement\Bundle\Entity\User;
use Doctrine\ORM\EntityManager;
use League\Csv\Reader;

/**
 * Create Default admin user
 * 
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 */

class FixtureInstallerCommand extends Command
{
    const FIXTURE_BASE_PATH = "src/Spygar/Platform/Bundle/InstallerBundle/Resources/fixtures/";

    /** @var EntityManager $entityManager */
    protected $entityManager;

    /** @var RepositoryProvider $repositoyProvider */
    protected $repositoyProvider;

    protected static $defaultName = 'spygar:installer:db';

    /**
     * @param EntityManager         $entityManager
     * @param RepositoryProvider    $repositoyProvider
     */
    public function __construct(
        EntityManager $entityManager,
        RepositoryProvider  $repositoyProvider
        )
    {
        $this->entityManager     = $entityManager;
        $this->repositoyProvider = $repositoyProvider;

        parent::__construct();
    }
    
    protected function configure(): void
    {
        $this->setDescription('Installing fixtures locales, currency etc.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->localeFixture();     
        // $output->write('Locale fixture successfully import.<br>');

        $this->currencyFixture();     
        // $output->write('Currency fixture successfully import.');
        $this->attributeGroupfixtures();
        return Command::SUCCESS;
    }

    /** retrun csv data as array */
    public function getCsvStandardData($filename)
    {
        $csv = Reader::createFromPath(static::FIXTURE_BASE_PATH.$filename, 'r');
        $csv->setHeaderOffset(0);

        $standardData = [];
        $header       = $csv->getHeader(); //returns the CSV header record
        $records      = $csv->getRecords(); //returns all the CSV records as an Iterator object

        foreach ($records as $record) {

            $headers        = explode(";", current(array_keys($record)));
            $values         = explode(";", current(array_values($record)));
            $standardData[] = array_combine($headers, $values);
        }
      
        return $standardData;
    }

    public function localeFixture()
    {
        $standardData     = $this->getCsvStandardData('locales.csv');
        $localeRepository = $this->repositoyProvider->provide('locale');

        foreach($standardData as $localeData) {

            $localeInstance = $localeRepository->findOneByCode($localeData['code']);
            $localeInstance = !empty($localeInstance) ? $localeInstance : new Locale;

            $localeInstance->setCode($localeData['code']);
            $localeInstance->setIsActive(false);
            
            $this->entityManager->persist($localeInstance);
            $this->entityManager->flush();
        }
    }

    public function currencyFixture()
    {
        $standardData       = $this->getCsvStandardData('currencies.csv');
        $currencyRepository = $this->repositoyProvider->provide('currency');
        
        foreach($standardData as $currencyData) {

            $currencyInstance = $currencyRepository->findOneByCode($currencyData['code']);
            $currencyInstance = !empty($currencyInstance) ? $currencyInstance : new Currency;
            $isActive       = (1 == $currencyData['activated']) ? true : false;

            $currencyInstance->setCode($currencyData['code']);
            $currencyInstance->setIsActive($isActive);
            
            $this->entityManager->persist($currencyInstance);
            $this->entityManager->flush();
        }
    }
    public function attributeGroupfixtures()
    {
        $standardData       = $this->getCsvStandardData('attribute_groups.csv');
        $attributeGroupRepo = $this->repositoyProvider->provide('attribute_group');        
        $now = new \DateTime();

        foreach ($standardData as $attributeGroup) 
        {
            $attributeGroupInstance = $attributeGroupRepo->findOneByCode($attributeGroup['code']);
            $attributeGroupInstance = !empty($attributeGroupInstance) ? $attributeGroupInstance : new AttributeGroup;

            $attributeGroupInstance->setCode($attributeGroup['code']);
            $attributeGroupInstance->setLabels([]);
            $attributeGroupInstance->setShortOrder($attributeGroup['sort_order']);
            $attributeGroupInstance->setCreated($now);
            $attributeGroupInstance->setUpdated($now);

            $this->entityManager->persist($attributeGroupInstance);
            $this->entityManager->flush();
        }
    }
}