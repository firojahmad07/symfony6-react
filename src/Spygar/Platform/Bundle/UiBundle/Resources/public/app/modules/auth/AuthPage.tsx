/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../pim/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none'
    return () => {}
  }, [])

  return (
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <a href="../../demo7/dist/index.html" className="d-block d-lg-none mx-auto py-20">
            <img alt="Logo" src="assets/media/logos/default.svg" className="theme-light-show h-25px" />
            <img alt="Logo" src="assets/media/logos/default-dark.svg" className="theme-dark-show h-25px" />
          </a>
          <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
            <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
              <div className="d-flex flex-stack py-2">
                <div className="me-2"></div>
                <div className="m-0">
                  <span className="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="sign-in-head-desc">Not a Member yet?</span>
                </div>
              </div>
              <div className="py-20">
               <Outlet/>
              </div>
              <div className="m-0">
                <button className="btn btn-flex btn-link rotate" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                  <img data-kt-element="current-lang-flag" className="w-25px h-25px rounded-circle me-3" src="assets/media/flags/united-states.svg" alt="" />
                  <span data-kt-element="current-lang-name" className="me-2">English</span>
                  <i className="ki-duotone ki-down fs-2 text-muted rotate-180 m-0"></i>
                </button>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4" data-kt-menu="true" id="kt_auth_lang_menu">
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
										<span className="symbol symbol-20px me-4">
											<img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
										</span>
                      <span data-kt-element="lang-name">English</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
										<span className="symbol symbol-20px me-4">
											<img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
										</span>
                      <span data-kt-element="lang-name">Spanish</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
										<span className="symbol symbol-20px me-4">
											<img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
										</span>
                      <span data-kt-element="lang-name">German</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
										<span className="symbol symbol-20px me-4">
											<img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
										</span>
                      <span data-kt-element="lang-name">Japanese</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
										<span className="symbol symbol-20px me-4">
											<img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/france.svg" alt="" />
										</span>
                      <span data-kt-element="lang-name">French</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat"></div>
        </div>
      </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
