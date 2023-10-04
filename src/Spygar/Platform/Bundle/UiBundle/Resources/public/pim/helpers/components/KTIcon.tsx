import React from 'react'
import DefaultIcon from '../icons/DefaultIcon'
import iconCollection from './IconCollection';

type Props = {
  className?: string
  iconType?: 'duotone' | 'solid' | 'outline'
  iconName: string
}

const KTIcon: React.FC<Props> = ({iconName}) => {
  return (
        <div>
          { iconCollection[iconName] ? iconCollection[iconName] : <DefaultIcon/> }
        </div>
  )
}
export {KTIcon}
