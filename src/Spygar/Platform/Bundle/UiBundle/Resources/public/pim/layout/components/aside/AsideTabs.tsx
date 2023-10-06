import clsx from 'clsx'
import React, {Dispatch, FC, SetStateAction} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Link} from "react-router-dom";

const tabMenu = {}
const tabs: ReadonlyArray<{link: string; icon: string; title:string}> = [
  {
    link: 'dashboard',
    icon: 'dashboard',
    title: 'Dashboard',
  },{
    link: 'sales',
    icon: 'sales',
    title: 'Sales',
  },{
    link: 'catalog',
    icon: 'catalog',
    title: 'Catalog',
  },{
    link: 'store',
    icon: 'store',
    title: 'CMS',
  },{
    link: 'settings',
    icon: 'settings',
    title: 'Settings',
  },{
    link: 'system',
    icon: 'system',
    title: 'System',
  }]

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
      {tabs.map((t) => (
        <li key={t.link} className={clsx('nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light', {active: t.link === link} )}>
          <Link to={t.link} onClick={() => setLink(t.link)}>
            <KTIcon iconName={t.icon} className='fs-2x' />
            <p>{t.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export {AsideTabs}
