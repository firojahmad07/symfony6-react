import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../../pim/layout/core'
import {Link} from "react-router-dom";

const orderBreadCrumbs: Array<PageLink> = [
  {
    title: 'Orders',
    path: '/sales/orders',
    isSeparator: false,
    isActive: false,
  },
]

const OrderList = () => {
  return (
    <>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="container-fluid" id="kt_content_container">
                <div className="card card-flush">
                    <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                        <div className="card-title">
                            <div className="d-flex align-items-center position-relative my-1">
                                <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search Order" />
                            </div>
                        </div>
                        <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                            <div className="input-group w-250px">
                                <input className="form-control form-control-solid rounded rounded-end-0" placeholder="Pick date range" id="kt_ecommerce_sales_flatpickr" />
                                <button className="btn btn-icon btn-light" id="kt_ecommerce_sales_flatpickr_clear">
                                    <i className="ki-duotone ki-cross fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </button>
                            </div>
                            <div className="w-100 mw-150px">
                                <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-order-filter="status">
                                    <option></option>
                                    <option value="all">All</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Denied">Denied</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Failed">Failed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Refunded">Refunded</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Delivering">Delivering</option>
                                </select>
                            </div>
                            <a href="../../demo7/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-primary">Add Order</a>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_sales_table">
                            <thead>
                            <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                <th className="w-10px pe-2">
                                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                        <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_sales_table .form-check-input" value="1" />
                                    </div>
                                </th>
                                <th className="min-w-100px">Order ID</th>
                                <th className="min-w-175px">Customer</th>
                                <th className="text-end min-w-70px">Status</th>
                                <th className="text-end min-w-100px">Total</th>
                                <th className="text-end min-w-100px">Date Added</th>
                                <th className="text-end min-w-100px">Date Modified</th>
                                <th className="text-end min-w-100px">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="fw-semibold text-gray-600">
                            <tr>
                                <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                <td data-kt-ecommerce-order-filter="order_id">
                                    <a href="../../demo7/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">14373</a>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html">
                                                <div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
                                            </a>
                                        </div>
                                        <div className="ms-5">
                                        <Link to={`sales/order-details`} className="text-gray-800 text-hover-primary fs-5 fw-bold"> Neil Owen </Link>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end pe-0" data-order="Expired">
                                    <div className="badge badge-light-danger">Expired</div>
                                </td>
                                <td className="text-end pe-0">
                                    <span className="fw-bold">$12.00</span>
                                </td>
                                <td className="text-end" data-order="2023-07-15">
                                    <span className="fw-bold">15/07/2023</span>
                                </td>
                                <td className="text-end" data-order="2023-07-18">
                                    <span className="fw-bold">18/07/2023</span>
                                </td>
                                <td className="text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                        <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                        <div className="menu-item px-3">
                                            <a href="../../demo7/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="../../demo7/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                <td data-kt-ecommerce-order-filter="order_id">
                                    <a href="../../demo7/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">14374</a>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html">
                                                <div className="symbol-label fs-3 bg-light-danger text-danger">O</div>
                                            </a>
                                        </div>
                                        <div className="ms-5">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Olivia Wild</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end pe-0" data-order="Pending">
                                    <div className="badge badge-light-warning">Pending</div>
                                </td>
                                <td className="text-end pe-0">
                                    <span className="fw-bold">$405.00</span>
                                </td>
                                <td className="text-end" data-order="2023-07-12">
                                    <span className="fw-bold">12/07/2023</span>
                                </td>
                                <td className="text-end" data-order="2023-07-17">
                                    <span className="fw-bold">17/07/2023</span>
                                </td>
                                <td className="text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                        <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                        <div className="menu-item px-3">
                                            <a href="../../demo7/dist/apps/ecommerce/sales/details.html" className="menu-link px-3">View</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="../../demo7/dist/apps/ecommerce/sales/edit-order.html" className="menu-link px-3">Edit</a>
                                        </div>
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-ecommerce-order-filter="delete_row">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const Orders = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={orderBreadCrumbs}>
        {intl.formatMessage({id: 'menu.orders'})}
      </PageTitle>
      <OrderList />
    </>
  )
}

export {Orders}
