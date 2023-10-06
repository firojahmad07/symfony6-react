import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {UserGuide} from '../modules/apps/store/UserGuide';

const SystemWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='users' element={ <UserGuide/> } />
            </Route>
            <Route index element={<Navigate to='/system/users' />} />
        </Routes>
    )
}

export default SystemWrapper;
