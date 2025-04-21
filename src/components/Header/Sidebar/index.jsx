import React, { useState } from "react";
import { FaMinus, FaPlus, FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Spacing from "../../Spacing";

const Sidebar = ({ isactiveSideBar, setActiveSideHeader, data }) => {
  // Local state to manage cart items and subtotal
  const [cartItems, setCartItems] = useState(data.cartItems);
  const [subtotal, setSubtotal] = useState(data.subtotal);

  // Function to increment quantity
  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    updateSubtotal(updatedCartItems);
  };

  // Function to decrement quantity
  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      updateSubtotal(updatedCartItems);
    }
  };

  // Function to recalculate the subtotal
  const updateSubtotal = (updatedCartItems) => {
    const newSubtotal = updatedCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setSubtotal(newSubtotal.toFixed(2)); // Ensure 2 decimal places
  };

  return (
    <div className={`cs_cart_card_wrap  ${isactiveSideBar ? "active" : ""}`}>
      <div className="cs_cart_card">
        <div className="cs_cart_card_head cs_gray_bg">
          <h3 className="mb-0 cs_fs_18 cs_semibold">
            {data.cartTitle} ({cartItems.length})
          </h3>
          <button
            className="cs_cart_close"
            onClick={() => setActiveSideHeader(false)}
          >
            Close
          </button>
        </div>
        <div className="cs_cart_card_body">
          <div className="cs_cart_card_body_in">
            <ul className="cs_cart_card_list cs_mp_0">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="cs_cart_card_item">
                    <div className="cs_cart_card_item_left">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cs_cart_card_item_right">
                      <h3 className="cs_fs_18 cs_medium">{item.name}</h3>
                      <div className="cs_quantity cs_style_1">
                        <button
                          className="cs_quantity_button cs_decrement"
                          onClick={() => decrementQuantity(index)}
                        >
                          <i>
                            <FaMinus />
                          </i>
                        </button>
                        <span className="cs_quantity_input cs_primary_color cs_medium">
                          {item.quantity}
                        </span>
                        <button
                          className="cs_quantity_button cs_increment"
                          onClick={() => incrementQuantity(index)}
                        >
                          <i>
                            <FaPlus />
                          </i>
                        </button>
                      </div>
                      <p className="mb-0">
                        {item.quantity} x{" "}
                        <span className="cs_primary_color cs_medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </p>
                      <button
                        className="cs_cart_card_item_remove"
                        type="button"
                      >
                        <i>
                          <FaRegCircleXmark />
                        </i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs_cart_card_footer">
          <div className="cs_cart_card_subtotal">
            <span>Subtotal:</span>
            <span className="cs_primary_color cs_semibold">${subtotal}</span>
          </div>
          <Link
            to={data.cartUrl}
            className="cs_btn cs_style_2 cs_medium cs_type_1 w-100"
          >
            <span>View Cart</span>
          </Link>{" "}
          <Spacing lg={10} md={10} />
          <Link
            to={data.checkoutUrl}
            className="cs_btn cs_style_1 cs_medium cs_type_1 w-100"
          >
            <span>Checkout</span>
          </Link>
        </div>
      </div>
      <div
        className="cs_cart_overlay"
        onClick={() => setActiveSideHeader(false)}
      />
    </div>
  );
};

export default Sidebar;
