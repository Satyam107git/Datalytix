import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBox, FiUsers, FiLayout, FiBriefcase, FiX  } from 'react-icons/fi';
import { BiSolidUserAccount } from "react-icons/bi";
import { IoMdBook } from "react-icons/io";
import { MdOutlineCorporateFare, MdPostAdd  } from "react-icons/md";
import DatalytixLogoLight  from '../../assets/images/logo.png';
import DatalytixLogoDark  from '../../assets/images/logo-dark.png';
import { useTheme } from '../../hooks/useTheme';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const { theme } = useTheme();
  const navLinkClasses = "flex items-center px-4 py-2.5 rounded-lg text-muted hover:bg-[var(--bg-main)] hover:text-foreground transition-colors";
  const activeLinkClasses = "bg-accent text-white";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`bg-card border-r border-border p-5 flex-shrink-0 w-64 z-40 fixed lg:relative lg:translate-x-0 h-full transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">  
          <img 
            src={theme === 'light' ? DatalytixLogoLight : DatalytixLogoDark} 
            alt="Datalytix Logo" 
            className="w-64" 
          />
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted">
            <FiX size={24} />
          </button>
        </div>
        <nav className="space-y-6">
          <NavSection title="Favorites">
            <NavLink to="/overview" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><FiHome /> <span className="ml-3">Overview</span></NavLink>
            <NavLink to="/projects" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><FiBriefcase /> <span className="ml-3">Projects</span></NavLink>
          </NavSection>
          <NavSection title="Dashboards">
            <NavLink to="/dashboards/default" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><FiLayout /> <span className="ml-3">Default</span></NavLink>
            <NavLink to="/orders" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><FiBox /> <span className="ml-3">Order List</span></NavLink>
            <NavLink to="/online-courses" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><IoMdBook /> <span className="ml-3">Online Courses</span></NavLink>
          </NavSection>
           <NavSection title="Pages">
            <NavLink to="/user-profile" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><FiUsers /> <span className="ml-3">User Profile</span></NavLink>
            <NavLink to="/account" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><BiSolidUserAccount /> <span className="ml-3">Account</span></NavLink>
            <NavLink to="/corporate" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><MdOutlineCorporateFare  /> <span className="ml-3">Corporate</span></NavLink>
            <NavLink to="/blog" className={({isActive}) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}><MdPostAdd /> <span className="ml-3">Blog</span></NavLink>
          </NavSection>
        </nav>
      </aside>
    </>
  );
};

const NavSection = ({ title, children }) => (
  <div>
    <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">{title}</h3>
    <div className="space-y-1">{children}</div>
  </div>
);

export default Sidebar;