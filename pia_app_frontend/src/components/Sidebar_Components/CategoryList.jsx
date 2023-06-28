import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const isNotActiveStyle = 'flex items-center px-5 py-1 gap-3 text-gray-500 hover:text-black transition-all duration-300 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-3 border-black  transition-all duration-300 ease-in-out capitalize';

const CategoryList = ({ categories, onClick }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  return (
    <div>
      <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover cateogries</h3>
      <div className={`categories-container ${showAllCategories ? 'show-all-categories' : 'show-less-categories'}`}>
        {categories.slice(0, showAllCategories ? categories.length : 5).map((category) => (
          <NavLink
            to={`/category/${category.name}`}
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={onClick}
            key={category.name}
          >
            <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" alt={category.name} />
            {category.name}
          </NavLink>
        ))}
      </div>
      {categories.length >= 5 && (
        <button
          className={`flex items-center px-5 gap-3 text-gray-500 hover:text-black capitalize ${
            showAllCategories ? 'show-less-button' : 'show-more-button'
          }`}
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          {showAllCategories ? 'Show Less Categories' : 'Show More Categories'}
        </button>
      )}
    </div>
  );
};

export default CategoryList;
