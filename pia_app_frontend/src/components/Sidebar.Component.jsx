import React, {useState} from 'react';
import logo from '../assets/logo_new.png';
import { categories } from '../utils/data';
import SidebarLink from './Sidebar_Components/SidebarNavLink';
import UserProfile from './Sidebar_Components/UserProfileLink';
import CategoryList from './Sidebar_Components/CategoryList';

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <SidebarLink 
          to="/" 
          label="Home"
          logo={logo}
          onClick={handleCloseSidebar}
        />
        <CategoryList categories={categories} onClick={handleCloseSidebar} />
      </div>
      {user && <UserProfile user={user} onClick={handleCloseSidebar} />}
    </div>
  );
};

export default Sidebar;
