import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';

// This is the main Layout component that wraps every page of the application
const Layout = () => {
  // State to manage the visibility of the left sidebar on mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // State to manage the visibility of the right sidebar on mobile
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
   // Get the current location object, which contains information like the pathname
  const location = useLocation();
 // This is used to conditionally show or hide the RightSidebar depending on whether it is on main dashboard pg or not
  const showRightSidebarOnPage = location.pathname === '/dashboards/default';

  return (
    <div className="flex min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1">
        <Header 
            setSidebarOpen={setSidebarOpen} 
            setRightSidebarOpen={setRightSidebarOpen} 
        />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      
      {showRightSidebarOnPage && (
          <RightSidebar 
              isRightSidebarOpen={isRightSidebarOpen} 
              setRightSidebarOpen={setRightSidebarOpen} 
          />
      )}
    </div>
  );
};

export default Layout;