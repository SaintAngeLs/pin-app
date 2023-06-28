import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';

const isNotActiveStyle = 'flex items-center px-5 py-1 gap-3 text-gray-500 hover:text-black transition-all duration-300 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-3 border-black  transition-all duration-300 ease-in-out capitalize';

const SidebarLink = ({ to, label, logo, onClick }) => {
  return (
    <div className="flex flex-col gap-5">
      <Link
        to={to}
        className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
        onClick={onClick}
      >
        <img src={logo} alt="logo" className="w-full" />
      </Link>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
        onClick={onClick}
      >
        <RiHomeFill />
        {label}
      </NavLink>
    </div>
  );
};

export default SidebarLink;
