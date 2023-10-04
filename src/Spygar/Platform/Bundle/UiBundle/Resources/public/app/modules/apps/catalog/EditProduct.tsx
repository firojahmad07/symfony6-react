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

const EditProduct = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path='orders'
                    element={
                        <>
                            <PageTitle breadcrumbs={usersBreadcrumbs}>EditProduct</PageTitle>
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <div className="container-xxl" id="kt_content_container">
                                    <form id="kt_ecommerce_add_product_form" className="form d-flex flex-column flex-lg-row" data-kt-redirect="../../demo7/dist/apps/ecommerce/catalog/products.html">
                                        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                                            <div className="card card-flush py-4">
                                                <div className="card-header">
                                                    <div className="card-title">
                                                        <h2>Thumbnail</h2>
                                                    </div>
                                                </div>
                                                <div className="card-body text-center pt-0">
                                                    <div className="image-input image-input-empty image-input-outline image-input-placeholder mb-3" data-kt-image-input="true">
                                                        <div className="image-input-wrapper w-150px h-150px"></div>
                                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                            <i className="ki-duotone ki-pencil fs-7">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                            <input type="hidden" name="avatar_remove" />
                                                        </label>
                                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
													<i className="ki-duotone ki-cross fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
                                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
													<i className="ki-duotone ki-cross fs-2">
														<span className="path1"></span>
														<span className="path2"></span>
													</i>
												</span>
                                                    </div>
                                                    <div className="text-muted fs-7">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                                                </div>
                                            </div>
                                            <div className="card card-flush py-4">
                                                <div className="card-header">
                                                    <div className="card-title">
                                                        <h2>Status</h2>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <div className="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_product_status"></div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <select className="form-select mb-2" data-control="select2" data-hide-search="true" data-placeholder="Select an option" id="kt_ecommerce_add_product_status_select">
                                                        <option></option>
                                                        <option value="published">Published</option>
                                                        <option value="draft">Draft</option>
                                                        <option value="scheduled">Scheduled</option>
                                                        <option value="inactive">Inactive</option>
                                                    </select>
                                                    <div className="text-muted fs-7">Set the product status.</div>
                                                    <div className="d-none mt-10">
                                                        <label htmlFor="kt_ecommerce_add_product_status_datepicker" className="form-label">Select publishing date and time</label>
                                                        <input className="form-control" id="kt_ecommerce_add_product_status_datepicker" placeholder="Pick date & time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-flush py-4">
                                                <div className="card-header">
                                                    <div className="card-title">
                                                        <h2>Product Details</h2>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <label className="form-label">Categories</label>
                                                    <select className="form-select mb-2" data-control="select2" data-placeholder="Select an option" data-allow-clear="true">
                                                        <option></option>
                                                        <option value="Computers">Computers</option>
                                                        <option value="Watches">Watches</option>
                                                        <option value="Headphones">Headphones</option>
                                                        <option value="Footwear">Footwear</option>
                                                        <option value="Cameras">Cameras</option>
                                                        <option value="Shirts">Shirts</option>
                                                        <option value="Household">Household</option>
                                                        <option value="Handbags">Handbags</option>
                                                        <option value="Wines">Wines</option>
                                                        <option value="Sandals">Sandals</option>
                                                    </select>
                                                    <div className="text-muted fs-7 mb-7">Add product to a category.</div>
                                                    <a href="../../demo7/dist/apps/ecommerce/catalog/add-category.html" className="btn btn-light-primary btn-sm mb-10">
                                                        <i className="ki-duotone ki-plus fs-2"></i>Create new category</a>
                                                    <label className="form-label d-block">Tags</label>
                                                    <input id="kt_ecommerce_add_product_tags" name="kt_ecommerce_add_product_tags" className="form-control mb-2" value="new, trending, sale" />
                                                    <div className="text-muted fs-7">Add tags to a product.</div>
                                                </div>
                                            </div>
                                            <div className="card card-flush">
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
                                                    <div id="kt_card_widget_6_chart" className="w-100"></div>
                                                </div>
                                            </div>
                                            <div className="card card-flush py-4">
                                                <div className="card-header">
                                                    <div className="card-title">
                                                        <h2>Product Template</h2>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <label htmlFor="kt_ecommerce_add_product_store_template" className="form-label">Select a product template</label>
                                                    <select className="form-select mb-2" data-control="select2" data-hide-search="true" data-placeholder="Select an option" id="kt_ecommerce_add_product_store_template">
                                                        <option></option>
                                                        <option value="default">Default template</option>
                                                        <option value="electronics">Electronics</option>
                                                        <option value="office">Office stationary</option>
                                                        <option value="fashion">Fashion</option>
                                                    </select>
                                                    <div className="text-muted fs-7">Assign a template from your current theme to define how a single product is displayed.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
                                                <li className="nav-item">
                                                    <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_product_general">General</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_ecommerce_add_product_advanced">Advanced</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_ecommerce_add_product_reviews">Reviews</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="kt_ecommerce_add_product_general" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>General</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="mb-10 fv-row">
                                                                    <label className="required form-label">Product Name</label>
                                                                    <input type="text" name="product_name" className="form-control mb-2" placeholder="Product name" value="Sample product" />
                                                                    <div className="text-muted fs-7">A product name is required and recommended to be unique.</div>
                                                                </div>
                                                                <div>
                                                                    <label className="form-label">Description</label>
                                                                    <div id="kt_ecommerce_add_product_description" className="min-h-200px mb-2"></div>
                                                                    <div className="text-muted fs-7">Set a description to the product for better visibility.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Media</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="fv-row mb-2">
                                                                    <div className="dropzone" id="kt_ecommerce_add_product_media">
                                                                        <div className="dz-message needsclick">
                                                                            <i className="ki-duotone ki-file-up text-primary fs-3x">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                            <div className="ms-4">
                                                                                <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                                <span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted fs-7">Set the product media gallery.</div>
                                                            </div>
                                                        </div>
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Pricing</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="mb-10 fv-row">
                                                                    <label className="required form-label">Base Price</label>
                                                                    <input type="text" name="price" className="form-control mb-2" placeholder="Product price" value="199.99" />
                                                                    <div className="text-muted fs-7">Set the product price.</div>
                                                                </div>
                                                                <div className="fv-row mb-10">
                                                                    <label className="fs-6 fw-semibold mb-2">Discount Type
                                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Select a discount type that will be applied to this product">
																<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
																	<span className="path1"></span>
																	<span className="path2"></span>
																	<span className="path3"></span>
																</i>
															</span></label>
                                                                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                                        <div className="col">
                                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																			<input className="form-check-input" type="radio" name="discount_option" value="1" />
																		</span>
                                                                                <span className="ms-5">
																			<span className="fs-4 fw-bold text-gray-800 d-block">No Discount</span>
																		</span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="col">
                                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																			<input className="form-check-input" type="radio" name="discount_option" value="2" />
																		</span>
                                                                                <span className="ms-5">
																			<span className="fs-4 fw-bold text-gray-800 d-block">Percentage %</span>
																		</span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="col">
                                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																			<input className="form-check-input" type="radio" name="discount_option" value="3" />
																		</span>
                                                                                <span className="ms-5">
																			<span className="fs-4 fw-bold text-gray-800 d-block">Fixed Price</span>
																		</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-10 fv-row" id="kt_ecommerce_add_product_discount_percentage">
                                                                    <label className="form-label">Set Discount Percentage</label>
                                                                    <div className="d-flex flex-column text-center mb-5">
                                                                        <div className="d-flex align-items-start justify-content-center mb-7">
                                                                            <span className="fw-bold fs-3x" id="kt_ecommerce_add_product_discount_label">0</span>
                                                                            <span className="fw-bold fs-4 mt-1 ms-2">%</span>
                                                                        </div>
                                                                        <div id="kt_ecommerce_add_product_discount_slider" className="noUi-sm"></div>
                                                                    </div>
                                                                    <div className="text-muted fs-7">Set a percentage discount to be applied on this product.</div>
                                                                </div>
                                                                <div className="d-none mb-10 fv-row" id="kt_ecommerce_add_product_discount_fixed">
                                                                    <label className="form-label">Fixed Discounted Price</label>
                                                                    <input type="text" name="dicsounted_price" className="form-control mb-2" placeholder="Discounted price" />
                                                                    <div className="text-muted fs-7">Set the discounted product price. The product will be reduced at the determined fixed price</div>
                                                                </div>
                                                                <div className="d-flex flex-wrap gap-5">
                                                                    <div className="fv-row w-100 flex-md-root">
                                                                        <label className="required form-label">Tax Class</label>
                                                                        <select className="form-select mb-2" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Select an option">
                                                                            <option></option>
                                                                            <option value="0">Tax Free</option>
                                                                            <option value="1">Taxable Goods</option>
                                                                            <option value="2">Downloadable Product</option>
                                                                        </select>
                                                                        <div className="text-muted fs-7">Set the product tax class.</div>
                                                                    </div>
                                                                    <div className="fv-row w-100 flex-md-root">
                                                                        <label className="form-label">VAT Amount (%)</label>
                                                                        <input type="text" className="form-control mb-2" value="35" />
                                                                        <div className="text-muted fs-7">Set the product VAT about.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="kt_ecommerce_add_product_advanced" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Inventory</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="mb-10 fv-row">
                                                                    <label className="required form-label">SKU</label>
                                                                    <input type="text" name="sku" className="form-control mb-2" placeholder="SKU Number" value="011985001" />
                                                                    <div className="text-muted fs-7">Enter the product SKU.</div>
                                                                </div>
                                                                <div className="mb-10 fv-row">
                                                                    <label className="required form-label">Barcode</label>
                                                                    <input type="text" name="sku" className="form-control mb-2" placeholder="Barcode Number" value="45874521458" />
                                                                    <div className="text-muted fs-7">Enter the product barcode number.</div>
                                                                </div>
                                                                <div className="mb-10 fv-row">
                                                                    <label className="required form-label">Quantity</label>
                                                                    <div className="d-flex gap-3">
                                                                        <input type="number" name="shelf" className="form-control mb-2" placeholder="On shelf" value="24" />
                                                                        <input type="number" name="warehouse" className="form-control mb-2" placeholder="In warehouse" />
                                                                    </div>
                                                                    <div className="text-muted fs-7">Enter the product quantity.</div>
                                                                </div>
                                                                <div className="fv-row">
                                                                    <label className="form-label">Allow Backorders</label>
                                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                                        <input className="form-check-input" type="checkbox" value="" />
                                                                        <label className="form-check-label">Yes</label>
                                                                    </div>
                                                                    <div className="text-muted fs-7">Allow customers to purchase products that are out of stock.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Variations</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="" data-kt-ecommerce-catalog-add-product="auto-options">
                                                                    <label className="form-label">Add Product Variations</label>
                                                                    <div id="kt_ecommerce_add_product_options">
                                                                        <div className="form-group">
                                                                            <div data-repeater-list="kt_ecommerce_add_product_options" className="d-flex flex-column gap-3">
                                                                                <div data-repeater-item="" className="form-group d-flex flex-wrap align-items-center gap-5">
                                                                                    <div className="w-100 w-md-200px">
                                                                                        <select className="form-select" name="product_option" data-placeholder="Select a variation" data-kt-ecommerce-catalog-add-product="product_option">
                                                                                            <option></option>
                                                                                            <option value="color">Color</option>
                                                                                            <option value="size">Size</option>
                                                                                            <option value="material">Material</option>
                                                                                            <option value="style">Style</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <input type="text" className="form-control mw-100 w-200px" name="product_option_value" placeholder="Variation" />
                                                                                    <button type="button" data-repeater-delete="" className="btn btn-sm btn-icon btn-light-danger">
                                                                                        <i className="ki-duotone ki-cross fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                        </i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group mt-5">
                                                                            <button type="button" data-repeater-create="" className="btn btn-sm btn-light-primary">
                                                                                <i className="ki-duotone ki-plus fs-2"></i>Add another variation</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Shipping</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="fv-row">
                                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                                        <input className="form-check-input" type="checkbox" id="kt_ecommerce_add_product_shipping_checkbox" value="1" />
                                                                        <label className="form-check-label">This is a physical product</label>
                                                                    </div>
                                                                    <div className="text-muted fs-7">Set if the product is a physical or digital item. Physical products may require shipping.</div>
                                                                </div>
                                                                <div id="kt_ecommerce_add_product_shipping" className="mt-10">
                                                                    <div className="mb-10 fv-row">
                                                                        <label className="form-label">Weight</label>
                                                                        <input type="text" name="weight" className="form-control mb-2" placeholder="Product weight" value="4.3" />
                                                                        <div className="text-muted fs-7">Set a product weight in kilograms (kg).</div>
                                                                    </div>
                                                                    <div className="fv-row">
                                                                        <label className="form-label">Dimension</label>
                                                                        <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                                                                            <input type="number" name="width" className="form-control mb-2" placeholder="Width (w)" value="12" />
                                                                            <input type="number" name="height" className="form-control mb-2" placeholder="Height (h)" value="4" />
                                                                            <input type="number" name="length" className="form-control mb-2" placeholder="Lengtn (l)" value="8.5" />
                                                                        </div>
                                                                        <div className="text-muted fs-7">Enter the product dimensions in centimeters (cm).</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Meta Options</h2>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <div className="mb-10">
                                                                    <label className="form-label">Meta Tag Title</label>
                                                                    <input type="text" className="form-control mb-2" name="meta_title" placeholder="Meta tag name" />
                                                                    <div className="text-muted fs-7">Set a meta tag title. Recommended to be simple and precise keywords.</div>
                                                                </div>
                                                                <div className="mb-10">
                                                                    <label className="form-label">Meta Tag Description</label>
                                                                    <div id="kt_ecommerce_add_product_meta_description" className="min-h-100px mb-2"></div>
                                                                    <div className="text-muted fs-7">Set a meta tag description to the product for increased SEO ranking.</div>
                                                                </div>
                                                                <div>
                                                                    <label className="form-label">Meta Tag Keywords</label>
                                                                    <input id="kt_ecommerce_add_product_meta_keywords" name="kt_ecommerce_add_product_meta_keywords" className="form-control mb-2" />
                                                                    <div className="text-muted fs-7">Set a list of keywords that the product is related to. Separate the keywords by adding a comma
                                                                        <code>,</code>between each keyword.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="kt_ecommerce_add_product_reviews" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        <div className="card card-flush py-4">
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Customer Reviews</h2>
                                                                </div>
                                                                <div className="card-toolbar">
                                                                    <span className="fw-bold me-5">Overall Rating:</span>
                                                                    <div className="rating">
                                                                        <div className="rating-label checked">
                                                                            <i className="ki-duotone ki-star fs-2"></i>
                                                                        </div>
                                                                        <div className="rating-label checked">
                                                                            <i className="ki-duotone ki-star fs-2"></i>
                                                                        </div>
                                                                        <div className="rating-label checked">
                                                                            <i className="ki-duotone ki-star fs-2"></i>
                                                                        </div>
                                                                        <div className="rating-label checked">
                                                                            <i className="ki-duotone ki-star fs-2"></i>
                                                                        </div>
                                                                        <div className="rating-label">
                                                                            <i className="ki-duotone ki-star fs-2"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body pt-0">
                                                                <table className="table table-row-dashed fs-6 gy-5 my-0" id="kt_ecommerce_add_product_reviews">
                                                                    <thead>
                                                                    <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                                        <th className="w-10px pe-2">
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                                                <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_ecommerce_add_product_reviews .form-check-input" value="1" />
                                                                            </div>
                                                                        </th>
                                                                        <th className="min-w-125px">Rating</th>
                                                                        <th className="min-w-175px">Customer</th>
                                                                        <th className="min-w-175px">Comment</th>
                                                                        <th className="min-w-100px text-end fs-7">Date</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-danger">
                                                                                        <span className="text-danger">M</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Melody Macy</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">I like this design</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">Today</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Max Smith</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Good product for outdoors or indoors</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">day ago</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-4">
                                                                            <div className="rating">
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
                                                                                <div className="rating-label">
                                                                                    <i className="ki-duotone ki-star fs-6"></i>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Sean Bean</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Awesome quality with great materials used, but could be more comfortable</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">11:20 PM</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Brian Cox</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">This is the best product I've ever used.</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">2 days ago</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-3">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-warning">
                                                                                        <span className="text-warning">C</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Mikaela Collins</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">I thought it was just average, I prefer other brands</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">July 25</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Francis Mitcham</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Beautifully crafted. Worth every penny.</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">July 24</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-4">
                                                                            <div className="rating">
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
                                                                                <div className="rating-label">
                                                                                    <i className="ki-duotone ki-star fs-6"></i>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-danger">
                                                                                        <span className="text-danger">O</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Olivia Wild</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Awesome value for money. Shipping could be faster tho.</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">July 13</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-primary">
                                                                                        <span className="text-primary">N</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Neil Owen</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Excellent quality, I got it for my son's birthday and he loved it!</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">May 25</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Dan Wilson</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">I got this for Christmas last year, and it's still the best product I've ever used!</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">April 15</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-danger">
                                                                                        <span className="text-danger">E</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Emma Bold</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Was skeptical at first, but after using it for 3 months, I'm hooked! Will definately buy another!</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">April 3</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-4">
                                                                            <div className="rating">
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
                                                                                <div className="rating-label">
                                                                                    <i className="ki-duotone ki-star fs-6"></i>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">Ana Crown</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Great product, too bad I missed out on the sale.</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">March 17</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <div className="symbol-label bg-light-info">
                                                                                        <span className="text-info">A</span>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="fw-bold">Robert Doe</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Got this on sale! Best decision ever!</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">March 12</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-sm form-check-custom form-check-solid mt-1">
                                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                                            </div>
                                                                        </td>
                                                                        <td data-order="rating-5">
                                                                            <div className="rating">
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
                                                                        <td>
                                                                            <a href="../../demo7/dist/apps/inbox/reply.html" className="d-flex text-dark text-gray-800 text-hover-primary">
                                                                                <div className="symbol symbol-circle symbol-25px me-3">
                                                                                    <span className="symbol-label"></span>
                                                                                </div>
                                                                                <span className="fw-bold">John Miller</span>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-gray-600 fw-bold">Firesale is on! Buy now! Totally worth it!</td>
                                                                        <td className="text-end">
                                                                            <span className="fw-semibold text-muted">March 11</span>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <a href="../../demo7/dist/apps/ecommerce/catalog/products.html" id="kt_ecommerce_add_product_cancel" className="btn btn-light me-5">Cancel</a>
                                                <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                                    <span className="indicator-label">Save Changes</span>
                                                    <span className="indicator-progress">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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

export default EditProduct
