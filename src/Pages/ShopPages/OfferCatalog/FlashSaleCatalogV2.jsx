import { useState } from "react";
import BreadCamp from "../../../components/BreadCamp";
import Pagination from "../../../components/AllProductsSection/Pagination";
import Spacing from "../../../components/Spacing";
import ProductCard3 from "../../../components/ProductCard/ProductCard3";
import Button4 from "../../../components/Buttons/Button4";
import FilterComponents from "../../../components/FilterComponents";
import { PageTitle } from "../../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

const filterData = {
  sortBy: "Sort by",
  categories: [
    "Skincare",
    "Makeup",
    "Haircare",
    "Fragrance",
    "Makeup Tools",
    "Bath & Body",
    "Oral Care",
  ],
  brands: [
    "Glowify Beauty",
    "Luxe Lashes",
    "PureGlow",
    "Radiant Skincare",
    "HairLux",
  ],
  priceRange: {
    minPrice: "$20",
    maxPrice: "$100",
  },
  reviews: [5, 4, 3, 2, 1], // Star ratings
  skinTypes: [
    "Normal Skin",
    "Dry Skin",
    "Oily Skin",
    "Combination Skin",
    "Sensitive Skin",
  ],
  results: "Showing 1 - 16 of 98 results",
};

const products = [
  {
    imageUrl: "/assets/images/product_50.png",
    discount: "10",
    category: "SKINCARE",
    categoryUrl: "/shop",
    title: "Hydrating Facial Cream",
    price: 44.78,
    mainPrice: 59.99,
    url: "/product/:product-details",
    sold: 22,
    rating: 3.3,
  },
  {
    imageUrl: "/assets/images/product_51.png",
    discount: "14",
    category: "MAKEUP",
    categoryUrl: "/shop",
    title: "Long Lasting Lipstick",
    price: 54.12,
    mainPrice: "40.00",
    url: "/product/:product-details",
    rating: 4.3,
    sold: 65,
  },
  {
    imageUrl: "/assets/images/product_52.png",
    discount: "54",
    category: "HAIRCARE",
    categoryUrl: "/shop",
    title: "Revitalizing Hair Mask",
    price: 87.78,
    mainPrice: "50.00",
    url: "/product/:product-details",
    rating: 1.3,
    sold: 15,
  },
  {
    imageUrl: "/assets/images/product_50.png",
    discount: "22",
    category: "SKINCARE",
    categoryUrl: "/shop",
    title: "Brightening Eye Cream",
    price: 88.12,
    mainPrice: "45.00",
    url: "/product/:product-details",
    rating: 4.3,
    sold: 72,
  },
  {
    imageUrl: "/assets/images/product_51.png",
    discount: "13",
    category: "MAKEUP",
    categoryUrl: "/shop",
    title: "Silky Smooth Foundation",
    price: 32.98,
    mainPrice: "30.00",
    url: "/product/:product-details",
    rating: 3.3,
    sold: 44,
  },
  {
    imageUrl: "/assets/images/product_52.png",
    discount: "65",
    category: "HAIRCARE",
    categoryUrl: "/shop",
    title: "Nourishing Hair Oil",
    price: 83.73,
    mainPrice: "35.00",
    url: "/product/:product-details",
    rating: 4.3,
    sold: 88,
  },
  {
    imageUrl: "/assets/images/product_50.png",
    discount: "34",
    category: "FRAGRANCE",
    categoryUrl: "/shop",
    title: "Luxury Perfume",
    price: 11,
    mainPrice: "90.00",
    url: "/product/:product-details",
    rating: 2.3,
    sold: 65.32,
  },
  {
    imageUrl: "/assets/images/product_51.png",
    discount: "10",
    category: "BODYCARE",
    categoryUrl: "/shop",
    title: "Moisturizing Body Lotion",
    price: 33.66,
    mainPrice: "32.00",
    url: "/product/:product-details",
    rating: 1.3,
    sold: 35,
  },
];

const FlashSaleCatalogV2 = () => {
  PageTitle("Flash-Sale-Catalog-V2");
  const [activeButton, setActiveButton] = useState("list");
  const [currentPage, setCurrentPage] = useState(2);
  const [activeFilter, setActiveFilter] = useState(null);
  const totalPages = 5;

  const handleClick = (viewType) => {
    setActiveButton(viewType);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Start Breadcamp */}

      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_3.jpeg"
        title=" Explore Best Products"
        breadcrumbItems={breadcrumbData}
      />

      {/* End Breadcamp */}
      {/* Start All Products  */}
      <Spacing lg={70} md={80} />
      <div className="container">
        <div className="cs_filter_heading cs_style_1 cs_type_1">
          <FilterComponents
            {...filterData}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <div className="cs_filter_heading_right cs_light">
            <div className="cs_view_box">
              <span>{filterData.results}</span>
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
          className={`cs_grid_style_2 cs_products_view cs_style_1 cs_type_1 ${
            activeButton === "grid" ? "active" : ""
          }`}
        >
          {products.map((productData, index) => (
            <div className="cs_grid_col" key={index}>
              <ProductCard3 {...productData} />
            </div>
          ))}
        </div>
        <Spacing lg={40} md={70} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Spacing lg={80} md={150} />
      {/* End All Products  */}
    </>
  );
};

export default FlashSaleCatalogV2;
