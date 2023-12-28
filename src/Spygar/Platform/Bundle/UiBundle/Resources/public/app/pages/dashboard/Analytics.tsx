import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../pim/layout/core'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]

const AnalyticsPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="container-xxl" id="kt_content_container">
                <div className="row g-5 g-xl-8">
                                    <div className="col-xl-4">
                                        <a href="#" className="card bg-danger hoverable card-xl-stretch mb-xl-8">
                                            <div className="card-body">
                                                <i className="ki-duotone ki-basket text-white fs-2x ms-n1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>
                                                <div className="text-white fw-bold fs-2 mb-2 mt-5">Shopping Cart</div>
                                                <div className="fw-semibold text-white">Lands, Houses, Ranchos, Farms</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-4">
                                        <a href="#" className="card bg-primary hoverable card-xl-stretch mb-xl-8">
                                            <div className="card-body">
                                                <i className="ki-duotone ki-cheque text-white fs-2x ms-n1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                    <span className="path5"></span>
                                                    <span className="path6"></span>
                                                    <span className="path7"></span>
                                                </i>
                                                <div className="text-white fw-bold fs-2 mb-2 mt-5">Appartments</div>
                                                <div className="fw-semibold text-white">Flats, Shared Rooms, Duplex</div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="col-xl-4">
                                        <a href="#" className="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">

                                            <div className="card-body">
                                                <i className="ki-duotone ki-chart-simple-3 text-white fs-2x ms-n1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>
                                                <div className="text-white fw-bold fs-2 mb-2 mt-5">Sales Stats</div>
                                                <div className="fw-semibold text-white">50% Increased for FY20</div>
                                            </div>
                                        </a>
                                    </div>
                </div>
                <div className="row g-5 g-xl-8">
                    <div className="col-xl-3">
                        <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <i className="ki-duotone ki-chart-simple text-primary fs-2x ms-n1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                                <div className="text-gray-900 fw-bold fs-2 mb-2 mt-5">500M$</div>
                                <div className="fw-semibold text-gray-400">SAP UI Progress</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3">
                        <a href="#" className="card bg-dark hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <i className="ki-duotone ki-cheque text-gray-100 fs-2x ms-n1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                    <span className="path6"></span>
                                    <span className="path7"></span>
                                </i>
                                <div className="text-gray-100 fw-bold fs-2 mb-2 mt-5">+3000</div>
                                <div className="fw-semibold text-gray-100">New Customers</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3">
                        <a href="#" className="card bg-warning hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <i className="ki-duotone ki-briefcase text-white fs-2x ms-n1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <div className="text-white fw-bold fs-2 mb-2 mt-5">$50,000</div>
                                <div className="fw-semibold text-white">Milestone Reached</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3">
                        <a href="#" className="card bg-info hoverable card-xl-stretch mb-5 mb-xl-8">
                            <div className="card-body">
                                <i className="ki-duotone ki-chart-pie-simple text-white fs-2x ms-n1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <div className="text-white fw-bold fs-2 mb-2 mt-5">$50,000</div>
                                <div className="fw-semibold text-white">Milestone Reached</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const Analytics = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.ANALYTICS'})}
      </PageTitle>
      <AnalyticsPage />
    </>
  )
}

export {Analytics}
