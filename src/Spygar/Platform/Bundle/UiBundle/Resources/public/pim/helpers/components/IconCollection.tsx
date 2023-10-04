import React from 'react';

// ================== menu icons =====================
import DashboardIcon from '../icons/menu/DashboardIcon';
import CmsIcon from '../icons/menu/CmsIcon';
import HelpIcon from '../icons/menu/HelpIcon';
import ProductIcon from '../icons/menu/ProductIcon';
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
    'cms': <CmsIcon />,
    'sales': <SalesIcon />,
    'product': <ProductIcon />,
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
}

export default iconCollection;