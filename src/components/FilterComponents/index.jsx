import Review from "../Review";

const FilterComponents = ({
  activeFilter,
  setActiveFilter,
  sortBy,
  categories,
  brands,
  reviews,
  skinTypes,
  priceRange,
}) => {
  return (
    <div className="cs_filter_heading_left">
      <h3>{sortBy}</h3>
      {/* Categories Dropdown */}
      <div className="cs_dropdown cs_filter_dropdown">
        <button
          type="button"
          className={`cs_filter_dropdown_btn cs_dropdown_btn ${
            activeFilter === "categories" ? "active" : ""
          }`}
          onClick={() =>
            setActiveFilter(activeFilter === "categories" ? null : "categories")
          }
        >
          Category
          <svg width={9} height={6} viewBox="0 0 9 6" fill="none">
            <path
              d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
              fill="#636363"
            />
          </svg>
        </button>
        {activeFilter === "categories" && (
          <ul className="cs_dropdown_content cs_filter_dropdown_body cs_mp_0 active">
            {categories.map((category, index) => (
              <li key={index}>
                <div className="cs_custom_checkbox">
                  <input type="checkbox" />
                  <span>{category}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brands Dropdown */}
      <div className="cs_dropdown cs_filter_dropdown">
        <button
          type="button"
          className={`cs_filter_dropdown_btn cs_dropdown_btn ${
            activeFilter === "brands" ? "active" : ""
          }`}
          onClick={() =>
            setActiveFilter(activeFilter === "brands" ? null : "brands")
          }
        >
          Brands
          <svg width={9} height={6} viewBox="0 0 9 6" fill="none">
            <path
              d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
              fill="#636363"
            />
          </svg>
        </button>
        {activeFilter === "brands" && (
          <ul className="cs_dropdown_content cs_filter_dropdown_body cs_mp_0 active">
            {brands.map((brand, index) => (
              <li key={index}>
                <div className="cs_custom_checkbox">
                  <input type="checkbox" />
                  <span>{brand}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="cs_dropdown cs_filter_dropdown">
        <button
          type="button"
          className={`cs_filter_dropdown_btn cs_dropdown_btn ${
            activeFilter === "priceRange" ? "active" : ""
          }`}
          onClick={() =>
            setActiveFilter(activeFilter === "priceRange" ? null : "priceRange")
          }
        >
          Price Range
          <svg width={9} height={6} viewBox="0 0 9 6" fill="none">
            <path
              d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
              fill="#636363"
            />
          </svg>
        </button>
        {activeFilter === "priceRange" && (
          <div className="cs_dropdown_content cs_filter_dropdown_body cs_price_range cs_light active">
            <div className="cs_price_range_in">
              <div className="cs_price_range_left">
                <span>Min Price</span>
                <input type="text" placeholder={priceRange.minPrice} />
              </div>
              <div className="cs_price_range_right">
                <span>Max Price</span>
                <input type="text" placeholder={priceRange.maxPrice} />
              </div>
            </div>
            <button className="cs_btn cs_style_1 cs_medium cs_size_md w-100">
              <span>APPLY</span>
            </button>
          </div>
        )}
      </div>

      {/* Review Dropdown */}
      <div className="cs_dropdown cs_filter_dropdown">
        <button
          type="button"
          className={`cs_filter_dropdown_btn cs_dropdown_btn ${
            activeFilter === "reviews" ? "active" : ""
          }`}
          onClick={() =>
            setActiveFilter(activeFilter === "reviews" ? null : "reviews")
          }
        >
          Review
          <svg width={9} height={6} viewBox="0 0 9 6" fill="none">
            <path
              d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
              fill="#636363"
            />
          </svg>
        </button>
        {activeFilter === "reviews" && (
          <ul className="cs_dropdown_content cs_filter_dropdown_body cs_mp_0 active">
            {reviews.map((rating, index) => (
              <li key={index}>
                <div className="cs_custom_checkbox">
                  <input type="checkbox" />
                  <span>
                    <span className="cs_rating" data-rating={rating} style={{}}>
                      {<Review reviewNumber={rating} />}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Skin Type Dropdown */}
      <div className="cs_dropdown cs_filter_dropdown">
        <button
          type="button"
          className={`cs_filter_dropdown_btn cs_dropdown_btn ${
            activeFilter === "skinTypes" ? "active" : ""
          }`}
          onClick={() =>
            setActiveFilter(activeFilter === "skinTypes" ? null : "skinTypes")
          }
        >
          Skin Type
          <svg width={9} height={6} viewBox="0 0 9 6" fill="none">
            <path
              d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
              fill="#636363"
            />
          </svg>
        </button>
        {activeFilter === "skinTypes" && (
          <ul className="cs_dropdown_content cs_filter_dropdown_body cs_mp_0 active">
            {skinTypes.map((skinType, index) => (
              <li key={index}>
                <div className="cs_custom_checkbox">
                  <input type="checkbox" />
                  <span>{skinType}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterComponents;
