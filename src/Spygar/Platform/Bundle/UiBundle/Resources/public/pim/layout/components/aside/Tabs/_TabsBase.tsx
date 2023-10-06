/* eslint-disable react/jsx-no-target-blank */
import React, {FC} from 'react'
// import {AuthorsTab} from './AuthorsTab'
// import {MenuTab} from './MenuTab'
// import {NotificationsTab} from './NotificationsTab'
import {IndexTab} from './IndexTab'
import {SalesTab} from './SalesTab'
import {CatalogTab} from './CatalogTab'
import {CMSTab} from './CMSTab'
import {SystemTab} from './SystemTab'
import {SettingsTab} from './SettingsTab'
// import {SubscriptionsTab} from './SubscriptionsTab'
// import {TasksTab} from './TasksTab'

type Props = {
  link: string
}

const SelectedTab: FC<Props> = ({link}) => {
  console.log('selected Link : ', link );
  switch (link) {
    case 'dashboard':
      return <IndexTab />
    case 'sales':
      return <SalesTab />
    case 'catalog':
      return <CatalogTab />
    case 'store':
      return <CMSTab />
    case 'settings':
      return <SettingsTab />
    case 'system':
      return <SystemTab />  
    default:
      return <IndexTab />
  }
}

const TabsBase: FC<Props> = ({link}) => {
  return (
    <div className='d-flex h-100 flex-column'>
      {/* begin::Wrapper */}
      <div
        className='flex-column-fluid hover-scroll-y'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-wrappers='#kt_aside_wordspace'
        data-kt-scroll-dependencies='#kt_aside_secondary_footer'
        data-kt-scroll-offset='0px'
      >
        {/* begin::Tab content */}
        <div className='tab-content'>
          <div
            className='tab-pane fade active show'
            id={`kt_aside_nav_tab_${link}`}
            role='tabpanel'
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Wrapper */}
    </div>
  )
}

export {TabsBase}
