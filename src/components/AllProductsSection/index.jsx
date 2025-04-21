import { useState } from "react";
import Spacing from "../Spacing";
import Sidebar1 from "../Header/Sidebar/Sidebar1";
import Pagination from "./Pagination";
import Button4 from "../Buttons/Button4";
import ProductCard from "../ProductCard";

const AllProducts = ({ data, variant }) => {
  const [activeButton, setActiveButton] = useState("list");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (viewType) => {
    setActiveButton(viewType);
  };

  return (
    <>
      <Sidebar1 data={data.sidebarData} variant={"style-1"} />
      <div className="container">
        <div className="cs_filter_heading cs_style_1">
          <div className="cs_filter_heading_left">
            <h3>{data.filterData.heading}</h3>
            <select className="cs_custom_select">
              {data.filterData.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="cs_filter_heading_right cs_light">
            <div className="cs_view_box">
              <span>{data.productCountText}</span>
              <div className="cs_view_box_in">
                <Button4
                  activeButton={activeButton}
                  onClickGrid={() => handleClick("grid")}
                  onClickedList={() => handleClick("list")}
                />
              </div>
            </div>
          </div>
        </div>
        <Spacing lg={50} md={50} />
        <div
          className={`cs_grid_5_column cs_products_view cs_style_1 ${
            activeButton === "grid" ? "active" : ""
          }`}
        >
          {data.productData.map((product, index) => (
            <div className="cs_grid_col" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <Spacing lg={40} md={70} />
        {variant === "style-2" && (
          <div className="text-center">
            <button
              type="button"
              className="cs_btn cs_style_1 cs_fs_18 cs_medium"
            >
              Load More
            </button>
          </div>
        )}
        {variant === "style-1" && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}

        {variant === "style-3" && (
          <div className="text-center">
            <button className="cs_btn cs_style_1 cs_fs_18 cs_medium">
              Load More
            </button>
          </div>
        )}
      </div>
      <Spacing lg={80} md={150} />
    </>
  );
};

export default AllProducts;
