import React, { useState } from "react";
import BreadCamp from "../../../components/BreadCamp";
import Spacing from "../../../components/Spacing";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { PageTitle } from "../../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

const cardData = {
  productDta: [
    {
      imageSrc: "/assets/images/product_1.png",
      imageAlt: "Lipstick",
      productUrl: "/product/:product-details",
      productCategoryUrl: "/shop",
      productCategory: "GLOWIFY BEAUTY",
      productTitle: "Velvet Matte Lipstick",
      productSize: "3g",
      productPrice: "$14.99",
    },
    {
      imageSrc: "/assets/images/product_3.png",
      imageAlt: "Face Cream",
      productUrl: "/product/:product-details",
      productCategoryUrl: "/shop",
      productCategory: "GLOWIFY BEAUTY",
      productTitle: "Hydrating Face Cream",
      productSize: "50ml",
      productPrice: "$34.99",
    },
    {
      imageSrc: "/assets/images/product_4.png",
      imageAlt: "Mascara",
      productUrl: "/product/:product-details",
      productCategoryUrl: "/shop",
      productCategory: "GLOWIFY BEAUTY",
      productTitle: "Lash Volumizing Mascara",
      productSize: "10ml",
      productPrice: "$19.99",
    },
    {
      imageSrc: "/assets/images/product_5.png",
      imageAlt: "Foundation",
      productUrl: "/product/:product-details",
      productCategoryUrl: "/shop",
      productCategory: "GLOWIFY BEAUTY",
      productTitle: "Liquid Foundation",
      productSize: "30ml",
      productPrice: "$29.99",
    },
    {
      imageSrc: "/assets/images/product_6.png",
      imageAlt: "Hair Oil",
      productUrl: "/product/:product-details",
      productCategoryUrl: "/shop",
      productCategory: "GLOWIFY BEAUTY",
      productTitle: "Argan Hair Oil",
      productSize: "100ml",
      productPrice: "$39.99",
    },
  ],
  promoCode: "",
  items: [
    { name: "Silk Lash Extensions", price: "$24.99" },
    { name: "Hydrating Face Cream", price: "$34.99" },
  ],
  subtotal: "$59.98",
  totalItemValues: "$59.98",
  totalDiscount: "-$5.00",
  shippingFee: "$4.99",
  totalPrice: "$59.97",
  orderNotePlaceholder: "Notes about your orders",
  buttonText: "PROCEED TO CHECKOUT",
  note: "Is there anything specific you'd like to add or any special instructions for your order? Let us know in the box below.",
};

