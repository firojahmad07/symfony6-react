import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const SystemTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>System Navigation</span>
      </div>
    </div>
    <AsideMenuItem to='/system/configuration' icon='switch' title='Configuration' fontIcon='bi-layers' />
    <AsideMenuItem to='/system/locales' icon='switch' title='Locales' fontIcon='bi-layers' />
    <AsideMenuItem to='/system/currencies' icon='switch' title='Currencies' fontIcon='bi-layers' />
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User Management</span>
      </div>
    </div>
    <AsideMenuItem to='/system/users' icon='switch' title='Users' fontIcon='bi-layers' />
    <AsideMenuItem to='/system/roles' icon='switch' title='Roles' fontIcon='bi-layers' />
   </>
  )
}

export {SystemTab}
