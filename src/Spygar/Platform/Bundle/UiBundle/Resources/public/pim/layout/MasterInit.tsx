import React, {useEffect, useRef} from 'react'
import {Tab} from 'bootstrap'
import {
    DrawerComponent,
    MenuComponent,
    ScrollComponent,
    ScrollTopComponent,
    StickyComponent,
    SwapperComponent,
    ToggleComponent,
} from '../assets/ts/components'
import {ThemeModeComponent} from '../assets/ts/layout'

import {useLayout} from './core'

export function MasterInit() {
  const {config} = useLayout()
  const isFirstRun = useRef(true)
  const pluginsInitialization = () => {
    isFirstRun.current = false
    ThemeModeComponent.init()
    setTimeout(() => {
      ToggleComponent.bootstrap()
      ScrollTopComponent.bootstrap()
      DrawerComponent.bootstrap()
      StickyComponent.bootstrap()
      MenuComponent.bootstrap()
      ScrollComponent.bootstrap()
      SwapperComponent.bootstrap()
      document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
        Tab.getOrCreateInstance(tab)
      })
    }, 500)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      pluginsInitialization()
    }
  }, [config])

  return <></>
}
