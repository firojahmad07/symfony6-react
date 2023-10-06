import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Users} from '../modules/apps/settings/Users';

const SettingsWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path='users' element={ <Users/> } />
            </Route>
            <Route index element={<Navigate to='/settings/users' />} />
        </Routes>
    )
}

export default SettingsWrapper;
