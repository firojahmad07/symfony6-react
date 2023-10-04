import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../pim/layout/core'

const usersBreadcrumbs: Array<PageLink> = [
    {
        title: 'Sales',
        path: '/sales/orders',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const Products = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path='orders'
                    element={
                        <>
                           <PageTitle breadcrumbs={usersBreadcrumbs}>Products</PageTitle>
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
                                                    <input type="text" data-kt-ecommerce-product-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search Product" />
                                                </div>
                                            </div>
                                            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                                                <div className="w-100 mw-150px">
                                                    <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                                                        <option></option>
                                                        <option value="all">All</option>
                                                        <option value="published">Published</option>
                                                        <option value="scheduled">Scheduled</option>
                                                        <option value="inactive">Inactive</option>
                                                    </select>
                                                </div>
                                                <a href="../../demo7/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-primary">Add Product</a>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                                                <thead>
                                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                    <th className="w-10px pe-2">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_products_table .form-check-input" value="1" />
                                                        </div>
                                                    </th>
                                                    <th className="min-w-200px">Product</th>
                                                    <th className="text-end min-w-100px">SKU</th>
                                                    <th className="text-end min-w-70px">Qty</th>
                                                    <th className="text-end min-w-100px">Price</th>
                                                    <th className="text-end min-w-100px">Rating</th>
                                                    <th className="text-end min-w-100px">Status</th>
                                                    <th className="text-end min-w-70px">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="fw-semibold text-gray-600">
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                                                <span className="symbol-label"></span>
                                                            </a>
                                                            <div className="ms-5">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 1</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="fw-bold">01339004</span>
                                                    </td>
                                                    <td className="text-end pe-0" data-order="21">
                                                        <span className="fw-bold ms-3">21</span>
                                                    </td>
                                                    <td className="text-end pe-0">107</td>
                                                    <td className="text-end pe-0" data-order="rating-3">
                                                        <div className="rating justify-content-end">
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0" data-order="Inactive">
                                                        <div className="badge badge-light-danger">Inactive</div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                                            <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                            <div className="menu-item px-3">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                                                            </div>
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                                                                <span className="symbol-label"></span>
                                                            </a>
                                                            <div className="ms-5">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">Product 2</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0">
                                                        <span className="fw-bold">01533007</span>
                                                    </td>
                                                    <td className="text-end pe-0" data-order="9">
                                                        <span className="badge badge-light-warning">Low stock</span>
                                                        <span className="fw-bold text-warning ms-3">9</span>
                                                    </td>
                                                    <td className="text-end pe-0">59</td>
                                                    <td className="text-end pe-0" data-order="rating-5">
                                                        <div className="rating justify-content-end">
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                            <div className="rating-label checked">
                                                                <i className="ki-duotone ki-star fs-6"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end pe-0" data-order="Published">
                                                        <div className="badge badge-light-success">Published</div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                                            <i className="ki-duotone ki-down fs-5 ms-1"></i></a>
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                            <div className="menu-item px-3">
                                                                <a href="../../demo7/dist/apps/ecommerce/catalog/edit-product.html" className="menu-link px-3">Edit</a>
                                                            </div>
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3" data-kt-ecommerce-product-filter="delete_row">Delete</a>
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
                    }
                />
            </Route>
            <Route index element={<Navigate to='/sales/orders' />} />
        </Routes>
    )
}

export default Products
