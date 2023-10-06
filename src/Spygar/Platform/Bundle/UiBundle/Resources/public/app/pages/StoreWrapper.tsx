import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {UserGuide} from '../modules/apps/store/UserGuide';

const StoreWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='user-guide' element={ <UserGuide/> } />
            </Route>
            <Route index element={<Navigate to='/store/user-guide' />} />
        </Routes>
    )
}

export default StoreWrapper;
