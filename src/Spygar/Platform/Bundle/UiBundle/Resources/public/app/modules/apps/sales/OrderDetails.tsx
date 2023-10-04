import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../../pim/layout/core'

const orderDetailsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Orders',
    path: '/sales/order-details',
    isSeparator: false,
    isActive: false,
  },
]

const OrderDetailsPage = () => {
  return (
    <>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="container-xxl" id="kt_content_container">
                <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="d-flex flex-wrap flex-stack gap-5 gap-lg-10">
                        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-lg-n2 me-auto">
                            <li className="nav-item">
                                <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_sales_order_summary">Order Summary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_ecommerce_sales_order_history">Order History</a>
                            </li>
                        </ul>
                        <a href="../../demo7/dist/apps/ecommerce/sales/listing.html" className="btn btn-icon btn-light btn-active-secondary btn-sm ms-auto me-lg-n7">
                            <i className="ki-duotone ki-left fs-2"></i>
                        </a>
                        <a href="../../demo7/dist/apps/ecommerce/sales/edit-order.html" className="btn btn-success btn-sm me-lg-n7">Edit Order</a>
                        <a href="../../demo7/dist/apps/ecommerce/sales/add-order.html" className="btn btn-primary btn-sm">Add New Order</a>
                    </div>
                    <div className="d-flex flex-column flex-xl-row gap-7 gap-lg-10">
                        <div className="card card-flush py-4 flex-row-fluid">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>Order Details (#14534)</h2>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="table-responsive">
                                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                                        <tbody className="fw-semibold text-gray-600">
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-calendar fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>Date Added</div>
                                            </td>
                                            <td className="fw-bold text-end">19/07/2023</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-wallet fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>Payment Method</div>
                                            </td>
                                            <td className="fw-bold text-end">Online
                                                <img src="assets/media/svg/card-logos/visa.svg" className="w-50px ms-2" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-truck fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                    </i>Shipping Method</div>
                                            </td>
                                            <td className="fw-bold text-end">Flat Shipping Rate</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card card-flush py-4 flex-row-fluid">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>Customer Details</h2>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="table-responsive">
                                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                                        <tbody className="fw-semibold text-gray-600">
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-profile-circle fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>Customer</div>
                                            </td>
                                            <td className="fw-bold text-end">
                                                <div className="d-flex align-items-center justify-content-end">
                                                    <div className="symbol symbol-circle symbol-25px overflow-hidden me-3">
                                                        <a href="../../demo7/dist/apps/ecommerce/customers/details.html">
                                                            <div className="symbol-label">
                                                                <img src="assets/media/avatars/300-23.jpg" alt="Dan Wilson" className="w-100" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <a href="../../demo7/dist/apps/ecommerce/customers/details.html" className="text-gray-600 text-hover-primary">Dan Wilson</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-sms fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>Email</div>
                                            </td>
                                            <td className="fw-bold text-end">
                                                <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-600 text-hover-primary">dam@consilting.com</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-phone fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>Phone</div>
                                            </td>
                                            <td className="fw-bold text-end">+6141 234 567</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card card-flush py-4 flex-row-fluid">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>Documents</h2>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="table-responsive">
                                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                                        <tbody className="fw-semibold text-gray-600">
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-devices fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                    </i>Invoice
                                                    <span className="ms-1" data-bs-toggle="tooltip" title="View the invoice generated by this order.">
                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                            </span></div>
                                            </td>
                                            <td className="fw-bold text-end">
                                                <a href="../../demo7/dist/apps/invoices/view/invoice-3.html" className="text-gray-600 text-hover-primary">#INV-000414</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-truck fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                    </i>Shipping
                                                    <span className="ms-1" data-bs-toggle="tooltip" title="View the shipping manifest generated by this order.">
                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                            </span></div>
                                            </td>
                                            <td className="fw-bold text-end">
                                                <a href="#" className="text-gray-600 text-hover-primary">#SHP-0025410</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">
                                                <div className="d-flex align-items-center">
                                                    <i className="ki-duotone ki-discount fs-2 me-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>Reward Points
                                                    <span className="ms-1" data-bs-toggle="tooltip" title="Reward value earned by customer when purchasing this order">
                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                            </span></div>
                                            </td>
                                            <td className="fw-bold text-end">600</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="kt_ecommerce_sales_order_summary" role="tab-panel">
                            <div className="d-flex flex-column gap-7 gap-lg-10">
                                <div className="d-flex flex-column flex-xl-row gap-7 gap-lg-10">
                                    <div className="card card-flush py-4 flex-row-fluid position-relative">
                                        <div className="position-absolute top-0 end-0 bottom-0 opacity-10 d-flex align-items-center me-5">
                                            <i className="ki-solid ki-two-credit-cart"></i>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Billing Address</h2>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">Unit 1/23 Hastings Road,
                                            <br />Melbourne 3000,
                                            <br />Victoria,
                                            <br />Australia.</div>
                                    </div>
                                    <div className="card card-flush py-4 flex-row-fluid position-relative">
                                        <div className="position-absolute top-0 end-0 bottom-0 opacity-10 d-flex align-items-center me-5">
                                            <i className="ki-solid ki-delivery"></i>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <h2>Shipping Address</h2>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">Unit 1/23 Hastings Road,
                                            <br />Melbourne 3000,
                                            <br />Victoria,
                                            <br />Australia.</div>
                                    </div>
                                </div>
                                <div className="card card-flush py-4 flex-row-fluid overflow-hidden">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h2>Order #14534</h2>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                                                <thead>
                                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                    <th className="min-w-175px">Product</th>
                                                    <th className="min-w-100px text-end">SKU</th>
                                                    <th className="min-w-70px text-end">Qty</th>
                                                    <th className="min-w-100px text-end">Unit Price</th>
                                                    <th className="min-w-100px text-end">Total</th>
                                                </tr>
                                                </thead>
                                                <tbody className="fw-semibold text-gray-600">
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                                                <span className="symbol-label"></span>
                                                            </a>
                                                            <div className="ms-5">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="fw-bold text-gray-600 text-hover-primary">Product 1</a>
                                                                <div className="fs-7 text-muted">Delivery Date: 19/07/2023</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">02426002</td>
                                                    <td className="text-end">2</td>
                                                    <td className="text-end">$120.00</td>
                                                    <td className="text-end">$240.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                                                <span className="symbol-label"></span>
                                                            </a>
                                                            <div className="ms-5">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="fw-bold text-gray-600 text-hover-primary">Footwear</a>
                                                                <div className="fs-7 text-muted">Delivery Date: 19/07/2023</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">02345008</td>
                                                    <td className="text-end">1</td>
                                                    <td className="text-end">$24.00</td>
                                                    <td className="text-end">$24.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4} className="text-end">Subtotal</td>
                                                    <td className="text-end">$264.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4} className="text-end">VAT (0%)</td>
                                                    <td className="text-end">$0.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4} className="text-end">Shipping Rate</td>
                                                    <td className="text-end">$5.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4} className="fs-3 text-dark text-end">Grand Total</td>
                                                    <td className="text-dark fs-3 fw-bolder text-end">$269.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_ecommerce_sales_order_history" role="tab-panel">
                            <div className="d-flex flex-column gap-7 gap-lg-10">
                                <div className="card card-flush py-4 flex-row-fluid">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h2>Order History</h2>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                                                <thead>
                                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                    <th className="min-w-100px">Date Added</th>
                                                    <th className="min-w-175px">Comment</th>
                                                    <th className="min-w-70px">Order Status</th>
                                                    <th className="min-w-100px">Customer Notifed</th>
                                                </tr>
                                                </thead>
                                                <tbody className="fw-semibold text-gray-600">
                                                <tr>
                                                    <td>19/07/2023</td>
                                                    <td>Order completed</td>
                                                    <td>
                                                        <div className="badge badge-light-success">Completed</div>
                                                    </td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>18/07/2023</td>
                                                    <td>Order received by customer</td>
                                                    <td>
                                                        <div className="badge badge-light-success">Delivered</div>
                                                    </td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr>
                                                    <td>17/07/2023</td>
                                                    <td>Order shipped from warehouse</td>
                                                    <td>
                                                        <div className="badge badge-light-primary">Delivering</div>
                                                    </td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr>
                                                    <td>16/07/2023</td>
                                                    <td>Payment received</td>
                                                    <td>
                                                        <div className="badge badge-light-primary">Processing</div>
                                                    </td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>15/07/2023</td>
                                                    <td>Pending payment</td>
                                                    <td>
                                                        <div className="badge badge-light-warning">Pending</div>
                                                    </td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>14/07/2023</td>
                                                    <td>Payment method updated</td>
                                                    <td>
                                                        <div className="badge badge-light-warning">Pending</div>
                                                    </td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>13/07/2023</td>
                                                    <td>Payment method expired</td>
                                                    <td>
                                                        <div className="badge badge-light-danger">Failed</div>
                                                    </td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr>
                                                    <td>12/07/2023</td>
                                                    <td>Pending payment</td>
                                                    <td>
                                                        <div className="badge badge-light-warning">Pending</div>
                                                    </td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>11/07/2023</td>
                                                    <td>Order received</td>
                                                    <td>
                                                        <div className="badge badge-light-warning">Pending</div>
                                                    </td>
                                                    <td>Yes</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-flush py-4 flex-row-fluid">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <h2>Order Data</h2>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5">
                                                <tbody className="fw-semibold text-gray-600">
                                                <tr>
                                                    <td className="text-muted">IP Address</td>
                                                    <td className="fw-bold text-end">172.68.221.26</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">Forwarded IP</td>
                                                    <td className="fw-bold text-end">89.201.163.49</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">User Agent</td>
                                                    <td className="fw-bold text-end">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">Accept Language</td>
                                                    <td className="fw-bold text-end">en-GB,en-US;q=0.9,en;q=0.8</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

const OrderDetails = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={orderDetailsBreadCrumbs}>
        {intl.formatMessage({id: 'menu.details'})}
      </PageTitle>
      <OrderDetailsPage />
    </>
  )
}

export {OrderDetails}
