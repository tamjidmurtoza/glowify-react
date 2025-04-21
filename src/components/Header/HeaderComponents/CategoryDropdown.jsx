import React from "react";
import { Link } from "react-router-dom";

const CategoryDropdown = ({
  showCategory,
  handleCategoryClick,
  categoriesTitle,
  category,
  setIsShowMobileMenu,
  isShowMobileMenu,
}) => {
  return (
    <div
      className={`cs_nav_category_wrap cs_dropdown ${
        showCategory ? "cs_mobile_active" : ""
      }`}
    >
      <span
        className={`cs_nav_category_btn cs_dropdown_btn ${
          showCategory ? "active" : ""
        }`}
        onClick={handleCategoryClick}
      >
        {categoriesTitle}
      </span>
      <ul
        className={`cs_nav_category_list cs_dropdown_content ${
          showCategory ? "active" : ""
        }`}
      >
        {category.map((item, index) => (
          <li key={index}>
            <Link
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              to={item.href}
            >
              <img src={item.imgSrc} alt="Product" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
