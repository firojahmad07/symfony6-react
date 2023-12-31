import React from 'react';

import DefaultAvatarIcon from "../icons/avatars/DefaultAvatarIcon";
// ================== menu icons =====================
import DashboardIcon from '../icons/menu/DashboardIcon';
import StoreIcon from '../icons/menu/StoreIcon';
import HelpIcon from '../icons/menu/HelpIcon';
import CatalogIcon from '../icons/menu/CatalogIcon';
import SalesIcon from '../icons/menu/SalesIcon';
import SettingsIcon from '../icons/menu/SettingsIcon';
import SystemIcon from '../icons/menu/SystemIcon';

//  ================== common icons ==================
import MaximizeIcon from '../icons/common/MaximizeIcon';
import MinimizeIcon from '../icons/common/MinimizeIcon';

//  ================== action icons ===============
import DeleteIcon from '../icons/actions/DeleteIcon';
import EditIcon from '../icons/actions/EditIcon';
import ViewIcon from '../icons/actions/ViewIcon';

const iconCollection = {
    // ======== menu icons =================
    'dashboard': <DashboardIcon />,
    'store': <StoreIcon />,
    'sales': <SalesIcon />,
    'catalog': <CatalogIcon />,
    'settings': <SettingsIcon />,
    'system': <SystemIcon />,
    'help': <HelpIcon />,
    
    // ======== common icons =================
    'maximize': <MaximizeIcon />,
    'minimize': <MinimizeIcon />,
    
    // ======== action icons =================
    'delete': <DeleteIcon />,
    'edit': <EditIcon />,
    'view': <ViewIcon />,
    'default-avatar': <DefaultAvatarIcon />,
}

export default iconCollection;