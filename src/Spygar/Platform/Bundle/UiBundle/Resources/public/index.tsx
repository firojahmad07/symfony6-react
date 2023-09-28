import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import React from 'react'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
// Apps
import {MetronicI18nProvider} from './pim/i18n/Metronici18n'
import './pim/assets/fonticon/fonticon.css'
import './pim/assets/keenicons/duotone/style.css'
import './pim/assets/keenicons/outline/style.css'
import './pim/assets/keenicons/solid/style.css'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './pim/assets/css/style.rtl.css'
 **/
import './pim/assets/sass/style.scss'
import './pim/assets/sass/plugins.scss'
import './pim/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetronicI18nProvider>
    </QueryClientProvider>
  )
}
