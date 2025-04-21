import { useEffect, useRef, useState } from "react";
import HeadingPath from "../../components/Heading/HeadingPath";
import Spacing from "../../components/Spacing";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaRegStar,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Button from "../../components/Buttons";
import ProductGrid from "../../components/ProductGrid";
import { PageTitle } from "../../Helper/PageTitle";
import Review from "../../components/Review";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Shop", url: "", active: false },
  { label: "Details", url: "", active: true },
];
const productDetailsData = {
  productImages: [
    { src: "/assets/images/details/product_details_7.png", alt: "Thumb 1" },
    { src: "/assets/images/details/product_details_8.png", alt: "Thumb 2" },
    { src: "/assets/images/details/product_details_6.png", alt: "Thumb 3" },
    { src: "/assets/images/details/product_details_5.png", alt: "Thumb 4" },
  ],
  socialMediaLinks: {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    whatsapp: "https://whatsapp.com/",
    messenger: "https://messenger.com/",
  },
  productData: {
    category: "GLOWIFY COLLECTION",
    title: "Silk Lash Extensions",
    rating: 5,
    ratingOutOf: 3,
    reviews: 143,
    sold: "2.3K",
    price: 19.99,
    discountPercentage: 10,
    discountedPrice: 18.99,
    description:
      "Achieve stunning lashes with our Silk Lash Extensions. These lightweight and luxurious lashes provide length, volume, and a natural-looking flutter. Enhance your eyes and make a lasting impression.",
    size: "90 ml",
    stock: 182,
    voucherTitle: "Voucher Promo",
    voucherDescription: "There are 3 promo codes for you",

    voucherData: [
      {
        discount: "5% off",

        code: "GLOW15",
        tooltip: "This voucher will apply only for first user",
      },
      {
        discount: "20% off",

        code: "BEAUTY20",
        tooltip: "Applicable only for the next 7 days",
      },
    ],
  },

  tabsData: {
    tab_1: {
      content: `Rejuvenate and refresh your skin with our Rosewater Hydrating Mist. Infused with the essence of roses, this luxurious mist provides a burst of hydration, soothing and revitalizing your skin. The delicate fragrance uplifts your senses, while the antioxidant-rich formula helps to tone and balance your complexion. Spritz it on for an instant pick-me-up throughout the day, leaving your skin feeling hydrated, radiant, and revitalized.`,
    },
    tab_2: {
      content: [
        {
          title: "Synthetic Silk Fibers",
          description:
            "Mimic the look and feel of natural lashes, providing a soft and lightweight texture.",
        },
        {
          title: "Latex-Free Adhesive",
          description:
            "Gentle and safe formula to ensure secure and long-lasting hold.",
        },
        {
          title: "Flexible Band",
          description:
            "Designed for comfort and easy application, offering a seamless blend with your natural lashes.",
        },
        {
          title: "Handcrafted Quality",
          description:
            "Each lash is carefully handcrafted to achieve a flawless and natural appearance.",
        },
      ],
    },
    tab_3: {
      content: [
        "Cleanse your face and pat dry.",
        "Apply an even layer of the Charcoal Detoxifying Mask to your face, avoiding the eye and lip areas.",
        "Leave the mask on for 10-15 minutes or until it's completely dry.",
        "Gently rinse off with warm water, massaging in circular motions for added exfoliation.",
        "Pat your skin dry and follow with your favorite moisturizer.",
        "For optimal results, use the mask 2-3 times per week.",
      ],
    },
  },
  reviewData: {
    title: "Reviews",
    averageRating: "4.5/5",
    totalReviews: 143,
    ratings: [
      { star: 5, count: 50, progress: 40 },
      { star: 4, count: 83, progress: 70 },
      { star: 3, count: 10, progress: 20 },
      { star: 2, count: 20, progress: 13 },
      { star: 1, count: 44, progress: 4 },
    ],
  },
  sortOptions: [
    { value: 1, label: "Sort by Newest Rating" },
    { value: 2, label: "Sort by Highest Rating" },
    { value: 3, label: "Sort by Lowest Rating" },
  ],
  reviews: [
    {
      id: 1,
      name: "Emma Beauty",
      avatar: "/assets/images/avatar_4.png",
      rating: 4.5,
      date: "March 23, 2024",
      text: "I absolutely adore the Rosewater Hydrating Mist! It's become an essential part of my skincare routine. The mist is so refreshing and leaves my skin feeling instantly hydrated. The subtle rose scent is divine, and it's a wonderful pick-me-up throughout the day. Highly recommend!",
    },
    {
      id: 2,
      name: "Mark",
      avatar: "/assets/images/avatar_5.png",
      rating: 4.5,
      date: "March 10, 2024",
      text: "I've tried numerous facial mists, but the Glowify Rosewater Hydrating Mist is on another level. It's incredibly soothing and gives my skin an instant boost of hydration. I love how it leaves my face feeling rejuvenated and refreshed. It's become a must-have for me, especially during the hot summer months.",
    },
    {
      id: 3,
      name: "Sarah Cutie",
      avatar: "/assets/images/avatar_6.png",
      rating: 5,
      date: "February 24, 2023",
      text: "I have sensitive skin, and finding a mist that doesn't irritate my skin has been a challenge. But the Glowify Rosewater Hydrating Mist is a game-changer! It's so gentle and calming, and it never causes any redness or irritation. I use it as a toner and throughout the day to keep my skin hydrated. It's a holy grail product for me!",
    },
  ],
  RelatedProductsData: [
    {
      id: 1,
      image: "/assets/images/product_12.png",
      category: "GLOWIFY BEAUTY",
      title: "Rosewater Hydrating Mist",
      price: "$19.99",
      rating: 4.5,
      reviews: 143,
      ratingCount: "4.5/5",

      link: "/product/:product-details",
      categoryUrl: "/shop",
    },
    {
      id: 2,
      image: "/assets/images/product_13.png",
      category: "GLOWIFY BEAUTY",
      title: "Vitamin C Serum",
      price: "$24.99",
      rating: 2.8,
      reviews: 200,
      ratingCount: "2.8/5",
      link: "/product/:product-details",
      categoryUrl: "/shop",
    },
    {
      id: 3,
      image: "/assets/images/product_14.png",
      category: "NATURAL BLISS",
      title: "Lavender Body Lotion",
      price: "$15.50",
      rating: 3.7,
      reviews: 95,
      ratingCount: "3.7/5",
      link: "/product/:product-details",
      categoryUrl: "/shop",
    },
    {
      id: 4,
      image: "/assets/images/product_15.png",
      category: "BEAUTY ESSENTIALS",
      title: "Coconut Hair Mask",
      price: "$22.99",
      rating: 4.4,
      reviews: 180,
      ratingCount: "4.4/5",
      link: "/product/:product-details",
      categoryUrl: "/shop",
    },
    {
      id: 5,
      image: "/assets/images/product_16.png",
      category: "PURE BEAUTY",
      title: "Green Tea Face Wash",
      price: "$13.99",
      rating: 3.6,
      reviews: 220,
      ratingCount: "3.6/5",
      link: "/product/:product-details",
      categoryUrl: "/shop",
    },
  ],
};
const ProductDetailsV2 = () => {
  PageTitle("Product-details-V2");
  const [quantity, setQuantity] = useState(1);
  const [activeFavo, setActivefavo] = useState(false);
  const [activeTab, setActiveTab] = useState("tab_1");

  // Slider refs
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleNext = () => {
    sliderRef1.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef1.current?.slickPrev();
  };

  // Slider settings
  const mainSliderSettings = {
    asNavFor: nav2,
    ref: sliderRef1,
    arrows: false,
    fade: true,
  };

  const navSliderSettings = {
    asNavFor: nav1,
    ref: sliderRef2,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <>
      {/* Start Product Details */}
      <div className="container">
        <Spacing lg={45} md={45} />
        <ol className="breadcrumb cs_fs_18 mb-0">
          {breadcrumbData.map((item, index) => (
            <HeadingPath
              key={index}
              active={item.active}
              label={item.label}
              url={item.url}
            />
          ))}
        </ol>
        <Spacing lg={45} md={45} />
        <div className="row cs_gap_y_30">
          <div className="col-lg-6">
            <div className="cs_single_product_slider_1 cs_type_1">
              <div className="cs_single_product_thumb">
                <Slider {...mainSliderSettings}>
                  {productDetailsData.productImages.map((image, index) => (
                    <div key={index} className="cs_single_product_thumb_item">
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </Slider>
              </div>
              <Spacing lg={30} md={30} />
              <div className="position-relative">
                <div className="cs_single_product_nav">
                  <Slider {...navSliderSettings}>
                    {productDetailsData.productImages.map((image, index) => (
                      <div key={index} className="cs_single_product_thumb_mini">
                        <img src={image.src} alt={image.alt} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="cs_single_left_arrow" onClick={handlePrev}>
                  <svg
                    width={17}
                    height={32}
                    viewBox="0 0 17 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15.5833C0 15.221 0.138477 14.8584 0.415081 14.5818L14.5817 0.41517C15.1352 -0.13839 16.0316 -0.13839 16.5848 0.41517C17.138 0.968729 17.1384 1.86512 16.5848 2.41833L3.41982 15.5833L16.5848 28.7484C17.1384 29.3019 17.1384 30.1983 16.5848 30.7515C16.0313 31.3047 15.1349 31.3051 14.5817 30.7515L0.415081 16.5849C0.138477 16.3083 0 15.9457 0 15.5833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="cs_single_right_arrow" onClick={handleNext}>
                  <svg
                    width={17}
                    height={32}
                    viewBox="0 0 17 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 15.5833C17 15.221 16.8615 14.8584 16.5849 14.5818L2.41833 0.41517C1.86477 -0.13839 0.968375 -0.13839 0.41517 0.41517C-0.138036 0.968729 -0.13839 1.86512 0.41517 2.41833L13.5802 15.5833L0.41517 28.7484C-0.13839 29.3019 -0.13839 30.1983 0.41517 30.7515C0.968729 31.3047 1.86512 31.3051 2.41833 30.7515L16.5849 16.5849C16.8615 16.3083 17 15.9457 17 15.5833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cs_share_links_wrap">
              <Spacing lg={25} md={25} />
              <p className="cs_light cs_primary_color">Share</p>
              <div className="cs_share_links">
                <Link
                  to={productDetailsData.socialMediaLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaXTwitter />
                  </i>
                </Link>
                <Link
                  to={productDetailsData.socialMediaLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link
                  to={productDetailsData.socialMediaLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaWhatsapp />
                  </i>
                </Link>
                <Link
                  to={productDetailsData.socialMediaLinks.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaFacebookMessenger />
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_details cs_style_1">
              <p className="cs_product_category cs_fs_14 cs_light">
                {productDetailsData.productData.category}
              </p>
              <h2 className="cs_product_title cs_fs_36 cs_medium mb-0 cs_secondary_font">
                {productDetailsData.productData.title}
              </h2>
              <Spacing lg={16} md={16} />
              <p className="cs_product_price cs_fs_54 cs_semibold cs_accent_color mb-0">
                ${productDetailsData.productData.price}{" "}
                <small className="cs_fs_18">
                  ${productDetailsData.productData.discountedPrice}
                </small>
              </p>
              <Spacing lg={25} md={25} />
              <ul className="cs_details_list_1 cs_mp_0">
                <li>
                  <div className="cs_product_ratings">
                    <Review
                      reviewNumber={productDetailsData.productData.rating}
                    />
                    <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                      <span>
                        ({productDetailsData.productData.ratingOutOf}/5){" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li className=" cs_ternary_color cs_fs_14 cs_light">
                  {productDetailsData.productData.reviews} Reviews
                </li>
              </ul>
              <Spacing lg={30} md={32} />
              <hr />
              <Spacing lg={30} md={34} />
              <p className="cs_light mb-0">
                {productDetailsData.productData.description}
              </p>
              <Spacing lg={30} md={30} />
              <ul className="cs_details_list_2 cs_mp_0 cs_light">
                <li>
                  <span className="cs_semibold cs_primary_color">Size:</span>{" "}
                  {productDetailsData.productData.size}
                </li>
                <li>
                  <span className="cs_semibold cs_primary_color">Stock:</span>{" "}
                  {productDetailsData.productData.stock}
                </li>
              </ul>
              <Spacing lg={40} md={40} />
              <div className="cs_voucher_card_2">
                <div className="cs_voucher_heading_1">
                  <div className="cs_voucher_heading_right">
                    <h4 className="cs_secondary_font cs_fs_16 cs_semibold mb-0">
                      {productDetailsData.productData.voucherTitle}
                    </h4>
                    <p className=" cs_fs_14 cs_light">
                      {productDetailsData.productData.voucherDescription}
                    </p>
                  </div>
                </div>
                <Spacing lg={15} md={15} />
                <ul className="cs_mp_0">
                  {productDetailsData.productData.voucherData.map(
                    (item, index) => (
                      <li key={index}>
                        <span className="cs_voucher_code cs_fs_18 cs_accent_color">
                          {item.code}
                        </span>
                        <p className="mb-0 cs_light cs_fs_14">
                          ({item.discount}% off for your entire purchase)
                        </p>
                        <button className="cs_voucher_btn cs_ternary_color">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.8906 18H6.32812C5.16489 18 4.21875 17.0539 4.21875 15.8906V6.32812C4.21875 5.16489 5.16489 4.21875 6.32812 4.21875H15.8906C17.0539 4.21875 18 5.16489 18 6.32812V15.8906C18 17.0539 17.0539 18 15.8906 18ZM6.32812 5.625C5.94042 5.625 5.625 5.94042 5.625 6.32812V15.8906C5.625 16.2783 5.94042 16.5938 6.32812 16.5938H15.8906C16.2783 16.5938 16.5938 16.2783 16.5938 15.8906V6.32812C16.5938 5.94042 16.2783 5.625 15.8906 5.625H6.32812ZM2.8125 12.375H2.10938C1.72167 12.375 1.40625 12.0596 1.40625 11.6719V2.10938C1.40625 1.72167 1.72167 1.40625 2.10938 1.40625H11.6719C12.0596 1.40625 12.375 1.72167 12.375 2.10938V2.77734H13.7812V2.10938C13.7812 0.946143 12.8351 0 11.6719 0H2.10938C0.946143 0 0 0.946143 0 2.10938V11.6719C0 12.8351 0.946143 13.7812 2.10938 13.7812H2.8125V12.375Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <Spacing lg={40} md={40} />
              <div className="cs_quantity_wrap">
                <div className="cs_light">QUANTITY</div>
                <div>
                  <div className="cs_quantity cs_style_1">
                    <button
                      className="cs_quantity_button cs_decrement"
                      onClick={decrementQuantity}
                    >
                      <svg
                        width={12}
                        height={2}
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.580007 1.18555C0.425021 1.18215 0.277528 1.11823 0.169117 1.00742C0.0607065 0.896604 0 0.74771 0 0.592687C0 0.437664 0.0607065 0.288839 0.169117 0.178028C0.277528 0.0672157 0.425021 0.00322354 0.580007 -0.000172257H11.249C11.404 0.00322354 11.5515 0.0672157 11.6599 0.178028C11.7683 0.288839 11.829 0.437664 11.829 0.592687C11.829 0.74771 11.7683 0.896604 11.6599 1.00742C11.5515 1.11823 11.404 1.18215 11.249 1.18555H0.580007Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <span className="cs_quantity_input cs_primary_color cs_medium">
                      {quantity}
                    </span>
                    <button
                      className="cs_quantity_button cs_increment"
                      onClick={incrementQuantity}
                    >
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4141 6.91406H8.08594V0.585938C8.08594 0.262324 7.82361 0 7.5 0C7.17639 0 6.91406 0.262324 6.91406 0.585938V6.91406H0.585938C0.262324 6.91406 0 7.17639 0 7.5C0 7.82361 0.262324 8.08594 0.585938 8.08594H6.91406V14.4141C6.91406 14.7377 7.17639 15 7.5 15C7.82361 15 8.08594 14.7377 8.08594 14.4141V8.08594H14.4141C14.7377 8.08594 15 7.82361 15 7.5C15 7.17639 14.7377 6.91406 14.4141 6.91406Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Spacing lg={40} md={40} />
              <div className="cs_btn_group_1">
                <button className="cs_btn cs_style_2 cs_fs_18 cs_medium">
                  <svg
                    width={15}
                    height={19}
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4994 10.15C6.62507 10.151 5.77741 9.86171 5.10077 9.33137C4.42412 8.80103 3.96034 8.06245 3.78838 7.24139C3.77468 7.15491 3.78077 7.0666 3.80623 6.98259C3.8317 6.89858 3.87593 6.82088 3.93586 6.75487C3.99579 6.68886 4.06999 6.63611 4.15332 6.60029C4.23665 6.56448 4.32711 6.54644 4.41844 6.54743C4.56854 6.54534 4.71448 6.59464 4.82999 6.68647C4.9455 6.77829 5.02299 6.9066 5.04849 7.04829C5.16715 7.59074 5.4771 8.07756 5.92627 8.42698C6.37545 8.77639 6.93649 8.96712 7.51515 8.96712C8.09381 8.96712 8.65485 8.77639 9.10403 8.42698C9.5532 8.07756 9.86315 7.59074 9.98181 7.04829C10.0073 6.9066 10.0848 6.77829 10.2003 6.68647C10.3158 6.59464 10.4618 6.54534 10.6119 6.54743C10.7032 6.54644 10.7937 6.56448 10.877 6.60029C10.9603 6.63611 11.0345 6.68886 11.0944 6.75487C11.1544 6.82088 11.1986 6.89858 11.2241 6.98259C11.2495 7.0666 11.2556 7.15491 11.2419 7.24139C11.0689 8.06756 10.6005 8.81007 9.91737 9.341C9.23422 9.87193 8.37912 10.158 7.4994 10.15Z"
                      fill="#E61F7F"
                    />
                    <path
                      d="M13.1075 18.1033H1.89252C1.63615 18.1037 1.38239 18.054 1.14668 17.9574C0.910966 17.8608 0.698235 17.7193 0.521424 17.5415C0.344612 17.3637 0.207417 17.1533 0.118184 16.9231C0.0289511 16.6929 -0.0104547 16.4477 0.00236435 16.2025L0.512708 5.79904C0.533829 5.33263 0.742257 4.89207 1.09447 4.56935C1.44668 4.24663 1.91544 4.0667 2.40287 4.06714H12.5971C13.0846 4.0667 13.5533 4.24663 13.9055 4.56935C14.2577 4.89207 14.4662 5.33263 14.4873 5.79904L14.9976 16.2025C15.0105 16.4477 14.9711 16.6929 14.8818 16.9231C14.7926 17.1533 14.6554 17.3637 14.4786 17.5415C14.3018 17.7193 14.089 17.8608 13.8533 17.9574C13.6176 18.054 13.3639 18.1037 13.1075 18.1033ZM2.40287 5.28007C2.23577 5.28007 2.07551 5.34365 1.95735 5.45682C1.8392 5.56999 1.77281 5.72347 1.77281 5.88352L1.26247 16.2628C1.2582 16.3446 1.27133 16.4263 1.30108 16.503C1.33082 16.5798 1.37655 16.6499 1.43549 16.7092C1.49443 16.7684 1.56534 16.8156 1.64391 16.8478C1.72248 16.88 1.80707 16.8966 1.89252 16.8964H13.1075C13.1929 16.8966 13.2775 16.88 13.3561 16.8478C13.4347 16.8156 13.5056 16.7684 13.5645 16.7092C13.6234 16.6499 13.6692 16.5798 13.6989 16.503C13.7287 16.4263 13.7418 16.3446 13.7375 16.2628L13.2272 5.85938C13.2272 5.69934 13.1608 5.54585 13.0426 5.43268C12.9245 5.31951 12.7642 5.25593 12.5971 5.25593L2.40287 5.28007Z"
                      fill="#E61F7F"
                    />
                    <path
                      d="M11.2794 4.67672H10.0193V3.62069C10.0193 2.98051 9.75376 2.36655 9.28113 1.91388C8.8085 1.46121 8.16747 1.2069 7.49907 1.2069C6.83067 1.2069 6.18964 1.46121 5.71701 1.91388C5.24438 2.36655 4.97886 2.98051 4.97886 3.62069V4.67672H3.71875V3.62069C3.71875 2.66042 4.11703 1.73949 4.82598 1.06048C5.53493 0.381464 6.49647 0 7.49907 0C8.50167 0 9.46321 0.381464 10.1722 1.06048C10.8811 1.73949 11.2794 2.66042 11.2794 3.62069V4.67672Z"
                      fill="#E61F7F"
                    />
                  </svg>
                  ADD TO BAG
                </button>
                <Button
                  btnText={"BUY NOW"}
                  variant={"cs_btn cs_style_1 cs_fs_18 cs_medium"}
                  btnUrl="/cart"
                />
                <button
                  className={`cs_like_btn cs_center cs_accent_color ${
                    activeFavo ? "active" : ""
                  }`}
                  onClick={() => setActivefavo(!activeFavo)}
                >
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width={21}
                    height={19}
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4135 18.6287C10.1288 18.6287 9.85431 18.5255 9.64038 18.3381C8.83243 17.6317 8.05347 16.9677 7.36621 16.3821L7.3627 16.3791C5.34778 14.662 3.60782 13.1791 2.39719 11.7184C1.04388 10.0854 0.413544 8.53711 0.413544 6.84567C0.413544 5.2023 0.977051 3.68619 2.00015 2.57642C3.03546 1.45352 4.45605 0.835083 6.0007 0.835083C7.15518 0.835083 8.21246 1.20007 9.1431 1.91983C9.61276 2.28314 10.0385 2.72778 10.4135 3.24643C10.7888 2.72778 11.2143 2.28314 11.6841 1.91983C12.6148 1.20007 13.6721 0.835083 14.8265 0.835083C16.371 0.835083 17.7918 1.45352 18.8271 2.57642C19.8502 3.68619 20.4135 5.2023 20.4135 6.84567C20.4135 8.53711 19.7834 10.0854 18.4301 11.7183C17.2194 13.1791 15.4796 14.6618 13.465 16.3788C12.7765 16.9653 11.9963 17.6303 11.1866 18.3384C10.9728 18.5255 10.6981 18.6287 10.4135 18.6287ZM6.0007 6.84567C4.78717 6.84567 7.311 5.62048 6.5 6.5C5.67694 7.39279 13.465 3.42343 13.465 4.7717C13.465 6.19427 17.6416 7.48105 18.8271 8.91141C19.9729 10.294 12.8533 11.9751 14.8265 13.6568L13.465 14.8386C14.1548 15.4266 11.8651 14.8386 11.0488 15.5495C11.8676 14.8365 9.80878 16.5888 10.5 16C12.4731 14.3183 12.3192 15.0394 13.465 13.6568C14.6503 12.2264 15.5 8.92258 15.5 7.5C15.5 6.15173 14.2881 7.73846 13.465 6.84567C12.6541 5.96616 12.2621 4.41083 11.0488 4.41083C10.1598 4.41083 13.1214 2.28925 12.4007 2.8465C11.7585 3.34332 11.3111 3.97137 11.0488 4.41083C11.3117 4.41083 10.9139 4.63681 11.0488 4.41083C10.7859 4.41083 9.91321 4.63681 9.77832 4.41083C9.51617 3.97137 12.3265 4.49683 11.6841 4C13.6696 7.99918 6.88953 6.84567 6.0007 6.84567Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Spacing lg={50} md={80} />
        <div className="cs_tabs cs_type_1 cs_gray_bg">
          <ul className="cs_tab_links cs_style_1 cs_mp_0 cs_fs_24 cs_medium">
            <li className={activeTab === "tab_1" ? "active" : ""}>
              <Link to="#tab_1" onClick={() => setActiveTab("tab_1")}>
                Description
              </Link>
            </li>
            <li className={activeTab === "tab_2" ? "active" : ""}>
              <Link to="#tab_2" onClick={() => setActiveTab("tab_2")}>
                Ingredients
              </Link>
            </li>
            <li className={activeTab === "tab_3" ? "active" : ""}>
              <Link to="#tab_3" onClick={() => setActiveTab("tab_3")}>
                How to Use
              </Link>
            </li>
          </ul>
          <div className="cs_tab_body cs_light">
            <div
              className={`cs_tab ${activeTab === "tab_1" ? "active" : ""}`}
              id="tab_1"
            >
              <p>{productDetailsData.tabsData.tab_1.content}</p>
            </div>
            <div
              className={`cs_tab ${activeTab === "tab_2" ? "active" : ""}`}
              id="tab_2"
            >
              <ul className="cs_product_desc_list cs_light cs_mp_0">
                {productDetailsData.tabsData.tab_2.content.map(
                  (item, index) => (
                    <li key={index}>
                      <b>{item.title}:</b> {item.description}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div
              className={`cs_tab ${activeTab === "tab_3" ? "active" : ""}`}
              id="tab_3"
            >
              <ul className="cs_product_desc_list cs_light cs_mp_0">
                {productDetailsData.tabsData.tab_3.content.map(
                  (step, index) => (
                    <li key={index}>{step}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <Spacing lg={50} md={60} />
      </div>
      {/* End Product Details */}
      {/* Start Product Reviews */}
      <div className="container">
        <div className="cs_sort_by_wrap">
          <div className="cs_sort_by_title">
            <svg
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.92567 15.9999C6.75865 15.9999 6.59848 15.9338 6.48038 15.8161C6.36228 15.6984 6.29594 15.5388 6.29594 15.3724V9.33949L0.458315 2.94262C0.228517 2.69031 0.0771612 2.37696 0.0226168 2.04061C-0.0319275 1.70426 0.0126849 1.35936 0.151039 1.04778C0.289394 0.7362 0.515542 0.471329 0.802037 0.285317C1.08853 0.0993038 1.42306 0.000146235 1.76501 -0.00012207H15.235C15.5769 0.000146235 15.9115 0.0993038 16.198 0.285317C16.4845 0.471329 16.7106 0.7362 16.849 1.04778C16.9873 1.35936 17.0319 1.70426 16.9774 2.04061C16.9228 2.37696 16.7715 2.69031 16.5417 2.94262L10.7041 9.33949V12.8626C10.704 12.9566 10.6828 13.0494 10.6419 13.1341C10.601 13.2188 10.5416 13.2933 10.4679 13.352L7.31925 15.8618C7.20761 15.9511 7.06879 15.9998 6.92567 15.9999ZM1.76501 1.25478C1.66702 1.25502 1.5712 1.28356 1.48914 1.33694C1.40709 1.39031 1.34232 1.46624 1.30268 1.55553C1.26304 1.64482 1.25021 1.74365 1.26577 1.84005C1.28132 1.93645 1.32458 2.02629 1.39032 2.0987L7.39167 8.68694C7.49449 8.7996 7.55268 8.94567 7.5554 9.09792V14.0673L9.4446 12.5489V9.09792C9.44422 8.94133 9.50262 8.79026 9.60833 8.67439L15.6097 2.08615C15.6715 2.01342 15.7114 1.92474 15.7248 1.83036C15.7382 1.73599 15.7245 1.63977 15.6853 1.55282C15.6461 1.46587 15.583 1.39175 15.5033 1.33901C15.4237 1.28627 15.3306 1.25707 15.235 1.25478H1.76501Z"
                fill="#636363"
              />
            </svg>
            Sort by
          </div>
          <select>
            {productDetailsData.sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>{" "}
        <Spacing lg={40} md={50} />
        <div className="cs_product_reviews_wrap_1">
          <div className="cs_review_card_wrap_1">
            <div className="cs_review_card_2">
              <h3 className="cs_secondary_font cs_medium cs_fs_24 mb-0">
                Reviews
              </h3>
              <Spacing lg={10} md={10} />
              <p className="cs_fs_70 cs_medium cs_primary_color mb-0">
                {" "}
                {productDetailsData.reviewData.averageRating}
              </p>
              <Spacing lg={24} md={24} />
              <div className="cs_averate_rating_wrap_1">
                <div className="cs_rating" data-rating="4.5">
                  <Review
                    reviewNumber={parseFloat(
                      productDetailsData.reviewData.averageRating
                    )}
                  />
                </div>
                <div className="cs_rating_number cs_ternary_color cs_fs_18">
                  <span className="cs_fs_18 cs_primary_color">
                    {productDetailsData.reviewData.totalReviews}
                  </span>{" "}
                  <span className="cs_fs_14 cs_ternary_color cs_light">
                    Reviews
                  </span>
                </div>
              </div>
              <Spacing lg={50} md={80} />
              <ul className="cs_review_list cs_light cs_primary_color cs_mp_0">
                {productDetailsData.reviewData.ratings.map((rating, index) => (
                  <li key={index}>
                    <span>{rating.star}</span>

                    <i>
                      <FaRegStar />
                    </i>
                    <div className="cs_progress">
                      <div
                        className="cs_progress_in"
                        style={{ width: `${rating.progress}%` }}
                      />
                    </div>
                    <span>{rating.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cs_product_reviews_wrap_1_right">
            <ul className="cs_product_review_list cs_mp_0">
              {productDetailsData.reviews.map((review) => (
                <li key={review.id}>
                  <div className="cs_product_review cs_light">
                    <div className="cs_product_review_info">
                      <div className="cs_product_review_media">
                        <img src={review.avatar} alt="Avatar" />
                        <div className="cs_product_review_media_right">
                          <h3 className="cs_secondary_font cs_fs_16 cs_medium">
                            {review.name}
                          </h3>
                          <div className="cs_product_ratings">
                            <Review reviewNumber={review.rating} />

                            <div className="cs_rating_number cs_ternary_color cs_fs_14">
                              <span>({review.rating}/5)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cs_product_review_date cs_fs_14">
                        {review.date}
                      </div>
                    </div>
                    <div className="cs_product_review_text">{review.text}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <Spacing lg={40} md={40} />
              <button
                type="button"
                className="cs_btn cs_style_1 cs_fs_16 cs_medium cs_size_md"
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Reviews */}
      {/* Start Related Products */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <h2 className="cs_fs_36 cs_medium cs_secondary_font">
          Related Products
        </h2>

        <ProductGrid data={productDetailsData.RelatedProductsData} />
      </div>{" "}
      <Spacing lg={70} md={120} />
      {/* End Related Products */}
    </>
  );
};

export default ProductDetailsV2;
