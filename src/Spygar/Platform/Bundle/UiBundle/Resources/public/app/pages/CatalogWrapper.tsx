import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { Products } from '../modules/apps/catalog/Products';
import { Categories } from '../modules/apps/catalog/Categories';

const CatalogWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='products' element={ <Products/> } />
                <Route path='categories' element={ <Categories/> } />
            </Route>
            <Route index element={<Navigate to='/catalog/products' />} />
        </Routes>
    )
}

export default CatalogWrapper;
