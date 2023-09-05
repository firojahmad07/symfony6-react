import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const SalesTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Sales Navigation</span>
      </div>
    </div>
    <AsideMenuItem
        to='/dashboard'
        icon='color-swatch'
        title="Orders"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem to='/builder' icon='switch' title='Invoices' fontIcon='bi-layers' />
      <AsideMenuItem to='/builder' icon='switch' title='Transactions' fontIcon='bi-layers' />
   </>
  )
}

export {SalesTab}
