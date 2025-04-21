import { useState } from "react";
import BreadCamp from "../../../components/BreadCamp";
import Sidebar1 from "../../../components/Header/Sidebar/Sidebar1";
import Spacing from "../../../components/Spacing";
import Pagination from "../../../components/AllProductsSection/Pagination";
import ProductCard2 from "../../../components/ProductCard/ProductCard2";
import Button4 from "../../../components/Buttons/Button4";
import { PageTitle } from "../../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

const sidebarData = {
  logo: "/assets/images/drower_logo.svg",
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
  priceRanges: [
    "< $50",
    "$51 - $100",
    "$101 - $250",
    "$251 - $500",
    "$501 - $1,000",
  ],
  ratings: [5, 4, 3, 2, 1],
  skinTypes: [
    "Normal Skin",
    "Dry Skin",
    "Oily Skin",
    "Combination Skin",
    "Sensitive Skin",
  ],
};

const productData = {
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

  products: [
    {
      id: 1,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Color Pop Lipstick",
      price: "$49.99",
      rating: 2.0,
      offerNumber: 10,
      image: "/assets/images/product_39.png",
      url: "/product/:product-details",
    },
    {
      id: 2,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Perfecting Matte Foundation",
      price: "$29.99",
      rating: 4.2,
      offerNumber: 55,
      image: "/assets/images/product_40.png",
      url: "/product/:product-details",
    },
    {
      id: 3,
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Nourishing Hair Oil",
      price: "$19.99",
      rating: 3,
      image: "/assets/images/product_41.png",
      url: "/product/:product-details",
    },
    {
      id: 4,
      category: "FRAGRANCE",
      categoryUrl: "/shop",
      title: "Enchanted Blossom Perfume",
      price: "$39.99",
      rating: 1.0,
      image: "/assets/images/product_42.png",
      url: "/product/:product-details",
    },
    {
      id: 5,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Essential Makeup Brush Set",
      price: "$14.99",
      rating: 3.0,
      image: "/assets/images/product_43.png",
      url: "/product/:product-details",
    },
    {
      id: 6,
      category: "BATH & BODY",
      categoryUrl: "/shop",
      title: "Refreshing Body Wash",
      price: "$24.99",
      rating: 4.0,
      offerNumber: 10,
      image: "/assets/images/product_44.png",
      url: "/product/:product-details",
    },
    {
      id: 7,
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Invigorating Shaving Kit",
      price: "$34.99",
      rating: 3.0,
      offerNumber: 20,
      image: "/assets/images/product_45.png",
      url: "/product/:product-details",
    },
    {
      id: 8,
      category: "WELLNESS",
      categoryUrl: "/shop",
      title: "Relaxing Aromatherapy Oil",
      price: "$12.99",
      rating: 4.0,
      image: "/assets/images/product_46.png",
      url: "/product/:product-details",
    },
  ],
};
const ShopCatalog2 = () => {
  PageTitle("Shop-Catalog-V2");
  const [activeButton, setActiveButton] = useState("list");

  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (viewType) => {
    setActiveButton(viewType);
  };

  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_1.jpeg"
        title="Beauty Collection"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      {/* Start All Products  */}

      <Sidebar1 data={sidebarData} variant={"style-1"} />

      <div className="container">
        <div className="cs_filter_heading cs_style_1">
          <div className="cs_filter_heading_left">
            <h3>{productData.filterData.heading}</h3>
            <select className="cs_custom_select">
              {productData.filterData.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="cs_filter_heading_right cs_light">
            <div className="cs_view_box">
              <span>{productData.productCountText}</span>
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
          {productData.products.map((product, index) => (
            <div className="cs_grid_col" key={index}>
              <ProductCard2 {...product} index={index} variant={"style-2"} />
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

export default ShopCatalog2;
