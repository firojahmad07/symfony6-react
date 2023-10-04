/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, ThemeModeSwitcher} from '../../../partials'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
          <div className='d-flex align-items-center ms-3'>
              <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
                  {/* begin::Menu wrapper */}
                  <div
                      className='cursor-pointer symbol symbol-40px'
                      data-kt-menu-trigger='click'
                      data-kt-menu-overflow='false'
                      data-kt-menu-placement='top-start'
                      title='User profile'
                  >
                      <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='avatar' />
                  </div>
                  {/* end::Menu wrapper */}
                  <HeaderUserMenu />
              </div>
          </div>
        <div className='d-flex align-items-center ms-3'>
            <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
                {/* begin::Menu wrapper */}
                <div
                    className='cursor-pointer symbol symbol-40px'
                    data-kt-menu-trigger='click'
                    data-kt-menu-overflow='false'
                    data-kt-menu-placement='top-start'
                    title='User profile'
                >
                    <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='avatar' />
                </div>
                {/* end::Menu wrapper */}
                <HeaderUserMenu />
            </div>
        </div>
  </div>
)

export {Topbar}
