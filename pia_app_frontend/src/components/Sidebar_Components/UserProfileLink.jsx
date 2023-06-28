import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const UserProfile = ({ user, onClick }) => {
  return (
    <Link
      to={`user-profile/${user._id}`}
      className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
      onClick={onClick}
    >
      <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
      <p>My Account</p>
      <IoIosArrowForward />
    </Link>
  );
};

export default UserProfile;
