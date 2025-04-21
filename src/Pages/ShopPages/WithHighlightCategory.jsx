import { useState } from "react";
import BreadCamp1 from "../../components/BreadCamp/BreadCamp1";
import { Link } from "react-router-dom";
import Spacing from "../../components/Spacing";
import ProductGrid from "../../components/ProductGrid";
import Pagination from "../../components/AllProductsSection/Pagination";
import FilterComponents from "../../components/FilterComponents";
import Button4 from "../../components/Buttons/Button4";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/", active: false },
  { label: "Products", url: "", active: true },
];

const highlightData = {
  categoriesData: [
    {
      imgSrc: "/assets/images/product_40.png",
      name: "Beauty",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_41.png",
      name: "Haircare",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_42.png",
      name: "Body Care",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_43.png",
      name: "Accessories",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_44.png",
      name: "Sun Protection",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_45.png",
      name: "Skincare",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_46.png",
      name: "Anti-Aging",
      link: "/shop-v2",
    },
    {
      imgSrc: "/assets/images/product_39.png",
      name: "Makeup",
      link: "/shop-v2",
    },
  ],
};

const productData = [
  {
    id: 1,
    image: "/assets/images/product_1.png",
    category: "GLOWIFY BEAUTY",
    title: "Rosewater Hydrating Mist",
    price: "19.99",
    rating: 4.5,
    ratingCount: "4.7/5",
    reviews: 143,
    link: "/product/:product-details",
  },
  {
    id: 2,
    image: "/assets/images/product_2.png",
    category: "GLOWIFY BEAUTY",
    title: "Vitamin C Serum",
    price: "24.99",
    rating: 2.8,
    ratingCount: "4.7/5",
    reviews: 200,
    link: "/product/:product-details",
  },
  {
    id: 3,
    image: "/assets/images/product_3.png",
    category: "NATURAL BLISS",
    title: "Lavender Body Lotion",
    price: "15.50",
    rating: 1.7,
    ratingCount: "4.7/5",
    reviews: 95,
    link: "/product/:product-details",
  },
  {
    id: 4,
    image: "/assets/images/product_4.png",
    category: "BEAUTY ESSENTIALS",
    title: "Coconut Hair Mask",
    price: "22.99",
    rating: 2.6,
    ratingCount: "4.7/5",
    reviews: 180,
    link: "/product/:product-details",
  },
  {
    id: 5,
    image: "/assets/images/product_5.png",
    category: "PURE BEAUTY",
    title: "Green Tea Face Wash",
    price: "13.99",
    rating: 3.5,
    ratingCount: "4.7/5",
    reviews: 220,
    link: "/product/:product-details",
  },
  {
    id: 6,
    image: "/assets/images/product_6.png",
    category: "GLOWIFY BEAUTY",
    title: "Charcoal Detox Mask",
    price: "17.99",
    rating: 1.2,
    ratingCount: "4.7/5",
    reviews: 80,
    link: "/product/:product-details",
  },
  {
    id: 7,
    image: "/assets/images/product_7.png",
    category: "SKIN RITUALS",
    title: "Aloe Vera Gel",
    price: "10.50",
    rating: 3.9,
    ratingCount: "4.7/5",
    reviews: 300,
    link: "/product/:product-details",
  },
  {
    id: 8,
    image: "/assets/images/product_8.png",
    category: "LUXE BEAUTY",
    title: "Hyaluronic Acid Serum",
    price: "29.99",
    rating: 2.8,
    ratingCount: "4.7/5",
    reviews: 250,
    link: "/product/:product-details",
  },
  {
    id: 9,
    image: "/assets/images/product_9.png",
    category: "NATURAL BLISS",
    title: "Tea Tree Oil",
    price: "12.99",
    rating: 1.3,
    ratingCount: "4.7/5",
    reviews: 140,
    link: "/product/:product-details",
  },
  {
    id: 10,
    image: "/assets/images/product_10.png",
    category: "BEAUTY ESSENTIALS",
    title: "Shea Butter Moisturizer",
    price: "18.99",
    rating: 1.6,
    ratingCount: "4.7/5",
    reviews: 130,
    link: "/product/:product-details",
  },
  {
    id: 11,
    image: "/assets/images/product_11.png",
    category: "PURE BEAUTY",
    title: "Vitamin E Oil",
    price: "14.50",
    rating: 2.7,
    ratingCount: "4.7/5",
    reviews: 190,
    link: "/product/:product-details",
  },
  {
    id: 12,
    image: "/assets/images/product_12.png",
    category: "LUXE BEAUTY",
    title: "Collagen Boost Serum",
    price: "32.99",
    rating: 2.9,
    ratingCount: "4.7/5",
    reviews: 275,
    link: "/product/:product-details",
  },
  {
    id: 13,
    image: "/assets/images/product_13.png",
    category: "SKIN RITUALS",
    title: "Jojoba Oil",
    price: "16.50",
    rating: 3.4,
    ratingCount: "4.7/5",
    reviews: 105,
    link: "/product/:product-details",
  },
  {
    id: 14,
    image: "/assets/images/product_14.png",
    category: "BEAUTY ESSENTIALS",
    title: "Cucumber Eye Gel",
    price: "11.99",
    rating: 1.5,
    ratingCount: "4.7/5",
    reviews: 160,
    link: "/product/:product-details",
  },
  {
    id: 15,
    image: "/assets/images/product_15.png",
    category: "NATURAL BLISS",
    title: "Rosehip Seed Oil",
    price: "19.99",
    rating: 2.8,
    ratingCount: "4.7/5",
    reviews: 220,
    link: "/product/:product-details",
  },
  {
    id: 16,
    image: "/assets/images/product_16.png",
    category: "LUXE BEAUTY",
    title: "Argan Oil Hair Treatment",
    price: "25.50",
    rating: 1.7,
    ratingCount: "4.7/5",
    reviews: 185,
    link: "/product/:product-details",
  },
  {
    id: 17,
    image: "/assets/images/product_17.png",
    category: "SKIN RITUALS",
    title: "Vitamin C Clay Mask",
    price: "20.99",
    rating: 1.6,
    ratingCount: "4.7/5",
    reviews: 140,
    link: "/product/:product-details",
  },
  {
    id: 18,
    image: "/assets/images/product_18.png",
    category: "PURE BEAUTY",
    title: "Aloe & Cucumber Toner",
    price: "13.50",
    rating: 2.3,
    ratingCount: "4.7/5",
    reviews: 115,
    link: "/product/:product-details",
  },
  {
    id: 19,
    image: "/assets/images/product_19.png",
    category: "GLOWIFY BEAUTY",
    title: "Lavender Body Scrub",
    price: "21.99",
    rating: 3.9,
    ratingCount: "4.7/5",
    reviews: 250,
    link: "/product/:product-details",
  },
  {
    id: 20,
    image: "/assets/images/product_20.png",
    category: "NATURAL BLISS",
    title: "Shea Body Butter",
    price: "18.99",
    rating: 2.5,
    ratingCount: "4.7/5",
    reviews: 170,
    link: "/product/:product-details",
  },
  {
    id: 21,
    image: "/assets/images/product_21.png",
    category: "BEAUTY ESSENTIALS",
    title: "Charcoal Exfoliator",
    price: "17.99",
    rating: 2.4,
    ratingCount: "4.7/5",
    reviews: 130,
    link: "/product/:product-details",
  },
  {
    id: 22,
    image: "/assets/images/product_22.png",
    category: "PURE BEAUTY",
    title: "Coconut Body Lotion",
    price: "15.50",
    rating: 2.7,
    ratingCount: "4.7/5",
    reviews: 140,
    link: "/product/:product-details",
  },
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

const WithHighlightCategory = () => {
  PageTitle("Shop-With-Highlight-Category");
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
      <BreadCamp1
        backgroundImage="/assets/images/breadcamp_bg_1.jpeg"
        title="Discover Our Beauty Collection"
        breadcrumbItems={breadcrumbData}
      />
      {/* End Breadcamp */}
      {/* Start All Products  */}
      <Spacing lg={80} md={70} />
      <div className="container">
        <div className="cs_highlight_categories">
          {highlightData.categoriesData.map((category, index) => (
            <Link
              to={category.link}
              className="cs_highlight_category"
              key={index}
            >
              <div className="cs_highlight_category_thumb cs_accent_light_bg">
                <img src={category.imgSrc} alt={category.name} />
              </div>
              <span className="cs_primary_font cs_primary_color cs_fs_18">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        <Spacing lg={60} md={70} />
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
        <ProductGrid data={productData} activeView={activeButton} />
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

export default WithHighlightCategory;
