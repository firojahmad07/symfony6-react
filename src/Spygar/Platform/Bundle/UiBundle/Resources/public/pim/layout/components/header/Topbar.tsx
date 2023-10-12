/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, ThemeModeSwitcher} from '../../../partials'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
      <div className='d-flex align-items-center mb-2'>
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Notifications'
        >
          <KTIcon iconName='element-11' className='fs-2 text-lg-1' />
        </div>
        <HeaderNotificationsMenu backgrounUrl='/media/misc/pattern-1.jpg' />
      </div>
        <div className='d-flex align-items-center ms-3'>
            <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
                <div
                    className='cursor-pointer symbol symbol-40px'
                    data-kt-menu-trigger='click'
                    data-kt-menu-overflow='false'
                    data-kt-menu-placement='top-start'
                    title='User profile'
                >
                    <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='avatar' />
                </div>
                <HeaderUserMenu />
            </div>
        </div>
  </div>
)

export {Topbar}
