<?php
namespace Spygar\Platform\Installer\Commands;

use Spygar\Catalog\Enrichment\Bundle\Entity\Locale;
use Spygar\Catalog\Enrichment\Bundle\Entity\Currency;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManager;
use League\Csv\Reader;
use Doctrine\ORM\EntityRepository;

/**
 * Create Default admin user
 * 
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 */
#[AsCommand(name: 'spygar:installer:db')]
class FixtureInstallerCommand extends Command
{
    const FIXTURE_BASE_PATH = "src/Spygar/Platform/Installer/Resources/fixtures/";

    public function __construct(
        protected EntityManager $entityManager,
        protected EntityRepository $localeRepository,
        protected EntityRepository $currencyRepository
        )
    {
        $this->entityManager      = $entityManager;
        $this->localeRepository   = $localeRepository;
        $this->currencyRepository = $currencyRepository;

        parent::__construct();
    }
    
    protected function configure(): void
    {
        $this->setDescription('Installing fixtures locales, currency etc.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->localeFixture();     
        // $output->write('Locale fixture successfully import.<br>');

        $this->currencyFixture();     
        // $output->write('Currency fixture successfully import.');
        return Command::SUCCESS;
    }

    /** retrun csv data as array */
    public function getCsvStandardData($filename): array
    {
        $csv = Reader::createFromPath(static::FIXTURE_BASE_PATH.$filename, 'r');
        $csv->setHeaderOffset(0);

        $standardData = [];
        $records      = $csv->getRecords();

        foreach ($records as $record) {
            $headers        = explode(";", current(array_keys($record)));
            $values         = explode(";", current(array_values($record)));
            $standardData[] = array_combine($headers, $values);
        }
        
        return $standardData;
    }

    public function localeFixture(): void
    {
        $standardData = $this->getCsvStandardData('locales.csv');

        foreach($standardData as $localeData) {
            $localeInstance = $this->localeRepository->findOneByCode($localeData['code']);
            $localeInstance = !empty($localeInstance) ? $localeInstance : new Locale;

            $localeInstance->setCode($localeData['code']);
            $localeInstance->setIsActive(false);
            
            $this->entityManager->persist($localeInstance);
            $this->entityManager->flush();
        }
    }

    public function currencyFixture()
    {
        $standardData = $this->getCsvStandardData('currencies.csv');
        
        foreach($standardData as $currencyData) {

            $currencyInstance = $this->currencyRepository->findOneByCode($currencyData['code']);
            $currencyInstance = !empty($currencyInstance) ? $currencyInstance : new Currency;
            $isActive = (1 == $currencyData['activated']) ? true : false;

            $currencyInstance->setCode($currencyData['code']);
            $currencyInstance->setIsActive($isActive);
            
            $this->entityManager->persist($currencyInstance);
            $this->entityManager->flush();
        }
    }
}