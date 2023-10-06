import {AsideMenuItem} from '../AsideMenuItem'
import {useIntl} from 'react-intl'
import React from 'react'

const CatalogTab = () => {
  const intl = useIntl()

  return (
   <>
    <div className='menu-item'>
      <div className='menu-content pt-8 pb-2'>
        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Catalog Navigation</span>
      </div>
    </div>
      <AsideMenuItem to='/catalog/products' icon='switch' title='Products' fontIcon='bi-layers' />
      <AsideMenuItem to='/catalog/categories' icon='switch' title='Categories' fontIcon='bi-layers' />
   </>
  )
}

export {CatalogTab}
