import { useState } from "react";
import BreadCamp2 from "../../components/BreadCamp/BreadCamp2";
import Sidebar1 from "../../components/Header/Sidebar/Sidebar1";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import Pagination from "../../components/AllProductsSection/Pagination";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
import { PageTitle } from "../../Helper/PageTitle";
const breadcampData = {
  title: "Our Shop",
  locationPath: [
    { label: "Home", url: "/home-v2", active: false },
    { label: "Products", url: "", active: true },
  ],
};

const sidebarData = {
  firstLabel: "Categories",
  secLabel: "Brands",
  thirdLabel: "Price",
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
};

const allProductData = {
  bannersData: [
    {
      imgSrc: "/assets/images/banner/banner_img_7.jpeg",
      altText: "Banner 1",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/banner/banner_img_8.jpeg",
      altText: "Banner 2",
      link: "/shop-v2",
    },
  ],
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
      image: "/assets/images/product_1.png",
      category: "GLOWIFY BEAUTY",
      title: "Rosewater Hydrating Mist",
      price: "$19.99",
      rating: 4.5,
      reviews: 143,
      ratingCount: "4.5/5",
      link: "/product/:product-details",
    },
    {
      id: 2,
      image: "/assets/images/product_2.png",
      category: "GLOWIFY BEAUTY",
      title: "Vitamin C Serum",
      price: "$24.99",
      ratingCount: "4.5/5",
      rating: 2.8,
      reviews: 200,
      link: "/product/:product-details",
    },
    {
      id: 3,
      image: "/assets/images/product_3.png",
      category: "NATURAL BLISS",
      title: "Lavender Body Lotion",
      price: "$15.50",
      ratingCount: "4.5/5",
      rating: 1.7,
      reviews: 95,
      link: "/product/:product-details",
    },
    {
      id: 4,
      image: "/assets/images/product_4.png",
      category: "BEAUTY ESSENTIALS",
      title: "Coconut Hair Mask",
      price: "$22.99",
      ratingCount: "4.5/5",
      rating: 2.6,
      reviews: 180,
      link: "/product/:product-details",
    },
    {
      id: 5,
      image: "/assets/images/product_5.png",
      category: "PURE BEAUTY",
      title: "Green Tea Face Wash",
      price: "$13.99",
      ratingCount: "4.5/5",
      rating: 3.5,
      reviews: 220,
      link: "/product/:product-details",
    },
    {
      id: 6,
      image: "/assets/images/product_6.png",
      category: "GLOWIFY BEAUTY",
      title: "Charcoal Detox Mask",
      price: "$17.99",
      ratingCount: "4.5/5",
      rating: 1.2,
      reviews: 80,
      link: "/product/:product-details",
    },
    {
      id: 7,
      image: "/assets/images/product_7.png",
      category: "SKIN RITUALS",
      title: "Aloe Vera Gel",
      price: "$10.50",
      ratingCount: "4.5/5",
      rating: 3.9,
      reviews: 300,
      link: "/product/:product-details",
    },
    {
      id: 8,
      image: "/assets/images/product_8.png",
      category: "LUXE BEAUTY",
      title: "Hyaluronic Acid Serum",
      price: "$29.99",
      ratingCount: "4.5/5",
      rating: 2.8,
      reviews: 250,
      link: "/product/:product-details",
    },
    {
      id: 9,
      image: "/assets/images/product_9.png",
      category: "NATURAL BLISS",
      title: "Tea Tree Oil",
      price: "$12.99",
      ratingCount: "4.5/5",
      rating: 1.3,
      reviews: 140,
      link: "/product/:product-details",
    },
    {
      id: 10,
      image: "/assets/images/product_10.png",
      category: "BEAUTY ESSENTIALS",
      title: "Shea Butter Moisturizer",
      price: "$18.99",
      ratingCount: "4.5/5",
      rating: 1.6,
      reviews: 130,
      link: "/product/:product-details",
    },
    {
      id: 11,
      image: "/assets/images/product_11.png",
      category: "PURE BEAUTY",
      title: "Vitamin E Oil",
      price: "$14.50",
      ratingCount: "4.5/5",
      rating: 2.7,
      reviews: 190,
      link: "/product/:product-details",
    },
    {
      id: 12,
      image: "/assets/images/product_12.png",
      category: "LUXE BEAUTY",
      title: "Collagen Boost Serum",
      price: "$32.99",
      ratingCount: "4.5/5",
      rating: 2.9,
      reviews: 275,
      link: "/product/:product-details",
    },
    {
      id: 13,
      image: "/assets/images/product_13.png",
      category: "SKIN RITUALS",
      title: "Jojoba Oil",
      price: "$16.50",
      ratingCount: "4.5/5",
      rating: 3.4,
      reviews: 105,
      link: "/product/:product-details",
    },
    {
      id: 14,
      image: "/assets/images/product_14.png",
      category: "BEAUTY ESSENTIALS",
      title: "Cucumber Eye Gel",
      price: "$11.99",
      ratingCount: "4.5/5",
      rating: 1.5,
      reviews: 160,
      link: "/product/:product-details",
    },
    {
      id: 15,
      image: "/assets/images/product_15.png",
      category: "NATURAL BLISS",
      title: "Rosehip Seed Oil",
      price: "$19.99",
      ratingCount: "4.5/5",
      rating: 2.8,
      reviews: 220,
      link: "/product/:product-details",
    },
    {
      id: 16,
      image: "/assets/images/product_16.png",
      category: "LUXE BEAUTY",
      title: "Argan Oil Hair Treatment",
      price: "$25.50",
      ratingCount: "4.5/5",
      rating: 1.7,
      reviews: 185,
      link: "/product/:product-details",
    },
    {
      id: 17,
      image: "/assets/images/product_17.png",
      category: "SKIN RITUALS",
      title: "Vitamin C Clay Mask",
      price: "$20.99",
      ratingCount: "4.5/5",
      rating: 1.6,
      reviews: 140,
      link: "/product/:product-details",
    },
    {
      id: 18,
      image: "/assets/images/product_18.png",
      category: "PURE BEAUTY",
      title: "Aloe & Cucumber Toner",
      price: "$13.50",
      ratingCount: "4.5/5",
      rating: 2.3,
      reviews: 115,
      link: "/product/:product-details",
    },
    {
      id: 19,
      image: "/assets/images/product_19.png",
      category: "GLOWIFY BEAUTY",
      title: "Lavender Body Scrub",
      price: "$21.99",
      ratingCount: "4.5/5",
      rating: 3.9,
      reviews: 250,
      link: "/product/:product-details",
    },
    {
      id: 20,
      image: "/assets/images/product_20.png",
      category: "NATURAL BLISS",
      title: "Shea Body Butter",
      price: "$18.99",
      ratingCount: "4.5/5",
      rating: 2.5,
      reviews: 170,
      link: "/product/:product-details",
    },
    {
      id: 21,
      image: "/assets/images/product_21.png",
      category: "BEAUTY ESSENTIALS",
      title: "Charcoal Exfoliator",
      price: "$17.99",
      ratingCount: "4.5/5",
      rating: 2.4,
      reviews: 130,
      link: "/product/:product-details",
    },
    {
      id: 22,
      image: "/assets/images/product_22.png",
      category: "PURE BEAUTY",
      title: "Coconut Body Lotion",
      price: "$15.50",
      ratingCount: "4.5/5",
      rating: 2.7,
      reviews: 140,
      link: "/product/:product-details",
    },
  ],
};
const ShopWithBanner = () => {
  PageTitle("Shop-With-Banner");
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
      <BreadCamp2 data={breadcampData} />
      {/* End Breadcamp */}
      {/* Start All Products  */}
      <Spacing lg={70} md={80} />

      <div className="container">
        <div className="cs_products_with_sidebar">
          <Sidebar1 data={sidebarData} />
          <div className="cs_products_wrap">
            <div className="cs_banner_list_1">
              {allProductData.bannersData.map((banner, index) => (
                <Link to={banner.link} key={index}>
                  <img src={banner.imgSrc} alt={banner.altText} />
                </Link>
              ))}
            </div>

            <Spacing lg={50} md={50} />
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
                    <button
                      type="button"
                      className={`cs_list_view ${
                        activeButton === "grid" ? "active" : ""
                      }`}
                      onClick={() => handleClick("grid")}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_57_2940)">
                          <path
                            d="M22.5 21H1.50001C0.671548 21 0 20.3284 0 19.5C0 18.6716 0.671548 18 1.50001 18H22.5C23.3285 18 24.0001 18.6716 24.0001 19.5C24 20.3284 23.3285 21 22.5 21Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22.5 13.5H1.50001C0.671548 13.5 0 12.8284 0 12C0 11.1716 0.671548 10.5 1.50001 10.5H22.5C23.3285 10.5 24.0001 11.1715 24.0001 12C24.0001 12.8285 23.3285 13.5 22.5 13.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22.5 5.99996H1.50001C0.671548 5.99996 0 5.32841 0 4.49995C0 3.67149 0.671548 2.99994 1.50001 2.99994H22.5C23.3285 2.99994 24.0001 3.67149 24.0001 4.49995C24.0001 5.32841 23.3285 5.99996 22.5 5.99996Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_57_2940">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={`cs_grid_view ${
                        activeButton === "list" ? "active" : ""
                      }`}
                      onClick={() => handleClick("list")}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.1875 12.9375H15.75C14.1992 12.9375 12.9375 14.1992 12.9375 15.75V21.1875C12.9375 22.7383 14.1992 24 15.75 24H21.1875C22.7383 24 24 22.7383 24 21.1875V15.75C24 14.1992 22.7383 12.9375 21.1875 12.9375ZM22.125 21.1875C22.125 21.7044 21.7044 22.125 21.1875 22.125H15.75C15.2331 22.125 14.8125 21.7044 14.8125 21.1875V15.75C14.8125 15.2331 15.2331 14.8125 15.75 14.8125H21.1875C21.7044 14.8125 22.125 15.2331 22.125 15.75V21.1875ZM8.25 12.9375H2.8125C1.26169 12.9375 0 14.1992 0 15.75V21.1875C0 22.7383 1.26169 24 2.8125 24H8.25C9.80081 24 11.0625 22.7383 11.0625 21.1875V15.75C11.0625 14.1992 9.80081 12.9375 8.25 12.9375ZM9.1875 21.1875C9.1875 21.7044 8.76694 22.125 8.25 22.125H2.8125C2.29556 22.125 1.875 21.7044 1.875 21.1875V15.75C1.875 15.2331 2.29556 14.8125 2.8125 14.8125H8.25C8.76694 14.8125 9.1875 15.2331 9.1875 15.75V21.1875ZM8.25 0H2.8125C1.26169 0 0 1.26169 0 2.8125V8.25C0 9.80081 1.26169 11.0625 2.8125 11.0625H8.25C9.80081 11.0625 11.0625 9.80081 11.0625 8.25V2.8125C11.0625 1.26169 9.80081 0 8.25 0ZM9.1875 8.25C9.1875 8.76694 8.76694 9.1875 8.25 9.1875H2.8125C2.29556 9.1875 1.875 8.76694 1.875 8.25V2.8125C1.875 2.29556 2.29556 1.875 2.8125 1.875H8.25C8.76694 1.875 9.1875 2.29556 9.1875 2.8125V8.25ZM21.1875 0H15.75C14.1992 0 12.9375 1.26169 12.9375 2.8125V8.25C12.9375 9.80081 14.1992 11.0625 15.75 11.0625H21.1875C22.7383 11.0625 24 9.80081 24 8.25V2.8125C24 1.26169 22.7383 0 21.1875 0ZM22.125 8.25C22.125 8.76694 21.7044 9.1875 21.1875 9.1875H15.75C15.2331 9.1875 14.8125 8.76694 14.8125 8.25V2.8125C14.8125 2.29556 15.2331 1.875 15.75 1.875H21.1875C21.7044 1.875 22.125 2.29556 22.125 2.8125V8.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
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
              {allProductData.products.map((product, index) => (
                <div className="cs_grid_col" key={index}>
                  <ProductCard2 {...product} variant={"style-1"} />
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

export default ShopWithBanner;
