import { useState } from "react";
import BreadCamp1 from "../../components/BreadCamp/BreadCamp1";
import Sidebar1 from "../../components/Header/Sidebar/Sidebar1";
import Spacing from "../../components/Spacing";
import Pagination from "../../components/AllProductsSection/Pagination";
import Button4 from "../../components/Buttons/Button4";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/", active: false },
  { label: "Products", url: "", active: true },
];

const allProductData = {
  sidebarData: {
    firstLabel: "Categories",
    secLabel: "Brands",
    thirdLabel: "Price Range",
    fourLabel: "Rating",
    fiveLabel: "Skin Type",
    BottomText: "More Categories",
    categories: [
      "Body Care",
      "Nail Care",
      "Sun Care",
      "Bath & Shower",
      "Oral Care",
      "Men's Grooming",
      "Anti-Aging",
      "Beauty Devices",
      "Spa & Pampering",
      "Hand & Foot Care",
    ],
    beautyBrands: [
      "Glowify Beauty",
      "Luxe Lashes",
      "PureGlow",
      "Radiant Skincare",
      "HairLux",
    ],
    priceRanges: {
      minLabel: "Min Price",
      minPlaceholder: "$30",
      maxLabel: "Max Price",
      maxPlaceholder: "$100",
      buttonText: "APPLY",
    },
    ratings: [5, 4, 3, 2, 1],
    skinTypes: [
      "Normal Skin",
      "Dry Skin",
      "Oily Skin",
      "Combination Skin",
      "Sensitive Skin",
    ],
  },
  filterData: {
    heading: "Sort by",
    options: [
      { value: 1, label: "Default sorting" },
      { value: 1, label: "Sort by popularity" },
      { value: 2, label: "Sort by latest" },
      { value: 3, label: "Low to high price" },
      { value: 4, label: "High to low price" },
    ],
  },
  productCountText: "Showing 1 - 16 of 98 results",

  productData: [
    {
      image: "/assets/images/product_1.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Silky Smooth Shampoo",
      price: "$19.99",
      rating: 2.7,
      sold: 523,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_2.png",
      url: "/shop",
      category: "FRAGRANCE",
      title: "Luxury Perfume",
      price: "$89.99",
      rating: 3.3,
      sold: 157,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_3.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Velvet Matte Lipstick",
      price: "$12.99",
      rating: 3.8,
      sold: 712,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_4.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Coconut Body Lotion",
      price: "$24.99",
      rating: 4.6,
      sold: 308,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_5.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Hydrating Face Cream",
      price: "$34.99",
      rating: 2.9,
      sold: 620,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_6.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Nourishing Hair Mask",
      price: "$29.99",
      rating: 4.2,
      sold: 410,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_7.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Hydrating Lip Gloss",
      price: "$15.99",
      rating: 4.0,
      sold: 320,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_8.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Revitalizing Night Cream",
      price: "$39.99",
      rating: 4.5,
      sold: 220,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_8.png",
      url: "/shop",
      category: "FRAGRANCE",
      title: "Fresh Citrus Perfume",
      price: "$74.99",
      rating: 3.7,
      sold: 180,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_9.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Aloe Vera Gel",
      price: "$12.49",
      rating: 4.1,
      sold: 615,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_10.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Compact Powder",
      price: "$24.99",
      rating: 3.5,
      sold: 410,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_11.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Curl Defining Cream",
      price: "$19.99",
      rating: 4.4,
      sold: 375,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_12.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Daily Moisturizer",
      price: "$27.99",
      rating: 4.3,
      sold: 490,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_12.png",
      url: "/shop",
      category: "FRAGRANCE",
      title: "Evening Blossom Perfume",
      price: "$79.99",
      rating: 4.6,
      sold: 220,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      image: "/assets/images/product_13.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Exfoliating Body Scrub",
      price: "$15.99",
      rating: 4.0,
      sold: 300,
      cartIcon: "/assets/images/icons/cart_white.svg",
    },
  ],
};

const ShopV2 = () => {
  PageTitle("Shop-V2");
  const [activeButton, setActiveButton] = useState("list");
  const [currentPage, setCurrentPage] = useState(3);
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
      <BreadCamp1
        backgroundImage="/assets/images/breadcamp_bg_1.jpeg"
        title="Discover Our Beauty Collection"
        breadcrumbItems={breadcrumbData}
      />
      {/* End Breadcamp */}
      {/* Start All Products  */}
      <Spacing lg={70} md={80} />
      <div className="container">
        <div className="cs_products_with_sidebar">
          <Sidebar1 data={allProductData.sidebarData} />
          <div className="cs_products_wrap">
            <div className="cs_filter_heading cs_style_1">
              <div className="cs_filter_heading_left">
                <h3>{allProductData.filterData.heading}</h3>
                <select className="cs_custom_select">
                  {allProductData.filterData.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cs_filter_heading_right cs_light">
                <div className="cs_view_box">
                  <span>{allProductData.productCountText}</span>
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
              {allProductData.productData.map((productData, index) => (
                <div className="cs_grid_col" key={index}>
                  <ProductCard2 {...productData} variant={"style-1"} />
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
        </div>
      </div>
      <Spacing lg={80} md={150} />
      {/* End All Products  */}
    </>
  );
};

export default ShopV2;
