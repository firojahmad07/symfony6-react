import React, {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../../pim/layout/core'

const CategoryBreadCrumbs: Array<PageLink> = [
  {
    title: 'Categories',
    path: '/catalog/categories',
    isSeparator: false,
    isActive: false,
  },
]

const CategoryList = () => {
  return (
    <>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            <div className="container-xxl" id="kt_content_container">
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
                    </div>
                    <div className="card-body pt-0">
                        <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_sales_table">
                            <thead>
                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                    <th className="min-w-175px">Catagory</th>
                                    <th className="text min-w-70px">Type</th>
                                    <th className="text-end min-w-100px">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="fw-semibold text-gray-600">
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html">
                                                <div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
                                            </a>
                                        </div>
                                        <div className="ms-5">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
                                        </div>
                                    </div>
                                </td>    
                                <td>
                                    <div className="badge badge-light-primary">Manual</div>
                                </td>                          
                                <td className="text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" 
                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
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
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html">
                                                <div className="symbol-label fs-3 bg-light-primary text-primary">N</div>
                                            </a>
                                        </div>
                                        <div className="ms-5">
                                            <a href="../../demo7/dist/apps/user-management/users/view.html" className="text-gray-800 text-hover-primary fs-5 fw-bold">Neil Owen</a>
                                        </div>
                                    </div>
                                </td>    
                                <td>
                                    <div className="badge badge-light-success">Automated</div>
                                </td>                          
                                <td className="text-end">
                                    <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" 
                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
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

const Categories = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={CategoryBreadCrumbs}>
        {intl.formatMessage({id: 'menu.categories'})}
      </PageTitle>
      <CategoryList />
    </>
  )
}

export {Categories}
