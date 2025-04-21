import React from "react";
import BreadCamp from "../../../components/BreadCamp";
import Spacing from "../../../components/Spacing";
import { PageTitle } from "../../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Products", url: "", active: true },
];

const checkOutDta = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "1",
  showShippingAddress: false,
  countries: [
    { value: 1, label: "United States" },
    { value: 2, label: "Germany" },
    { value: 3, label: "Greece" },
  ],
  orderData: {
    products: [
      {
        name: "Silk Lash Extensions",
        price: 24.99,
        size: "One Size",
        quantity: 1,
      },
      { name: "Vitamin C Serum", price: 29.99, size: "30ml", quantity: 2 },
      {
        name: "Hyaluronic Acid Serum",
        price: 19.99,
        size: "50ml",
        quantity: 1,
      },
      {
        name: "Dewy Finish Foundation",
        price: 39.99,
        size: "30ml",
        quantity: 3,
      },
      { name: "Curl Defining Cream", price: 32.99, size: "50ml", quantity: 1 },
    ],
    totals: {
      subtotal: 236.92,
      shipping: 4.99,
      total: 241.91,
    },
    paymentMethods: ["Credit Card", "PayPal", "Google Pay", "Cash on Delivery"],
  },
};

const Checkout = () => {
  PageTitle("Checkout");
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_11.jpg"
        title="Complete Your Beauty Order"
        breadcrumbItems={breadcrumbData}
        type={true}
      />

      {/* End Breadcamp */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-7">
            <h2 className="cs_fs_36 cs_secondary_font cs_medium mb-0">
              BILLING DETAILS
            </h2>
            <Spacing lg={16} md={16} />
            <p className="cs_light cs_primary_color mb-0">
              Please enter your billing details:
            </p>
            <Spacing lg={30} md={35} />
            <div className="row">
              <div className="col-lg-6">
                <label className="cs_semibold">
                  First Name<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.firstName}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  Last Name<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.lastName}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  Email Address<span>*</span>
                </label>
                <input
                  type="email"
                  className="cs_form_field"
                  defaultValue={checkOutDta.email}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  Phone<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.phone}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-12">
                <label className="cs_semibold">
                  Address<span>*</span>
                </label>
                <textarea
                  cols={30}
                  rows={3}
                  className="cs_form_field"
                  defaultValue={checkOutDta.address}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  City<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.city}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  State/Province<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.state}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  ZIP/Postal Code<span>*</span>
                </label>
                <input
                  type="text"
                  className="cs_form_field"
                  defaultValue={checkOutDta.zip}
                />
                <Spacing lg={20} md={30} />
              </div>
              <div className="col-lg-6">
                <label className="cs_semibold">
                  Country<span>*</span>
                </label>
                <select
                  className="cs_form_field"
                  defaultValue={checkOutDta.country}
                >
                  {checkOutDta.countries.map((countryOption, index) => (
                    <option key={index} value={countryOption.value}>
                      {countryOption.label}
                    </option>
                  ))}
                </select>
                <Spacing lg={20} md={30} />
              </div>
            </div>
            <Spacing lg={20} md={60} />
            <h2 className="cs_fs_24 cs_medium cs_secondary_font mb-0">
              SHIPPING ADDRESS
            </h2>
            <Spacing lg={25} md={25} />
            <hr />
            <Spacing lg={30} md={30} />
            <div className="cs_custom_checkbox cs_style_1 cs_light">
              <input
                type="checkbox"
                checked={checkOutDta.showShippingAddress}
                onChange={checkOutDta.handleShippingChange}
              />
              <span>Ship to a different address?</span>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 offset-xxl-1">
            <div className="cs_order_card cs_accent_light_bg cs_radius_10">
              <h3 className="cs_fs_24 cs_medium cs_secondary_font mb-0">
                ORDER SUMMARY
              </h3>
              <Spacing lg={8} md={8} />
              <ul className="cs_mp_0 cs_order_summary">
                {checkOutDta.orderData.products.map((product, index) => (
                  <li key={index}>
                    <div className="cs_order_summary_list_title">
                      <h3 className="mb-0 cs_secondary_font cs_semibold cs_fs_16">
                        {product.name}
                      </h3>
                      <h3 className="mb-0 cs_secondary_font cs_semibold cs_fs_16 cs_accent_color">
                        ${product.price}
                      </h3>
                    </div>
                    <p>
                      Size:{" "}
                      <span className="cs_primary_color">{product.size}</span>
                    </p>
                    <p>Quantity: {product.quantity}</p>
                  </li>
                ))}
              </ul>
              <Spacing lg={30} md={40} />
              <ul className="cs_card_price_list cs_type_1 cs_mp_0">
                <li>
                  <span className="cs_light">Subtotal</span>
                  <span className="cs_semibold cs_primary_color">
                    ${checkOutDta.orderData.totals.subtotal}
                  </span>
                </li>
                <li>
                  <span className="cs_light">Shipping Fee</span>
                  <span className="cs_semibold cs_primary_color">
                    ${checkOutDta.orderData.totals.shipping}
                  </span>
                </li>
                <li className="cs_total_price">
                  <span className="cs_fs_18 cs_primary_color">Total</span>
                  <span className="cs_fs_18 cs_primary_color">
                    ${checkOutDta.orderData.totals.total}
                  </span>
                </li>
              </ul>
              <Spacing lg={40} md={50} />
              <h3 className="cs_secondary_font cs_fs_24 cs_medium mb-0">
                PAYMENT METHOD
              </h3>
              <Spacing lg={8} md={8} />
              <p className="mb-0 cs_light">
                Choose your preferred payment method:
              </p>
              <Spacing lg={20} md={20} />
              <ul className="cs_payment_method_list cs_mp_0">
                {checkOutDta.orderData.paymentMethods.map((method, index) => (
                  <li key={index}>
                    <div className="cs_custom_checkbox cs_style_1 cs_light">
                      <input name="paymentMethod" type="radio" value={method} />
                      <span>{method}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Spacing lg={30} md={40} />
              <button className="cs_btn cs_style_1 cs_fs_18 w-100">
                <span>PLACE ORDER</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Spacing lg={70} md={120} />
    </>
  );
};

export default Checkout;
