import BreadCamp from "../../../components/BreadCamp";
import Spacing from "../../../components/Spacing";
import { Link } from "react-router-dom";
import Review from "../../../components/Review";
import { PageTitle } from "../../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Wishlist", url: "wishlist", active: true },
];

const products = [
  {
    image: "/assets/images/product_6.png",
    title: "Matte Lipstick",
    category: "MAKEUP",
    price: "$19.99",
    rating: 3.5,
    sold: 122,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
  {
    image: "/assets/images/product_7.png",
    title: "Hydrating Face Mist",
    category: "SKINCARE",
    price: "$25.99",
    rating: 2.8,
    sold: 240,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
  {
    image: "/assets/images/product_8.png",
    title: "Liquid Eyeliner",
    category: "MAKEUP",
    price: "$12.99",
    rating: 3.2,
    sold: 310,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
  {
    image: "/assets/images/product_9.png",
    title: "Moisturizing Lotion",
    category: "SKINCARE",
    price: "$29.99",
    rating: 3.9,
    sold: 400,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
  {
    image: "/assets/images/product_10.png",
    title: "Waterproof Mascara",
    category: "MAKEUP",
    price: "$15.99",
    rating: 2.7,
    sold: 450,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
  {
    image: "/assets/images/product_11.png",
    title: "Dewy Finish Foundation",
    category: "MAKEUP",
    price: "$39.99",
    rating: 2.3,
    sold: 369,
    shopLink: "/shop",
    detailsLink: "/product/:product-details",
  },
];

const Wishlist = () => {
  PageTitle("Wishlist");
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_9.jpeg"
        title="Your Glowify Wish List"
        breadcrumbItems={breadcrumbData}
        type={true}
      />

      {/* End Breadcamp */}
      <Spacing lg={70} md={110} />
      <div className="container">
        <h2 className="cs_fs_36 cs_medium mb-0">
          MY WISHLIST{" "}
          <span className="cs_accent_color">({products.length})</span>
        </h2>
        <Spacing lg={40} md={50} />
        <div className="cs_grid_5_column">
          {products.map((product, index) => (
            <div className="cs_grid_col" key={index}>
              <div className="cs_product_card cs_style_1 cs_radius_12">
                <div className="cs_product_card_in">
                  <div className="cs_product_thumb cs_center">
                    <img src={product.image} alt={product.title} />
                    <div className="cs_products_btns cs_plr_25">
                      <button className="cs_btn cs_style_1 cs_medium cs_size_md w-100">
                        <img
                          src="/assets/images/icons/cart_white.svg"
                          alt="cart icon"
                        />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                  <div className="cs_product_info">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to={product.shopLink}>{product.category}</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      {product.title}
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      {product.price}
                    </p>
                    <div className="cs_product_ratings">
                      <div className="cs_rating">
                        <Review reviewNumber={product.rating} />
                        <div
                          className="cs_rating_percentage"
                          style={{ width: `${(product.rating / 5) * 100}%` }}
                        />
                      </div>
                      <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                        <span>({product.rating}/5)</span>
                        <span> | {product.sold} Sold</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={product.detailsLink} className="cs_product_link" />
              </div>
              <button className="cs_card_remove_btn w-100">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.714286 3.99996H2.14286V17.6533C2.14474 18.2751 2.41024 18.871 2.88136 19.3107C3.35247 19.7504 3.99089 19.9982 4.65714 20H15.3714C16.0327 19.9912 16.6638 19.7403 17.1288 19.3014C17.5938 18.8624 17.8553 18.2705 17.8571 17.6533V3.99996H19.2857C19.4752 3.99996 19.6568 3.92972 19.7908 3.8047C19.9247 3.67967 20 3.5101 20 3.33329C20 3.15648 19.9247 2.98691 19.7908 2.86189C19.6568 2.73686 19.4752 2.66663 19.2857 2.66663H0.714286C0.524845 2.66663 0.343164 2.73686 0.209209 2.86189C0.0752549 2.98691 0 3.15648 0 3.33329C0 3.5101 0.0752549 3.67967 0.209209 3.8047C0.343164 3.92972 0.524845 3.99996 0.714286 3.99996ZM16.4286 3.99996V17.6533C16.4286 17.922 16.3142 18.1798 16.1106 18.3698C15.907 18.5599 15.6308 18.6666 15.3429 18.6666H4.62857C4.3456 18.6597 4.07673 18.5499 3.87926 18.3606C3.68179 18.1713 3.57133 17.9175 3.57143 17.6533V3.99996H16.4286Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.14397 1.33333H12.8583C13.0477 1.33333 13.2294 1.2631 13.3633 1.13807C13.4973 1.01305 13.5725 0.843478 13.5725 0.666667C13.5725 0.489856 13.4973 0.320286 13.3633 0.195262C13.2294 0.0702379 13.0477 0 12.8583 0H7.14397C6.95453 0 6.77285 0.0702379 6.6389 0.195262C6.50494 0.320286 6.42969 0.489856 6.42969 0.666667C6.42969 0.843478 6.50494 1.01305 6.6389 1.13807C6.77285 1.2631 6.95453 1.33333 7.14397 1.33333Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.62835 16C7.81779 16 7.99947 15.9297 8.13342 15.8047C8.26738 15.6797 8.34263 15.5101 8.34263 15.3333V7.33329C8.34263 7.15648 8.26738 6.98691 8.13342 6.86189C7.99947 6.73686 7.81779 6.66663 7.62835 6.66663C7.43891 6.66663 7.25723 6.73686 7.12327 6.86189C6.98932 6.98691 6.91406 7.15648 6.91406 7.33329V15.3333C6.91406 15.5101 6.98932 15.6797 7.12327 15.8047C7.25723 15.9297 7.43891 16 7.62835 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.3705 16C12.56 16 12.7417 15.9297 12.8756 15.8047C13.0096 15.6797 13.0848 15.5101 13.0848 15.3333V7.33329C13.0848 7.15648 13.0096 6.98691 12.8756 6.86189C12.7417 6.73686 12.56 6.66663 12.3705 6.66663C12.1811 6.66663 11.9994 6.73686 11.8655 6.86189C11.7315 6.98691 11.6562 7.15648 11.6562 7.33329V15.3333C11.6562 15.5101 11.7315 15.6797 11.8655 15.8047C11.9994 15.9297 12.1811 16 12.3705 16Z"
                    fill="currentColor"
                  />
                </svg>
                REMOVE
              </button>
            </div>
          ))}
        </div>
      </div>
      <Spacing lg={70} md={120} />
    </>
  );
};

export default Wishlist;
