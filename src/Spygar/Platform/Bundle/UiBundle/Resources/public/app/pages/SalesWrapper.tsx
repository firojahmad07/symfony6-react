import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { Orders } from '../modules/apps/sales/Orders';
import { OrderDetails } from '../modules/apps/sales/OrderDetails';
import { Customers } from '../modules/apps/sales/Customers';

const SalesWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='orders' element={ <Orders/> } />
                <Route path='order-details' element={ <OrderDetails/> } />
                <Route path='customers' element={ <Customers/> } />
            </Route>
            <Route index element={<Navigate to='/sales/orders' />} />
        </Routes>
    )
}

export default SalesWrapper;
