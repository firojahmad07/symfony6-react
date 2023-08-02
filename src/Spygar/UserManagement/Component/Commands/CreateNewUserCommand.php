<?php
namespace Spygar\UserManagement\Component\Commands;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Spygar\UserManagement\Bundle\Entity\Role;
use Spygar\UserManagement\Bundle\Entity\User;
use Doctrine\ORM\EntityManager;
/**
 * Create Default admin user
 * 
 * @author Firoj Ahmad <firojahmad07@gmail.com>
 */

class CreateNewUserCommand extends Command
{
    /** @var EntityManager $entityManager */
    protected $entityManager;

    /** @var UserPasswordEncoderInterface $passwordEncoder */
    protected $passwordEncoder;

    protected static $defaultName = 'spygar:create:user';

    /**
     * @param EntityManager $entityManager
     * @param UserPasswordEncoderInterface $passwordEncoder
     */
    public function __construct(
        EntityManager $entityManager,
        UserPasswordEncoderInterface $passwordEncoder
        )
    {
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;

        parent::__construct();
    }
    
    protected function configure(): void
    {
        $this
            // the short description shown while running "php bin/console list"
            ->setDescription('Creates a new user.')

            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command allows you to create a user...')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->writeln([
            'User Creator',
            '============',
            '',
        ]);
        
        $roles = $this->defaultRoles();
        $roleRepository = $this->entityManager->getRepository(Role::class);
        $userRepository = $this->entityManager->getRepository(User::class);

        foreach($roles as $role) 
        {
            $isExists       = $roleRepository->findOneBy(['code'=> $role['code']]);
            $roleInstance   = !empty($isExists) ? $isExists : new Role;

            $roleInstance->setCode($role['code']);
            $roleInstance->setName($role['name']);

            $this->entityManager->persist($roleInstance);
            $this->entityManager->flush();
        }

        $userRole = $roleRepository->findOneBy(['code' => "ROLE_ADMIN"]);

        foreach($this->defaultUsers() as $user) 
        {
            $userExists   = $userRepository->findOneBy(['username' => $user['username']]);
            $userInstance = !empty($userExists) ? $userExists : new User;
            $password     = $this->passwordEncoder->encodePassword($userInstance, $user['password']);
            
            $userInstance->setFirstName($user['first_name']);
            $userInstance->setLastName($user['last_name']);
            $userInstance->setUsername($user['username']);
            $userInstance->setEmail($user['email']);
            $userInstance->setStatus(true);
            $userInstance->setPassword($password);
            $userInstance->addRole($userRole);

            $this->entityManager->persist($userInstance);
            $this->entityManager->flush();
        }

        $output->write('create a user.');

        return Command::SUCCESS;
    }

    /**
     * Get Default Roles
     * @return []
     */
    protected function defaultRoles()
    {
        return [
            ["code" => "ROLE_ADMIN", "name" => "Admin"],
            ["code" => "ROLE_SUPER_ADMIN", "name" => "Super admin"],
            ["code" => "ROLE_Manager", "name" => "Manager"]
        ];
    }

    /** 
     * Get Default Users
     * 
     * @return []
     */

    protected function defaultUsers()
    {
        return [
            [
                "first_name" => "John",
                "last_name"  => "Doe",
                "username"   => "admin",
                "email"      => "johdoe@spygar.com",
                "password"   => "admin"
            ],
        ];
    }

}