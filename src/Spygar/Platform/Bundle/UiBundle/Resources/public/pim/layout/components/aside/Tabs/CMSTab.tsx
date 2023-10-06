import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const CMSTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Store Navigation</span>
      </div>
    </div>
      <AsideMenuItem to='/store/user-guide' icon='switch' title='User guide' fontIcon='bi-layers' />
   </>
  )
}

export {CMSTab}
