import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Configuration} from '../modules/apps/system/configuration';
import {Locales} from '../modules/apps/system/locales';
import {Currencies} from '../modules/apps/system/currencies';
import {Roles} from '../modules/apps/system/roles';
import {Users} from '../modules/apps/system/users';

const SystemWrapper = () => {
    return (
        <Routes>
            <Route element={<Outlet />}> <Route path='configuration' element={ <Configuration/> } /> </Route>
            <Route element={<Outlet />}> <Route path='locales' element={ <Locales/> } /> </Route>
            <Route element={<Outlet />}> <Route path='currencies' element={ <Currencies/> } /> </Route>
            <Route element={<Outlet />}> <Route path='users' element={ <Users/> } /> </Route>
            <Route element={<Outlet />}> <Route path='roles' element={ <Roles/> } /> </Route>
            <Route index element={<Navigate to='/system/configuration' />} />
        </Routes>
    )
}

export default SystemWrapper;
