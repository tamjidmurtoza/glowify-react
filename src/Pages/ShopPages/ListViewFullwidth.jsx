import { useState } from "react";
import BreadCamp from "../../components/BreadCamp";
import Spacing from "../../components/Spacing";
import ProductGrid from "../../components/ProductGrid";
import Pagination from "../../components/AllProductsSection/Pagination";
import Button4 from "../../components/Buttons/Button4";
import FilterComponents from "../../components/FilterComponents";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

const productData = [
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

const ListViewFullwidth = () => {
  PageTitle("ListView-Full-With");
  const [activeButton, setActiveButton] = useState("grid");
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
        title="Discover Our Beauty Collection"
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

export default ListViewFullwidth;
