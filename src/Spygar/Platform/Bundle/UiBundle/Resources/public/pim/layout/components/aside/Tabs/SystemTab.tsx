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
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='User' fontIcon='bi-layers' />
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='User groups' fontIcon='bi-layers' />
      <AsideMenuItem to='/apps/user-management/users' icon='switch' title='Roles' fontIcon='bi-layers' />
   </>
  )
}

export {SystemTab}
