import { isNotActiveStyle, isActiveStyle } from '../index';
import SidebarCategory from './SidebarCategory';

const SidebarCategories = ({categories, showAllCategories, toggleShowAllCategories, onClick}) => {
    const renderedCategories = showAllCategories ? categories : categories.slice(0, 5);
    return (
        <div className={`categories-container ${showAllCategories ? 'show-all-categories' : 'show-less-categories'}`}>
        {renderedCategories.map((category) => (
          <SidebarCategory
            category={category}
            onClick={onClick}
            isActive={(isActive) => (isActive ? isActiveStyle : isNotActiveStyle)}
            key={category.name}
          />
        ))}
        {categories.length >= 5 && (
          <button
            className={`flex items-center px-5 gap-3 text-gray-500 hover:text-black capitalize ${
              showAllCategories ? 'show-less-button' : 'show-more-button'
            }`}
            onClick={toggleShowAllCategories}
          >
            {showAllCategories ? 'Show Less Categories' : 'Show More Categories'}
          </button>
        )}
      </div>
    );
  };

  export default SidebarCategories;