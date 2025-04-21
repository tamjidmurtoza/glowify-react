import { useEffect, useRef, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Button from "../Buttons";
import Spacing from "../Spacing";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Review from "../Review";

const StoreSection = ({ data }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isButtonActive1, setIsButtonActive1] = useState(false);
  const [quantity, setQuantity] = useState(data.productInfo.productQuantity);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  // Step 1: Set up state for quantity

  // Step 2: Create increment and decrement functions
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); // Ensure quantity doesn't go below 0
  };

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleNext = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_in">
            <SectionHeading
              title={"NEW IN STORE"}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
          </div>
          <div className="cs_section_heading_right">
            <Button
              btnText={"View All"}
              variant={"cs_text_btn cs_accent_color cs_medium cs_fs_24"}
              btnUrl="shop"
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />
        <div className="row cs_gap_y_40">
          <div className="col-xxl-7">
            <div className="row cs_row_gap_10 cs_new_item_list">
              {data.products.map((product) => (
                <div className="col-lg-4 col-sm-6" key={product.id}>
                  <div className="cs_product_card cs_style_1 cs_radius_12">
                    <div className="cs_product_card_in">
                      <div className="cs_product_thumb cs_center">
                        <img src={product.image} alt={product.title} />
                        <div className="cs_products_btns">
                          <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                            <img
                              src="/assets/images/icons/cart_white.svg"
                              alt="Cart"
                            />
                            <span>Add To Bag</span>
                          </button>
                          <button
                            className={`cs_like_btn cs_center cs_accent_color ${
                              isButtonActive ? "active" : ""
                            }`}
                            onClick={() => setIsButtonActive(!isButtonActive)}
                          >
                            <svg
                              width="20"
                              height="18"
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
                              width="21"
                              height="19"
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
                      <div className="cs_product_info">
                        <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                          <Link to={product.url}>{product.category}</Link>
                        </div>
                        <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                          {product.title}
                        </h2>
                        <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                          {product.price}
                        </p>
                        <div className="cs_product_ratings">
                          <Review reviewNumber={product.rating} />
                          <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                            <span>({product.rating}/5)</span>
                            <span> | {product.sold} Sold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to={product.url} className="cs_product_link" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xxl-5">
            <div className="cs_product_card cs_style_2 cs_radius_20">
              <div className="cs_single_product_slider_1">
                <div className="cs_single_product_thumb">
                  <Slider asNavFor={nav2} ref={sliderRef1}>
                    {data.thumbnailsData.map((thumb, index) => (
                      <div className="cs_single_product_thumb_item" key={index}>
                        <img src={thumb.imageUrl} alt={`Thumb ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="position-relative">
                  <div className="cs_single_product_nav">
                    <Slider
                      asNavFor={nav1}
                      ref={sliderRef2}
                      slidesToShow={3}
                      swipeToSlide={true}
                      focusOnSelect={true}
                    >
                      {data.navThumbnailsData.map((thumb, index) => (
                        <div
                          className="cs_single_product_thumb_mini"
                          key={index}
                        >
                          <img
                            src={thumb.imageUrl}
                            alt={`Thumb ${index + 1}`}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div
                    className="cs_single_left_arrow"
                    onClick={handlePrev}
                    style={{ cursor: "pointer" }}
                  >
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
                  <div
                    className="cs_single_right_arrow"
                    onClick={handleNext}
                    style={{ cursor: "pointer" }}
                  >
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
              <div className="cs_product_info">
                <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                  <Link to={data.productInfo.categoryLink}>
                    {data.productInfo.productCategory}
                  </Link>
                </div>
                <div className="cs_product_row_1">
                  <div>
                    <h2 className="cs_product_title cs_fs_24 cs_normal cs_secondary_font">
                      <Link to={data.productInfo.productLink}>
                        {data.productInfo.productName}
                      </Link>
                    </h2>
                    <div className="cs_product_ratings">
                      <Review reviewNumber={data.productInfo.rating} />

                      <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                        <span>({data.productInfo.rating})</span>
                        <span>| {data.productInfo.sold} Sold</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="cs_product_price cs_fs_36 cs_primary_color cs_medium">
                      ${data.productInfo.price}
                    </p>
                  </div>
                </div>
                <div className="cs_product_row_2">
                  <div className="cs_light">QUANTITY</div>
                  <div>
                    <div className="cs_quantity cs_style_1">
                      <button
                        className="cs_quantity_button cs_decrement"
                        onClick={decrement}
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
                        onClick={increment}
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
                <div className="cs_products_btns">
                  <button className="cs_btn cs_style_2 cs_medium cs_size_md">
                    <svg
                      width={15}
                      height={19}
                      viewBox="0 0 15 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49995 10.15C6.62562 10.151 5.77796 9.86171 5.10131 9.33137C4.42467 8.80103 3.96088 8.06245 3.78893 7.24139C3.77523 7.15491 3.78132 7.0666 3.80678 6.98259C3.83225 6.89858 3.87648 6.82088 3.93641 6.75487C3.99634 6.68886 4.07054 6.63611 4.15387 6.60029C4.2372 6.56448 4.32766 6.54644 4.41899 6.54743C4.56909 6.54534 4.71503 6.59464 4.83054 6.68647C4.94605 6.77829 5.02354 6.9066 5.04904 7.04829C5.1677 7.59074 5.47765 8.07756 5.92682 8.42698C6.376 8.77639 6.93704 8.96712 7.5157 8.96712C8.09436 8.96712 8.6554 8.77639 9.10458 8.42698C9.55375 8.07756 9.8637 7.59074 9.98236 7.04829C10.0079 6.9066 10.0853 6.77829 10.2009 6.68647C10.3164 6.59464 10.4623 6.54534 10.6124 6.54743C10.7037 6.54644 10.7942 6.56448 10.8775 6.60029C10.9609 6.63611 11.0351 6.68886 11.095 6.75487C11.1549 6.82088 11.1992 6.89858 11.2246 6.98259C11.2501 7.0666 11.2562 7.15491 11.2425 7.24139C11.0695 8.06756 10.6011 8.81007 9.91792 9.341C9.23477 9.87193 8.37967 10.158 7.49995 10.15Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.1075 18.1036H1.89252C1.63615 18.1039 1.38239 18.0542 1.14668 17.9577C0.910966 17.8611 0.698235 17.7196 0.521424 17.5418C0.344612 17.3639 0.207417 17.1535 0.118184 16.9233C0.0289511 16.6931 -0.0104547 16.448 0.00236435 16.2027L0.512708 5.79928C0.533829 5.33287 0.742257 4.89231 1.09447 4.56959C1.44668 4.24687 1.91544 4.06695 2.40287 4.06738H12.5971C13.0846 4.06695 13.5533 4.24687 13.9055 4.56959C14.2577 4.89231 14.4662 5.33287 14.4873 5.79928L14.9976 16.2027C15.0105 16.448 14.9711 16.6931 14.8818 16.9233C14.7926 17.1535 14.6554 17.3639 14.4786 17.5418C14.3018 17.7196 14.089 17.8611 13.8533 17.9577C13.6176 18.0542 13.3639 18.1039 13.1075 18.1036ZM2.40287 5.28031C2.23577 5.28031 2.07551 5.34389 1.95735 5.45706C1.8392 5.57023 1.77281 5.72372 1.77281 5.88376L1.26247 16.2631C1.2582 16.3448 1.27133 16.4265 1.30108 16.5033C1.33082 16.58 1.37655 16.6501 1.43549 16.7094C1.49443 16.7687 1.56534 16.8159 1.64391 16.8481C1.72248 16.8802 1.80707 16.8968 1.89252 16.8967H13.1075C13.1929 16.8968 13.2775 16.8802 13.3561 16.8481C13.4347 16.8159 13.5056 16.7687 13.5645 16.7094C13.6234 16.6501 13.6692 16.58 13.6989 16.5033C13.7287 16.4265 13.7418 16.3448 13.7375 16.2631L13.2272 5.85962C13.2272 5.69958 13.1608 5.54609 13.0426 5.43292C12.9245 5.31975 12.7642 5.25618 12.5971 5.25618L2.40287 5.28031Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.2803 4.67672H10.0202V3.62069C10.0202 2.98051 9.75468 2.36655 9.28205 1.91388C8.80941 1.46121 8.16839 1.2069 7.49999 1.2069C6.83158 1.2069 6.19056 1.46121 5.71793 1.91388C5.24529 2.36655 4.97977 2.98051 4.97977 3.62069V4.67672H3.71967V3.62069C3.71967 2.66042 4.11795 1.73949 4.8269 1.06048C5.53584 0.381464 6.49738 0 7.49999 0C8.50259 0 9.46413 0.381464 10.1731 1.06048C10.882 1.73949 11.2803 2.66042 11.2803 3.62069V4.67672Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>ADD TO BAG</span>
                  </button>
                  <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                    <span>BUY NOW</span>
                  </button>
                  <button
                    className={`cs_like_btn cs_center cs_accent_color ${
                      isButtonActive1 ? "active" : ""
                    }`}
                    onClick={() => setIsButtonActive1(!isButtonActive1)}
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
        </div>
      </div>
    </>
  );
};

export default StoreSection;
