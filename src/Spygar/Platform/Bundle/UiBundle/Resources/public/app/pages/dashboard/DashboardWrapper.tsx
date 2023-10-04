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

const DashboardPage = () => {
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
                <div className="row g-5 g-xl-10 mb-xl-10">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                        <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                            <div className="card-header pt-5">
                                <div className="card-title d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                                        <span className="badge badge-light-success fs-base">
													<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>2.2%</span>
                                    </div>
                                    <span className="text-gray-400 pt-1 fw-semibold fs-6">Expected Earnings</span>
                                </div>
                            </div>
                            <div className="card-body pt-2 pb-4 d-flex align-items-center">
                                <div className="d-flex flex-center me-5 pt-2">
                                    <div id="kt_card_widget_4_chart" data-kt-size="70" data-kt-line="11"></div>
                                </div>
                                <div className="d-flex flex-column content-justify-center w-100">
                                    <div className="d-flex fs-6 fw-semibold align-items-center">
                                        <div className="bullet w-8px h-6px rounded-2 bg-danger me-3"></div>
                                        <div className="text-gray-500 flex-grow-1 me-4">Shoes</div>
                                        <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
                                    </div>
                                    <div className="d-flex fs-6 fw-semibold align-items-center my-3">
                                        <div className="bullet w-8px h-6px rounded-2 bg-primary me-3"></div>
                                        <div className="text-gray-500 flex-grow-1 me-4">Gaming</div>
                                        <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                                    </div>
                                    <div className="d-flex fs-6 fw-semibold align-items-center">
                                        <div className="bullet w-8px h-6px rounded-2 me-3"></div>
                                        <div className="text-gray-500 flex-grow-1 me-4">Others</div>
                                        <div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-flush h-md-50 mb-xl-10">
                            <div className="card-header pt-5">
                                <div className="card-title d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">1,836</span>
                                        <span className="badge badge-light-danger fs-base">
													<i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>2.2%</span>
                                    </div>
                                    <span className="text-gray-400 pt-1 fw-semibold fs-6">Orders This Month</span>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-end pt-0">
                                <div className="d-flex align-items-center flex-column mt-3 w-100">
                                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                        <span className="fw-bolder fs-6 text-dark">1,048 to Goal</span>
                                        <span className="fw-bold fs-6 text-gray-400">62%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                        <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                            <div className="card-header pt-5">
                                <div className="card-title d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">2,420</span>
                                        <span className="badge badge-light-success fs-base">
													<i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>2.6%</span>
                                    </div>
                                    <span className="text-gray-400 pt-1 fw-semibold fs-6">Average Daily Sales</span>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-end px-0 pb-0">
                                <div id="kt_card_widget_6_chart" className="w-100" ></div>
                            </div>
                        </div>
                        <div className="card card-flush h-md-50 mb-xl-10">
                            <div className="card-header pt-5">
                                <div className="card-title d-flex flex-column">
                                    <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">6.3k</span>
                                    <span className="text-gray-400 pt-1 fw-semibold fs-6">New Customers This Month</span>
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-end pe-0">
                                <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s Heroes</span>
                                <div className="symbol-group symbol-hover flex-nowrap">
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                    </div>
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                        <img alt="Pic" src="assets/media/avatars/300-11.jpg" />
                                    </div>
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                    </div>
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                        <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                    </div>
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                        <span className="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                                    </div>
                                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                                    </div>
                                    <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                        <span className="symbol-label bg-light text-gray-400 fs-8 fw-bold">+42</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0">
                        <div className="card card-flush overflow-hidden h-md-100">
                            <div className="card-header py-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold text-dark">Sales This Months</span>
                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">Users from all channels</span>
                                </h3>
                                <div className="card-toolbar">
                                    <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                        <i className="ki-duotone ki-dots-square fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                        <div className="menu-item px-3">
                                            <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                        </div>
                                        <div className="separator mb-3 opacity-75"></div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Ticket</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Customer</a>
                                        </div>
                                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                            <a href="#" className="menu-link px-3">
                                                <span className="menu-title">New Group</span>
                                                <span className="menu-arrow"></span>
                                            </a>
                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Admin Group</a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Staff Group</a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Member Group</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Contact</a>
                                        </div>
                                        <div className="separator mt-3 opacity-75"></div>
                                        <div className="menu-item px-3">
                                            <div className="menu-content px-3 py-3">
                                                <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
                                <div className="px-9 mb-5">
                                    <div className="d-flex mb-2">
                                        <span className="fs-4 fw-semibold text-gray-400 me-1">$</span>
                                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">14,094</span>
                                    </div>
                                    <span className="fs-6 fw-semibold text-gray-400">Another $48,346 to Goal</span>
                                </div>
                                <div id="kt_charts_widget_3" className="min-h-auto ps-4 pe-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-5 g-xl-10">
                    <div className="col-xl-6 mb-xl-10">
                        <div className="card h-md-100">
                            <div className="card-header align-items-center border-0">
                                <h3 className="fw-bold text-gray-900 m-0">Recent Orders</h3>
                                <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-duotone ki-dots-square fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </button>
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                    <div className="menu-item px-3">
                                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                    </div>
                                    <div className="separator mb-3 opacity-75"></div>
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Customer</a>
                                    </div>
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">New Group</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Member Group</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Contact</a>
                                    </div>
                                    <div className="separator mt-3 opacity-75"></div>
                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3 py-3">
                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-2">
                                <ul className="nav nav-pills nav-pills-custom mb-3">
                                    <li className="nav-item mb-3 me-3 me-lg-6">
                                        <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden active w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_1">
                                            <div className="nav-icon">
                                                <img alt="" src="assets/media/svg/products-categories/t-shirt.svg" className="" />
                                            </div>
                                            <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">T-shirt</span>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 me-3 me-lg-6">
                                        <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_2">
                                            <div className="nav-icon">
                                                <img alt="" src="assets/media/svg/products-categories/gaming.svg" className="" />
                                            </div>
                                            <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">Gaming</span>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 me-3 me-lg-6">
                                        <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_3">
                                            <div className="nav-icon">
                                                <img alt="" src="assets/media/svg/products-categories/watch.svg" className="" />
                                            </div>
                                            <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">Watch</span>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 me-3 me-lg-6">
                                        <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_4">
                                            <div className="nav-icon">
                                                <img alt="" src="assets/media/svg/products-categories/gloves.svg" className="nav-icon" />
                                            </div>
                                            <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">Gloves</span>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_5">
                                            <div className="nav-icon">
                                                <img alt="" src="assets/media/svg/products-categories/shoes.svg" className="nav-icon" />
                                            </div>
                                            <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">Shoes</span>
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="kt_stats_widget_2_tab_1">
                                        <div className="table-responsive">
                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                <thead>
                                                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                    <th className="ps-0 w-50px">ITEM</th>
                                                    <th className="min-w-125px"></th>
                                                    <th className="text-end min-w-100px">QTY</th>
                                                    <th className="pe-0 text-end min-w-100px">PRICE</th>
                                                    <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/210.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Elephant 1802</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$72.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$126.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/215.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Red Laga</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1321</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$45.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$76.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/209.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">RiseUP</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-4312</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x3</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$84.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$168.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kt_stats_widget_2_tab_2">
                                        <div className="table-responsive">
                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                <thead>
                                                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                    <th className="ps-0 w-50px">ITEM</th>
                                                    <th className="min-w-125px"></th>
                                                    <th className="text-end min-w-100px">QTY</th>
                                                    <th className="pe-0 text-end min-w-100px">PRICE</th>
                                                    <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/197.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Elephant 1802</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-4312</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$32.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$312.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/178.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Red Laga</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-3122</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$53.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$62.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/22.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">RiseUP</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1142</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x3</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$74.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$139.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kt_stats_widget_2_tab_3">
                                        <div className="table-responsive">
                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                <thead>
                                                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                    <th className="ps-0 w-50px">ITEM</th>
                                                    <th className="min-w-125px"></th>
                                                    <th className="text-end min-w-100px">QTY</th>
                                                    <th className="pe-0 text-end min-w-100px">PRICE</th>
                                                    <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/1.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Elephant 1324</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1523</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$43.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$231.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/24.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Red Laga</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-5314</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$71.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$53.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/71.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">RiseUP</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-4222</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x3</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$23.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$213.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kt_stats_widget_2_tab_4">
                                        <div className="table-responsive">
                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                <thead>
                                                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                    <th className="ps-0 w-50px">ITEM</th>
                                                    <th className="min-w-125px"></th>
                                                    <th className="text-end min-w-100px">QTY</th>
                                                    <th className="pe-0 text-end min-w-100px">PRICE</th>
                                                    <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/41.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Elephant 2635</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1523</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$65.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$163.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/63.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Red Laga</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2745</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$64.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$73.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/59.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">RiseUP</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-5173</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x3</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$54.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$173.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kt_stats_widget_2_tab_5">
                                        <div className="table-responsive">
                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                <thead>
                                                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                    <th className="ps-0 w-50px">ITEM</th>
                                                    <th className="min-w-125px"></th>
                                                    <th className="text-end min-w-100px">QTY</th>
                                                    <th className="pe-0 text-end min-w-100px">PRICE</th>
                                                    <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/10.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Nike</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2163</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$64.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$287.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/96.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Adidas</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2162</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$76.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$51.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/media/stock/ecommerce/13.png" className="w-50px ms-n1" alt="" />
                                                    </td>
                                                    <td className="ps-0">
                                                        <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Puma</a>
                                                        <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1537</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x3</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$27.00</span>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="text-gray-800 fw-bold d-block fs-6">$167.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-5 mb-xl-10">
                        <div className="card card-flush overflow-hidden h-md-100">
                            <div className="card-header py-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold text-dark">Discounted Product Sales</span>
                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">Users from all channels</span>
                                </h3>
                                <div className="card-toolbar">
                                    <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                        <i className="ki-duotone ki-dots-square fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                        <div className="menu-item px-3">
                                            <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                        </div>
                                        <div className="separator mb-3 opacity-75"></div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Ticket</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Customer</a>
                                        </div>
                                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                            <a href="#" className="menu-link px-3">
                                                <span className="menu-title">New Group</span>
                                                <span className="menu-arrow"></span>
                                            </a>
                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Admin Group</a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Staff Group</a>
                                                </div>
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3">Member Group</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">New Contact</a>
                                        </div>
                                        <div className="separator mt-3 opacity-75"></div>
                                        <div className="menu-item px-3">
                                            <div className="menu-content px-3 py-3">
                                                <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
                                <div className="px-9 mb-5">
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="fs-4 fw-semibold text-gray-400 align-self-start me-1">$</span>
                                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,706</span>
                                        <span className="badge badge-light-success fs-base">
													<i className="ki-duotone ki-arrow-down fs-5 text-success ms-n1">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>4.5%</span>
                                    </div>
                                    <span className="fs-6 fw-semibold text-gray-400">Total Discounted Sales This Month</span>
                                </div>
                                <div id="kt_charts_widget_4" className="min-h-auto ps-4 pe-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-5 g-xl-10">
                    <div className="col-xl-4 mb-xl-10">
                        <div className="card h-md-100" dir="ltr">
                            <div className="card-body d-flex flex-column flex-center">
                                <div className="mb-2">
                                    <h1 className="fw-semibold text-gray-800 text-center lh-lg">Have you tried
                                        <br />new
                                        <span className="fw-bolder">eCommerce App ?</span></h1>
                                    <div className="py-10 text-center">
                                        <img src="assets/media/svg/illustrations/easy/2.svg" className="theme-light-show w-200px" alt="" />
                                        <img src="assets/media/svg/illustrations/easy/2-dark.svg" className="theme-dark-show w-200px" alt="" />
                                    </div>
                                </div>
                                <div className="text-center mb-1">
                                    <a className="btn btn-sm btn-primary me-2" href="../../demo7/dist/apps/ecommerce/sales/listing.html">View App</a>
                                    <a className="btn btn-sm btn-light" href="../../demo7/dist/apps/ecommerce/catalog/add-product.html">New Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-5 mb-xl-10">
                        <div className="card card-flush h-xl-100">
                            <div className="card-header pt-7">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold text-gray-800">Product Orders</span>
                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">Avg. 57 orders per day</span>
                                </h3>
                                <div className="card-toolbar">
                                    <div className="d-flex flex-stack flex-wrap gap-4">
                                        <div className="d-flex align-items-center fw-bold">
                                            <div className="text-gray-400 fs-7 me-2">Cateogry</div>
                                            <select className="form-select form-select-transparent text-graY-800 fs-base lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-className="w-150px" data-placeholder="Select an option">
                                                <option></option>
                                                <option value="Show All">Show All</option>
                                                <option value="a">Category A</option>
                                                <option value="b">Category A</option>
                                            </select>
                                        </div>
                                        <div className="d-flex align-items-center fw-bold">
                                            <div className="text-gray-400 fs-7 me-2">Status</div>
                                            <select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-control="select2" data-hide-search="true" data-dropdown-css-className="w-150px" data-placeholder="Select an option" data-kt-table-widget-4="filter_status">
                                                <option></option>
                                                <option value="Show All">Show All</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Confirmed">Confirmed</option>
                                                <option value="Rejected">Rejected</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        </div>
                                        <div className="position-relative my-1">
                                            <i className="ki-duotone ki-magnifier fs-2 position-absolute top-50 translate-middle-y ms-4">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            <input type="text" data-kt-table-widget-4="search" className="form-control w-150px fs-7 ps-12" placeholder="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-2">
                                <table className="table align-middle table-row-dashed fs-6 gy-3" id="kt_table_widget_4_table">
                                    <thead>
                                    <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                        <th className="min-w-100px">Order ID</th>
                                        <th className="text-end min-w-100px">Created</th>
                                        <th className="text-end min-w-125px">Customer</th>
                                        <th className="text-end min-w-100px">Total</th>
                                        <th className="text-end min-w-100px">Profit</th>
                                        <th className="text-end min-w-50px">Status</th>
                                        <th className="text-end"></th>
                                    </tr>
                                    </thead>
                                    <tbody className="fw-bold text-gray-600">
                                    <tr data-kt-table-widget-4="subtable_template" className="d-none">
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <a href="#" className="symbol symbol-50px bg-secondary bg-opacity-25 rounded">
                                                    <img src="" data-kt-src-path="assets/media/stock/ecommerce/" alt="" data-kt-table-widget-4="template_image" />
                                                </a>
                                                <div className="d-flex flex-column text-muted">
                                                    <a href="#" className="text-gray-800 text-hover-primary fw-bold" data-kt-table-widget-4="template_name">Product name</a>
                                                    <div className="fs-7" data-kt-table-widget-4="template_description">Product description</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="text-gray-800 fs-7">Cost</div>
                                            <div className="text-muted fs-7 fw-bold" data-kt-table-widget-4="template_cost">1</div>
                                        </td>
                                        <td className="text-end">
                                            <div className="text-gray-800 fs-7">Qty</div>
                                            <div className="text-muted fs-7 fw-bold" data-kt-table-widget-4="template_qty">1</div>
                                        </td>
                                        <td className="text-end">
                                            <div className="text-gray-800 fs-7">Total</div>
                                            <div className="text-muted fs-7 fw-bold" data-kt-table-widget-4="template_total">name</div>
                                        </td>
                                        <td className="text-end">
                                            <div className="text-gray-800 fs-7 me-3">On hand</div>
                                            <div className="text-muted fs-7 fw-bold" data-kt-table-widget-4="template_stock">32</div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#XGY-346</a>
                                        </td>
                                        <td className="text-end">7 min ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Albert Flores</a>
                                        </td>
                                        <td className="text-end">$630.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$86.70</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-warning">Pending</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#YHD-047</a>
                                        </td>
                                        <td className="text-end">52 min ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Jenny Wilson</a>
                                        </td>
                                        <td className="text-end">$25.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$4.20</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-primary">Confirmed</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SRR-678</a>
                                        </td>
                                        <td className="text-end">1 hour ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Robert Fox</a>
                                        </td>
                                        <td className="text-end">$1,630.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$203.90</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-warning">Pending</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#PXF-534</a>
                                        </td>
                                        <td className="text-end">3 hour ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Cody Fisher</a>
                                        </td>
                                        <td className="text-end">$119.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$12.00</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#XGD-249</a>
                                        </td>
                                        <td className="text-end">2 day ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Arlene McCoy</a>
                                        </td>
                                        <td className="text-end">$660.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$52.26</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SKP-035</a>
                                        </td>
                                        <td className="text-end">2 day ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Eleanor Pena</a>
                                        </td>
                                        <td className="text-end">$290.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$29.00</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-danger">Rejected</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SKP-567</a>
                                        </td>
                                        <td className="text-end">7 min ago</td>
                                        <td className="text-end">
                                            <a href="#" className="text-gray-600 text-hover-primary">Dan Wilson</a>
                                        </td>
                                        <td className="text-end">$590.00</td>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder">$50.00</span>
                                        </td>
                                        <td className="text-end">
                                            <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                        </td>
                                        <td className="text-end">
                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                                <i className="ki-duotone ki-plus fs-4 m-0 toggle-off"></i>
                                                <i className="ki-duotone ki-minus fs-4 m-0 toggle-on"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.DASHBOARD'})}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
