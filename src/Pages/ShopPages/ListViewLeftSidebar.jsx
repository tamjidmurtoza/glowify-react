import { useState } from "react";
import BreadCamp from "../../components/BreadCamp";
import Sidebar1 from "../../components/Header/Sidebar/Sidebar1";
import Spacing from "../../components/Spacing";
import Pagination from "../../components/AllProductsSection/Pagination";
import Button4 from "../../components/Buttons/Button4";
import ProductCard4 from "../../components/ProductCard/ProductCard4";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

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
      altText: "Product 1",
      discount: 15,
      discountText: "OFF",
      category: "GLOWIFY BEAUTY",
      title: "Lavender Calm Mist",
      price: 18.99,
      originalPrice: 21.99,
      rating: 4.2,
      reviews: 98,
      description:
        "Experience tranquility with our Lavender Calm Mist, soothing your senses while providing a hydrating touch.",
      detailsUrl: "/product/:product-details-1",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-1",
    },
    {
      id: 2,
      image: "/assets/images/product_2.png",
      altText: "Product 2",

      category: "NATURE GLOW",
      title: "Cucumber Refresh Spray",
      price: 15.49,
      originalPrice: 20.49,
      rating: 4.7,
      reviews: 178,
      description:
        "Hydrate and cool your skin with the refreshing essence of cucumber in our Cucumber Refresh Spray.",
      detailsUrl: "/product/:product-details-2",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-2",
    },
    {
      id: 3,
      image: "/assets/images/product_3.png",
      altText: "Product 3",
      discount: 30,
      discountText: "OFF",
      category: "SKIN SERENITY",
      title: "Chamomile Skin Elixir",
      price: 21.99,
      originalPrice: 31.99,
      rating: 4.8,
      reviews: 250,
      description:
        "Our Chamomile Skin Elixir nourishes and calms your skin, leaving it soft and smooth.",
      detailsUrl: "/product/:product-details-3",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-3",
    },
    {
      id: 4,
      image: "/assets/images/product_4.png",
      altText: "Product 4",

      category: "ORGANIC ESSENCE",
      title: "Mint Cooling Gel",
      price: 12.99,
      originalPrice: 14.99,
      rating: 4.1,
      reviews: 112,
      description:
        "Stay cool and refreshed with our Mint Cooling Gel, perfect for soothing tired skin.",
      detailsUrl: "/product/:product-details-4",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-4",
    },
    {
      id: 5,
      image: "/assets/images/product_5.png",
      altText: "Product 5",

      category: "GLOWIFY BEAUTY",
      title: "Rose Glow Serum",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 185,
      description:
        "Boost your skin's radiance with our Rose Glow Serum, a powerful blend of natural ingredients.",
      detailsUrl: "/product/:product-details-5",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-5",
    },
    {
      id: 6,
      image: "/assets/images/product_6.png",
      altText: "Product 6",

      category: "NATURE GLOW",
      title: "Aloe Vera Hydrating Gel",
      price: 17.49,
      originalPrice: 21.49,
      rating: 4.5,
      reviews: 123,
      description:
        "Keep your skin moisturized and fresh with our Aloe Vera Hydrating Gel, perfect for everyday use.",
      detailsUrl: "/product/:product-details-6",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-6",
    },
    {
      id: 7,
      image: "/assets/images/product_7.png",
      altText: "Product 7",
      discount: 22,
      discountText: "OFF",
      category: "SKIN SERENITY",
      title: "Calendula Skin Soother",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.3,
      reviews: 145,
      description:
        "Our Calendula Skin Soother gently nourishes and calms sensitive skin, promoting a healthy glow.",
      detailsUrl: "/product/:product-details-7",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-7",
    },
    {
      id: 8,
      image: "/assets/images/product_8.png",
      altText: "Product 8",
      discount: 16,
      discountText: "OFF",
      category: "ORGANIC ESSENCE",
      title: "Peppermint Revitalizing Mist",
      price: 16.99,
      originalPrice: 19.99,
      rating: 4.4,
      reviews: 92,
      description:
        "Invigorate your skin with our Peppermint Revitalizing Mist, offering a refreshing boost on-the-go.",
      detailsUrl: "/product/:product-details-8",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-8",
    },
    {
      id: 9,
      image: "/assets/images/product_9.png",
      altText: "Product 9",

      category: "GLOWIFY BEAUTY",
      title: "Citrus Burst Toner",
      price: 13.99,
      originalPrice: 16.99,
      rating: 4.5,
      reviews: 167,
      description:
        "Our Citrus Burst Toner brightens and revitalizes your skin, leaving it refreshed and smooth.",
      detailsUrl: "/product/:product-details-9",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-9",
    },
    {
      id: 10,
      image: "/assets/images/product_10.png",
      altText: "Product 10",
      discount: 27,
      discountText: "OFF",
      category: "NATURE GLOW",
      title: "Herbal Essence Moisturizer",
      price: 20.49,
      originalPrice: 28.49,
      rating: 4.7,
      reviews: 190,
      description:
        "Nourish and hydrate your skin with our Herbal Essence Moisturizer, rich in natural botanicals.",
      detailsUrl: "/product/:product-details-10",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-10",
    },
    {
      id: 11,
      image: "/assets/images/product_11.png",
      altText: "Product 11",

      category: "SKIN SERENITY",
      title: "Tea Tree Blemish Control",
      price: 14.99,
      originalPrice: 18.49,
      rating: 4.6,
      reviews: 138,
      description:
        "Control blemishes and promote clear skin with our Tea Tree Blemish Control treatment.",
      detailsUrl: "/product/:product-details-11",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-11",
    },
    {
      id: 12,
      image: "/assets/images/product_12.png",
      altText: "Product 12",

      category: "ORGANIC ESSENCE",
      title: "Lemon Zest Cleanser",
      price: 10.99,
      originalPrice: 12.99,
      rating: 4.2,
      reviews: 115,
      description:
        "Our Lemon Zest Cleanser refreshes and brightens your skin with a burst of citrus goodness.",
      detailsUrl: "/product/:product-details-12",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-12",
    },
    {
      id: 13,
      image: "/assets/images/product_13.png",
      altText: "Product 13",

      category: "GLOWIFY BEAUTY",
      title: "Rosewater Glow Mist",
      price: 19.99,
      originalPrice: 25.99,
      rating: 4.5,
      reviews: 182,
      description:
        "Hydrate and brighten your skin with our Rosewater Glow Mist, perfect for an all-day glow.",
      detailsUrl: "/product/:product-details-14",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-13",
    },
    {
      id: 14,
      image: "/assets/images/product_2.png",
      altText: "Product 14",

      category: "NATURE GLOW",
      title: "Aloe Vera Healing Balm",
      price: 18.99,
      originalPrice: 23.99,
      rating: 4.8,
      reviews: 202,
      description:
        "Soothe and heal your skin with our Aloe Vera Healing Balm, ideal for irritated or sensitive skin.",
      detailsUrl: "/product/:product-details-14",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-14",
    },
    {
      id: 15,
      image: "/assets/images/product_15.png",
      altText: "Product 15",

      category: "SKIN SERENITY",
      title: "Green Tea Detox Spray",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.3,
      reviews: 154,
      description:
        "Detoxify and purify your skin with the natural benefits of green tea in our Green Tea Detox Spray.",
      detailsUrl: "/product/:product-details-15",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-15",
    },
    {
      id: 16,
      image: "/assets/images/product_16.png",
      altText: "Product 16",
      discount: 13,
      discountText: "OFF",
      category: "ORGANIC ESSENCE",
      title: "Coconut Hydration Gel",
      price: 11.99,
      originalPrice: 13.99,
      rating: 4.5,
      reviews: 108,
      description:
        "Replenish your skin's moisture with our Coconut Hydration Gel, providing long-lasting hydration.",
      detailsUrl: "/product/:product-details-17",
      categoryUrl: "/shop-v2",
      productPageUrl: "/product/:product-details-v2-16",
    },
  ],
};

const ListViewLeftSidebar = () => {
  PageTitle("ListView-Left-Sidebar");
  const [activeButton, setActiveButton] = useState("grid");
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
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_3.jpeg"
        title="Discover Our Beauty Collection"
        breadcrumbItems={breadcrumbData}
      />

      {/* End Breadcamp */}
      {/* Start All Products  */}
      <Spacing lg={70} md={80} />

      <div className="container">
        <div className="cs_products_with_sidebar">
          <Sidebar1 data={sidebarData} bgColor={true} />
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
              className={`cs_grid_1_column cs_products_list_view ${
                activeButton === "list" ? "active" : ""
              }`}
            >
              {allProductData.products.map((product, index) => (
                <div className="cs_grid_col" key={index}>
                  <ProductCard4 {...product} />
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

export default ListViewLeftSidebar;
