/* eslint-disable jsx-a11y/anchor-is-valid */
import {Outlet, Route, Routes} from 'react-router-dom'
import {Error500} from './components/Error500'
import {Error404} from './components/Error404'
import {useEffect} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const ErrorsLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `none`
    return () => {
      document.body.style.backgroundImage = `url(${toAbsoluteUrl('/media/patterns/header-bg.jpg')})`
    }
  }, [])

  return <Outlet />
}

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path='404' element={<Error404 />} />
      <Route path='500' element={<Error500 />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
)

export {ErrorsPage}