const Cart = () => {
  PageTitle("Cart");
  const [quantities, setQuantities] = useState(
    cardData.productDta.map(() => 1) // Initialize each product's quantity to 1
  );

  const [activeButtons, setActiveButtons] = useState([]);

  const increment = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  const decrement = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      if (prevActiveButtons.includes(index)) {
        return prevActiveButtons.filter((i) => i !== index);
      } else {
        return [...prevActiveButtons, index];
      }
    });
  };
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_10.jpeg"
        title="Beauty Collection"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-7">
            <h2 className="cs_fs_36 cs_secondary_font cs_medium mb-0">
              MY CART
            </h2>
            <Spacing lg={40} md={40} />
            <div className="cs_cart_list_top">
              <div className="cs_custom_checkbox cs_style_1">
                <input type="checkbox" />
                <span>
                  SELECT ALL{" "}
                  <b className="cs_medium cs_primary_color">
                    ({cardData.productDta.length} ITEMS)
                  </b>
                </span>
              </div>
              <p className="mb-0">
                <button className="cs_delete_btn">
                  <i style={{ display: "flex" }}>
                    <FaRegTrashCan />
                  </i>
                  Delete
                </button>
              </p>
            </div>
            <ul className="cs_cart_list cs_mp_0">
              {cardData.productDta.map((product, index) => (
                <li key={index}>
                  <div className="cs_custom_checkbox cs_style_1 cs_type_1">
                    <input type="checkbox" />
                    <span />
                  </div>
                  <div className="cs_product_card cs_style_11 cs_radius_10">
                    <Link to={product.productUrl} className="cs_product_thumb">
                      <img src={product.imageSrc} alt={product.imageAlt} />
                    </Link>
                    <div className="cs_product_card_right">
                      <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                        <Link to={product.productCategoryUrl}>
                          {product.productCategory}
                        </Link>
                      </div>
                      <h2 className="cs_product_title cs_fs_24 cs_medium cs_secondary_font">
                        <Link to={product.productUrl}>
                          {product.productTitle}
                        </Link>
                      </h2>
                      <p className="cs_light cs_primary_color mb-0">
                        Size: {product.productSize}
                      </p>
                      <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium cs_accent_color">
                        {product.productPrice}
                      </p>
                      <div className="cs_quantity cs_style_1">
                        <button
                          className="cs_quantity_button cs_decrement"
                          onClick={() => decrement(index)}
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
                          {quantities[index]}
                        </span>
                        <button
                          className="cs_quantity_button cs_increment"
                          onClick={() => increment(index)}
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
                      <button
                        className={`cs_like_btn cs_center cs_accent_color ${
                          activeButtons.includes(index) ? "active" : ""
                        }`}
                        onClick={() => handleButtonClick(index)}
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
                      <button className="cs_product_card_close">
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.02556 21C0.822736 21 0.624454 20.9399 0.455797 20.8272C0.287141 20.7146 0.155687 20.5544 0.0780629 20.367C0.000439235 20.1796 -0.0198669 19.9734 0.0197131 19.7745C0.0592931 19.5756 0.156981 19.3929 0.30042 19.2495L19.2493 0.300367C19.4416 0.108045 19.7024 0 19.9744 0C20.2464 0 20.5072 0.108045 20.6996 0.300367C20.8919 0.49269 20.9999 0.753534 20.9999 1.02552C20.9999 1.2975 20.8919 1.55835 20.6996 1.75067L1.75071 20.6998C1.65557 20.7951 1.54253 20.8707 1.41809 20.9222C1.29364 20.9737 1.16025 21.0002 1.02556 21Z"
                            fill="currentColor"
                          />
                          <path
                            d="M19.9744 21C19.8397 21.0002 19.7063 20.9737 19.5818 20.9222C19.4574 20.8707 19.3444 20.7951 19.2492 20.6998L0.300364 1.75067C0.108044 1.55835 0 1.2975 0 1.02552C0 0.753534 0.108044 0.49269 0.300364 0.300367C0.492684 0.108045 0.753525 0 1.02551 0C1.29749 0 1.55833 0.108045 1.75065 0.300367L20.6995 19.2495C20.843 19.3929 20.9406 19.5756 20.9802 19.7745C21.0198 19.9734 20.9995 20.1796 20.9219 20.367C20.8442 20.5544 20.7128 20.7146 20.5441 20.8272C20.3755 20.9399 20.1772 21 19.9744 21Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xxl-4 col-lg-5 offset-xxl-1">
            <form
              action="checkout"
              className="cs_order_card cs_accent_light_bg cs_radius_10"
            >
              <h3 className="cs_order_card_title cs_fs_24 cs_medium cs_secondary_font">
                YOUR ORDER
              </h3>

              <h4 className="cs_coupon_title cs_semibold cs_fs_16 cs_secondary_font">
                Have a Promo Code?
              </h4>
              <p className="cs_coupon_subtitle cs_light">
                Enter it here for additional savings.
              </p>
              <div className="cs_coupon_form">
                <input
                  type="text"
                  className="cs_coupon_input cs_light"
                  placeholder="Enter Coupon Code"
                  defaultValue={cardData.promoCode}
                />
                <button
                  className="cs_btn cs_style_1 cs_fs_18 cs_coupon_btn cs_medium"
                  type="button"
                >
                  <span>Get</span>
                </button>
              </div>

              <Spacing lg={30} md={40} />
              <ul className="cs_card_price_list cs_mp_0">
                {cardData.items.map((item, index) => (
                  <li key={index}>
                    <span className="cs_light">{item.name}</span>
                    <span className="cs_light">{item.price}</span>
                  </li>
                ))}
                <li>
                  <span className="cs_light">Subtotal</span>
                  <span className="cs_semibold cs_primary_color cs_semibold">
                    {cardData.subtotal}
                  </span>
                </li>
                <li>
                  <span className="cs_light">Total Item Values</span>
                  <span className="cs_semibold cs_primary_color cs_semibold">
                    {cardData.totalItemValues}
                  </span>
                </li>
                <li>
                  <span className="cs_light">Total Discount</span>
                  <span className="cs_semibold cs_primary_color cs_semibold">
                    {cardData.totalDiscount}
                  </span>
                </li>
                <li>
                  <span className="cs_light">Shipping Fee</span>
                  <span className="cs_semibold cs_primary_color cs_semibold">
                    {cardData.shippingFee}
                  </span>
                </li>
                <li className="cs_total_price">
                  <span className="cs_medium cs_fs_24 cs_primary_color">
                    Total
                  </span>
                  <span className="cs_medium cs_fs_24 cs_primary_color">
                    {cardData.totalPrice}
                  </span>
                </li>
              </ul>

              <Spacing lg={30} md={40} />
              <p className="cs_order_note cs_light">{cardData.note}</p>
              <textarea
                cols={30}
                rows={4}
                className="cs_order_note_input cs_light"
                placeholder={cardData.orderNotePlaceholder}
              />
              <Spacing lg={30} md={40} />
              <button
                className="cs_btn cs_style_1 cs_fs_18 w-100"
                type="submit"
              >
                <span>{cardData.buttonText}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Spacing lg={70} md={120} />
    </>
  );
};

export default Cart;
