<?php
namespace Spygar\UserManagement\Component\Context;

use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Spygar\UserManagement\Bundle\Repository\UserRepository;

class UserContext
{
    /** @var TokenStorageInterface */
    private $tokentStorage;

    /** @var UserRepository */
    private $userRepository;

    /** User Info */
    protected $userInfo;

    public function __construct(
        TokenStorageInterface $tokentStorage,
        UserRepository $userRepository
        ) 
    {
        $this->tokentStorage  = $tokentStorage;
        $this->userRepository = $userRepository;
        $this->userInfo = $this->tokentStorage->getToken()->getUser();
    }
    /** Return Current Logged in User Details */
    public function getCurrentUser() 
    {
       return $this->userInfo;
    }

    /** Get user catalog locale */
    public function getUserCatalogLocale()
    {
        return !empty($this->userInfo) ? $this->userInfo->getCatalogLocale() : [];
    }
    /** Get user ui locale */
    public function getUserUILocales()
    {
        return !empty($this->userInfo) ? $this->userInfo->getLocales() : [];
    }

    /** User all data */
    public function getUserDetails() 
    {
        return !empty($this->userInfo) ? $this->userRepository->getUserDetails($this->userInfo->getId()) : [];        
    }
}