import React, {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {AsideMainMenu} from './components/aside/AsideMainMenu'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {ActivityDrawer, DrawerMessenger, InviteUsers, ThemeModeProvider, UpgradePlan,} from '../partials'
import {MenuComponent} from '../assets/ts/components'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root'>
          {/* begin::Page */}
          <div className='page d-flex flex-row flex-column-fluid'>
            {/* begin::Wrapper */}
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />
              {/* <AsideDefault /> */}
              <AsideMainMenu />
              {/* begin::Content */}
              <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                <Content>
                  <Outlet />
                </Content>
              </div>
              {/* end::Content */}
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Page */}
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals */}
        <InviteUsers />
        <UpgradePlan />
        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

export {MasterLayout}
