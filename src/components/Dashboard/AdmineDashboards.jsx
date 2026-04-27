import React from 'react'
import AdmineSidebar from './AdmineSidebar';
import AdmineHeader from './AdmineHeader';
import Adminedashboardcontent from './Adminedashboardcontent';

import { Outlet } from 'react-router-dom';

function AdmineDashboards() {
  return (
    <>
      <div className='flex items-start space-y-0 h-screen w-full bg-white'>
        {/* <AdmineSidebar /> */}
        <div className='h-full w-full'>
          <AdmineHeader />
           <Outlet />
          <Adminedashboardcontent />
        </div>
      </div>
    </>
  )
}

export default AdmineDashboards;