import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const SettingsTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Settings Navigation</span>
      </div>
    </div>
      <AsideMenuItem to='/settings/users' icon='switch' title='Users' fontIcon='bi-layers' />
   </>
  )
}

export {SettingsTab}
