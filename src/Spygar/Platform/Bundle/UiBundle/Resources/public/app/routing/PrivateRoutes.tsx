import React, {FC, lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../pim/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {Analytics} from '../pages/dashboard/Analytics'

import {getCSSVariableValue} from '../../pim/assets/ts/_utils'
import {WithChildren} from '../../pim/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const SalesWrapper = lazy(() => import('../pages/SalesWrapper'))
  const CatalogWrapper = lazy(() => import('../pages/CatalogWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const StoreWrapper = lazy(() => import('../pages/StoreWrapper'))
  const SettingsWrapper = lazy(() => import('../pages/SettingsWrapper'))
  const SystemWrapper = lazy(() => import('../pages/SystemWrapper'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/analytics' />} />
        {/* Pages */}        
        <Route path='analytics' element={<DashboardWrapper />} />
        <Route path='catalog-monitory' element={<Analytics />} />

        <Route path='sales/*' element={ <SuspensedView> <SalesWrapper /> </SuspensedView> } />
        <Route path='catalog/*' element={ <SuspensedView> <CatalogWrapper /> </SuspensedView> } />
        <Route path='store/*' element={ <SuspensedView> <StoreWrapper /> </SuspensedView> } />
        <Route path='settings/*' element={ <SuspensedView> <SettingsWrapper /> </SuspensedView> } />
        <Route path='system/*' element={ <SuspensedView> <SystemWrapper /> </SuspensedView> } />

        <Route path='*' element={<Navigate to='/error/404' />} />

        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
            path='crafted/account/*'
            element={
              <SuspensedView>
                <AccountPage />
              </SuspensedView>
            }
          />
          <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
