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

const Orders = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path='orders'
                    element={
                        <>
                            <PageTitle breadcrumbs={usersBreadcrumbs}>Orders</PageTitle>
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <div className="container-xxl" id="kt_content_container">
                                    <div className="row gx-6 gx-xl-9">
                                        <div className="col-lg-6 col-xxl-4">
                                            <div className="card h-100">
                                                <div className="card-body p-9">
                                                    <div className="fs-2hx fw-bold">237</div>
                                                    <div className="fs-4 fw-semibold text-gray-400 mb-7">Current Projects</div>
                                                    <div className="d-flex flex-wrap">
                                                        <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
                                                            <canvas id="kt_project_list_chart"></canvas>
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                                                            <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                                                                <div className="bullet bg-primary me-3"></div>
                                                                <div className="text-gray-400">Active</div>
                                                                <div className="ms-auto fw-bold text-gray-700">30</div>
                                                            </div>
                                                            <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                                                                <div className="bullet bg-success me-3"></div>
                                                                <div className="text-gray-400">Completed</div>
                                                                <div className="ms-auto fw-bold text-gray-700">45</div>
                                                            </div>
                                                            <div className="d-flex fs-6 fw-semibold align-items-center">
                                                                <div className="bullet bg-gray-300 me-3"></div>
                                                                <div className="text-gray-400">Yet to start</div>
                                                                <div className="ms-auto fw-bold text-gray-700">25</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xxl-4">
                                            <div className="card h-100">
                                                <div className="card-body p-9">
                                                    <div className="fs-2hx fw-bold">$3,290.00</div>
                                                    <div className="fs-4 fw-semibold text-gray-400 mb-7">Project Finance</div>
                                                    <div className="fs-6 d-flex justify-content-between mb-4">
                                                        <div className="fw-semibold">Avg. Project Budget</div>
                                                        <div className="d-flex fw-bold">
                                                            <i className="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>$6,570</div>
                                                    </div>
                                                    <div className="separator separator-dashed"></div>
                                                    <div className="fs-6 d-flex justify-content-between my-4">
                                                        <div className="fw-semibold">Lowest Project Check</div>
                                                        <div className="d-flex fw-bold">
                                                            <i className="ki-duotone ki-arrow-down-left fs-3 me-1 text-danger">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>$408</div>
                                                    </div>
                                                    <div className="separator separator-dashed"></div>
                                                    <div className="fs-6 d-flex justify-content-between mt-4">
                                                        <div className="fw-semibold">Ambassador Page</div>
                                                        <div className="d-flex fw-bold">
                                                            <i className="ki-duotone ki-arrow-up-right fs-3 me-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>$920</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xxl-4">
                                            <div className="card h-100">
                                                <div className="card-body p-9">
                                                    <div className="fs-2hx fw-bold">49</div>
                                                    <div className="fs-4 fw-semibold text-gray-400 mb-7">Our Clients</div>
                                                    <div className="symbol-group symbol-hover mb-9">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                            <img alt="Pic" src="assets/media/avatars/300-11.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                                                            <img alt="Pic" src="assets/media/avatars/300-7.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                                                            <img alt="Pic" src="assets/media/avatars/300-20.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                            <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                                            <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                                            <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                                                        </div>
                                                        <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                                            <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary btn-sm me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">All Clients</a>
                                                        <a href="#" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Invite New</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap flex-stack my-5">
                                        <h2 className="fs-2 fw-semibold my-2">Projects
                                            <span className="fs-6 text-gray-400 ms-1">by Status</span></h2>
                                        <div className="d-flex flex-wrap my-1">
                                            <div className="m-0">
                                                <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-sm bg-body border-body fw-bold w-125px">
                                                    <option value="Active">Active</option>
                                                    <option value="Approved">In Progress</option>
                                                    <option value="Declined">To Do</option>
                                                    <option value="In Progress">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-6 g-xl-9">
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/plurk.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">Fitnes App</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">Aug 19, 2023</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 50% completed">
                                                        <div className="bg-primary rounded h-4px" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                                                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rudy Stone">
                                                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/disqus.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">Leaf CRM</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">May 10, 2021</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$36,400.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 30% completed">
                                                        <div className="bg-info rounded h-4px" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Brian Cox">
                                                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/figma-1.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-success fw-bold me-auto px-4 py-3">Completed</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">Atica Banking</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">Mar 14, 2021</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$605,100.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 100% completed">
                                                        <div className="bg-success rounded h-4px" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Mad Macy">
                                                            <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Cris Willson">
                                                            <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Mike Garcie">
                                                            <span className="symbol-label bg-info text-inverse-info fw-bold">M</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/sentry-3.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">Finance Dispatch</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">Mar 10, 2023</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 60% completed">
                                                        <div className="bg-info rounded h-4px" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Nich Warden">
                                                            <span className="symbol-label bg-warning text-inverse-warning fw-bold">N</span>
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rob Otto">
                                                            <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/tvit.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">GoPro App</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">Oct 25, 2023</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 70% completed">
                                                        <div className="bg-primary rounded h-4px" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                            <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Robin Watterman">
                                                            <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <a href="../../demo7/dist/apps/projects/project.html" className="card border-hover-primary">
                                                <div className="card-header border-0 pt-9">
                                                    <div className="card-title m-0">
                                                        <div className="symbol symbol-50px w-50px bg-light">
                                                            <img src="assets/media/svg/brand-logos/aven.svg" alt="image" className="p-3" />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
                                                    </div>
                                                </div>
                                                <div className="card-body p-9">
                                                    <div className="fs-3 fw-bold text-dark">Buldozer CRM</div>
                                                    <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
                                                    <div className="d-flex flex-wrap mb-5">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">Aug 19, 2023</div>
                                                            <div className="fw-semibold text-gray-400">Due Date</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                            <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
                                                            <div className="fw-semibold text-gray-400">Budget</div>
                                                        </div>
                                                    </div>
                                                    <div className="symbol-group symbol-hover">
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                            <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="John Mixin">
                                                            <img alt="Pic" src="assets/media/avatars/300-14.jpg" />
                                                        </div>
                                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
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

export default Orders
