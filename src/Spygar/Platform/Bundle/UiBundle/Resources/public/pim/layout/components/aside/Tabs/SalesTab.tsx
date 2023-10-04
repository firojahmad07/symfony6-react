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
      <AsideMenuItem to='/sales/orders' icon='switch' title='Orders' fontIcon='bi-layers' />
      <AsideMenuItem to='/sales/customers' icon='switch' title='Customers' fontIcon='bi-layers' />
   </>
  )
}

export {SalesTab}
