import clsx from 'clsx'
import React, {Dispatch, FC, SetStateAction} from 'react'
import {KTIcon} from '../../../helpers'

const tabMenu = {}
const tabs: ReadonlyArray<{link: string; icon: string; route: string, title:string, tooltip: string}> = [
  {
    link: 'dashboard',
    icon: 'element-11',
    route: 'dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
  },
  {
    link: 'sales',
    icon: 'briefcase',
    route: 'sales',
    title: 'Sales',
    tooltip: 'Sales',
  },
  {
    link: 'catalog',
    icon: 'chart-simple',
    route: 'catalog',
    title: 'catalog',
    tooltip: 'Catalog',
  },
  {
    link: 'cms',
    icon: 'shield-tick',
    route: 'cms',
    title: 'CMS',
    tooltip: 'CMS',
  },
  {
    link: 'settings',
    icon: 'shield-tick',
    route: 'settings',
    title: 'Settings',
    tooltip: 'Settings',
  },
  {
    link: 'system',
    icon: 'shield-tick',
    route: 'system',
    title: 'System',
    tooltip: 'System',
  }
]

type Props = {
  link: string
  setLink: Dispatch<SetStateAction<string>>
}

const AsideTabs: FC<Props> = ({link, setLink}) => (
  <div
    className='hover-scroll-y mb-10'
    data-kt-scroll='true'
    data-kt-scroll-activate='{default: false, lg: true}'
    data-kt-scroll-height='auto'
    data-kt-scroll-wrappers='#kt_aside_nav'
    data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
    data-kt-scroll-offset='0px'
  >
    {/* begin::Nav */}
    <ul className='nav flex-column' id='kt_aside_nav_tabs'>
      {/* begin::Nav item */}
      {tabs.map((t) => (
        <li key={t.link}>
          {/* begin::Nav link */}
          <a
            className={clsx(
              'nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light',
              {active: t.link === link}
            )}
            onClick={() => setLink(t.link)}
          >
            <KTIcon iconName={t.icon} className='fs-2x' />
          </a>
          {/* end::Nav link */}
        </li>
      ))}
      {/* end::Nav link */}
    </ul>
    {/* end::Tabs */}
  </div>
)

export {AsideTabs}
