import { useState } from "react";
import BreadCamp from "../../../components/BreadCamp";
import Sidebar1 from "../../../components/Header/Sidebar/Sidebar1";
import Spacing from "../../../components/Spacing";
import Pagination from "../../../components/AllProductsSection/Pagination";
import Button4 from "../../../components/Buttons/Button4";
import ProductCard from "../../../components/ProductCard";
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
      labelSize: "OFF",
      image: "/assets/images/product_1.png",
      category: "MAKEUP PRODUCTS",
      title: "Hydrating Lip Gloss",
      price: 19.99,
      originalPrice: 23.5,
      rating: 3.5,
      ratingCount: 871,
      progress: 47,
      stock: 10,
      discount: "20%",
      link: "/product/:product-details",
    },
    {
      id: 2,
      labelSize: "OFF",
      image: "/assets/images/product_2.png",
      category: "MAKEUP PRODUCTS",
      title: "Matte Finish Foundation",
      price: 22.5,
      originalPrice: 30.0,
      rating: 2.2,
      ratingCount: 654,
      progress: 80,
      stock: 8,
      discount: "15%",
      link: "/product/:product-details",
    },
    {
      id: 3,
      labelSize: "OFF",
      image: "/assets/images/product_3.png",
      category: "MAKEUP PRODUCTS",
      title: "Liquid Eyeliner",
      price: 15.0,
      originalPrice: 20.0,
      rating: 3.3,
      ratingCount: 480,
      progress: 55,
      stock: 12,
      discount: "15%",
      link: "/product/:product-details",
    },
    {
      id: 4,
      labelSize: "OFF",
      image: "/assets/images/product_4.png",
      category: "MAKEUP PRODUCTS",
      title: "High Pigment Eyeshadow",
      price: 18.0,
      originalPrice: 24.0,
      rating: 2.4,
      ratingCount: 520,
      progress: 65,
      stock: 9,
      discount: "15%",
      link: "/product/:product-details",
    },
    {
      id: 5,
      labelSize: "OFF",
      image: "/assets/images/product_5.png",
      category: "MAKEUP PRODUCTS",
      title: "Blush Palette",
      price: 22.5,
      originalPrice: 30.0,
      rating: 4.2,
      ratingCount: 654,
      progress: 39,
      stock: 8,
      discount: "15%",
      link: "/product/:product-details",
    },
    {
      id: 6,
      labelSize: "OFF",
      image: "/assets/images/product_1.png",
      category: "MAKEUP PRODUCTS",
      title: "Creamy Concealer",
      price: 16.0,
      originalPrice: 19.0,
      rating: 3.9,
      ratingCount: 472,
      progress: 60,
      stock: 11,
      discount: "20%",
      link: "/product/:product-details",
    },
    {
      id: 7,
      labelSize: "NEW",
      image: "/assets/images/product_2.png",
      category: "SKINCARE",
      title: "Hydrating Face Mist",
      price: 12.5,
      originalPrice: 18.0,
      rating: 4.3,
      ratingCount: 203,
      progress: 75,
      stock: 7,
      discount: "30%",
      link: "/product/:product-details",
    },
    {
      id: 8,
      labelSize: "OFF",
      image: "/assets/images/product_3.png",
      category: "MAKEUP PRODUCTS",
      title: "Matte Lipstick",
      price: 14.0,
      originalPrice: 18.0,
      rating: 4.0,
      ratingCount: 330,
      progress: 45,
      stock: 15,
      discount: "20%",
      link: "/product/:product-details",
    },
    {
      id: 9,
      labelSize: "LIMITED",
      image: "/assets/images/product_4.png",
      category: "FRAGRANCE",
      title: "Floral Scent Perfume",
      price: 45.0,
      originalPrice: 55.0,
      rating: 4.5,
      ratingCount: 190,
      progress: 90,
      stock: 6,
      discount: "15%",
      link: "/product/:product-details",
    },
    {
      id: 10,
      labelSize: "OFF",
      image: "/assets/images/product_5.png",
      category: "MAKEUP PRODUCTS",
      title: "Brow Shaping Gel",
      price: 10.5,
      originalPrice: 15.0,
      rating: 3.7,
      ratingCount: 415,
      progress: 50,
      stock: 18,
      discount: "10%",
      link: "/product/:product-details",
    },
    {
      id: 11,
      labelSize: "OFF",
      image: "/assets/images/product_1.png",
      category: "SKINCARE",
      title: "Daily Moisturizer",
      price: 22.0,
      originalPrice: 27.0,
      rating: 4.1,
      ratingCount: 543,
      progress: 68,
      stock: 13,
      discount: "18%",
      link: "/product/:product-details",
    },
    {
      id: 12,
      labelSize: "NEW",
      image: "/assets/images/product_2.png",
      category: "HAIRCARE",
      title: "Nourishing Shampoo",
      price: 19.5,
      originalPrice: 25.0,
      rating: 4.4,
      ratingCount: 315,
      progress: 85,
      stock: 5,
      discount: "22%",
      link: "/product/:product-details",
    },
    {
      id: 13,
      labelSize: "OFF",
      image: "/assets/images/product_3.png",
      category: "MAKEUP PRODUCTS",
      title: "Volumizing Mascara",
      price: 17.0,
      originalPrice: 22.0,
      rating: 3.9,
      ratingCount: 490,
      progress: 58,
      stock: 9,
      discount: "20%",
      link: "/product/:product-details",
    },
    {
      id: 14,
      labelSize: "OFF",
      image: "/assets/images/product_4.png",
      category: "MAKEUP PRODUCTS",
      title: "Contour Stick",
      price: 14.0,
      originalPrice: 19.0,
      rating: 3.6,
      ratingCount: 382,
      progress: 72,
      stock: 10,
      discount: "25%",
      link: "/product/:product-details",
    },
    {
      id: 15,
      labelSize: "LIMITED",
      image: "/assets/images/product_5.png",
      category: "SKINCARE",
      title: "Anti-Aging Serum",
      price: 28.0,
      originalPrice: 35.0,
      rating: 4.7,
      ratingCount: 263,
      progress: 90,
      stock: 4,
      discount: "20%",
      link: "/product/:product-details",
    },
  ],
};
const OfferCatalog = () => {
  PageTitle("Offer-Catalog");
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
        backgroundImage="/assets/images/breadcamp_bg_2.jpeg"
        title="Discover Our Beauty Collection"
        breadcrumbItems={breadcrumbData}
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
              <ProductCard {...product} />
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

export default OfferCatalog;
