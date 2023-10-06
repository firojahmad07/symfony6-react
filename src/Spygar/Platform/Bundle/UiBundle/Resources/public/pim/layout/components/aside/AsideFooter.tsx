import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import React from "react";
const AsideFooter = () => {
  const helpStyle = {
    display: 'block'
  };

  return (
    <div className='aside-footer d-flex flex-column align-items-center flex-column-auto' id='kt_aside_footer'>
      <div className='d-flex align-items-center mb-2'>
        <a href="https://www.linkedin.com/in/firoj-ahmad-29a857142/" 
          className='nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light' style={helpStyle} target='_blank'>
          <KTIcon iconName='help' className='fs-2 text-lg-1' />
          <p>Help</p>
        </a>
      </div>
    </div>
  )
}

export {AsideFooter}