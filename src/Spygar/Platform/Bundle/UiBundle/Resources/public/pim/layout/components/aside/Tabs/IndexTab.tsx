import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const IndexTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Dashboard</span>
      </div>
    </div>
      <AsideMenuItem to='/analytics' icon='color-swatch'  title="Analytics" fontIcon='bi-app-indicator' />
      <AsideMenuItem to='/catalog-monitory' icon='switch' title='Catalog Monitoring' fontIcon='bi-layers' />
   </>
  )
}

export {IndexTab}
