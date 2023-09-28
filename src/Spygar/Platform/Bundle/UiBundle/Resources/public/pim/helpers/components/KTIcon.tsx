import React from 'react'

import DefaultIcon from '../icons/DefaultIcon'
import DashboardIcon from '../icons/DashboardIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ProductIcon from '../icons/ProductIcon'
import CmsIcon from '../icons/CmsIcon'
import SalesIcon from '../icons/SalesIcon'
import SystemIcon from '../icons/SystemIcon'

type Props = {
  className?: string
  iconType?: 'duotone' | 'solid' | 'outline'
  iconName: string
}
const iconCollection = {
  'dashboard': <DashboardIcon/>,
  'sales': <SalesIcon/>,
  'cms': <CmsIcon/>,
  'products': <ProductIcon/>,
  'settings': <SettingsIcon/>,
  'system': <SystemIcon/>,

}
// console.log("icons : ", icons)
const KTIcon: React.FC<Props> = ({iconName}) => {
  return (
        <div>
          { iconCollection[iconName] ? iconCollection[iconName] : <DefaultIcon/> }
        </div>
  )
}
export {KTIcon}
