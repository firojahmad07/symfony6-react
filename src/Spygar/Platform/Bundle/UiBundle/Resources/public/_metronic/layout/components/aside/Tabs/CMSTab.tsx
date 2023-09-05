import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const CMSTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>CMS Navigation</span>
      </div>
    </div>
    <AsideMenuItem
        to='/dashboard'
        icon='color-swatch'
        title="Sliders"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='Pages' fontIcon='bi-layers' />
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='Customers' fontIcon='bi-layers' />
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='Reviews' fontIcon='bi-layers' />
   </>
  )
}

export {CMSTab}
