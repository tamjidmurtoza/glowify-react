import { useState } from "react";
import HeadingPath from "../../../components/Heading/HeadingPath";
import Spacing from "../../../components/Spacing";
import { Link } from "react-router-dom";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { PageTitle } from "../../../Helper/PageTitle";

const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "My Account", url: "", active: false },
  { label: "Address", url: "", active: true },
];

const allData = {
  user: {
    name: "Jhon Bironi",
    avatar: "/assets/images/avatar_1.jpeg",
  },
  navItems: [
    { text: "Dashboard", link: "#my-account" },
    { text: "Orders", link: "#orders" },
    { text: "Address", link: "#address" },
    { text: "Account Details", link: "#account-details" },
    { text: "Logout", link: "/login" },
  ],

  profile: {
    name: "Jhon Bironi",
    email: "jh****oni@gmail.com",
    phone: "+088123098123",
  },

  orders: [
    { id: "129818276", date: "25/05/2024", status: "Pending", total: "$724" },
    { id: "676515234", date: "19/05/2024", status: "Pending", total: "$876" },
    { id: "091827653", date: "14/05/2024", status: "Pending", total: "$1002" },
  ],
};

const ordersData = {
  title: "Your Orders",
  filterOptions: [
    { value: 1, label: "All Orders" },
    { value: 2, label: "Pending" },
    { value: 3, label: "Delivered" },
    { value: 4, label: "Canceled" },
  ],
  orders: [
    {
      id: "#129818276",
      date: "25/05/2024",
      status: "Pending",
      total: "$724",
    },
    {
      id: "#676515234",
      date: "19/05/2024",
      status: "Delivered",
      total: "$876",
    },
    {
      id: "#091827653",
      date: "14/05/2024",
      status: "Canceled",
      total: "$1002",
    },
    {
      id: "#091827654",
      date: "14/05/2024",
      status: "Pending",
      total: "$1002",
    },
    {
      id: "#091827655",
      date: "14/05/2024",
      status: "Delivered",
      total: "$1002",
    },
    {
      id: "#091827656",
      date: "14/05/2024",
      status: "Canceled",
      total: "$1002",
    },
    {
      id: "#091827657",
      date: "14/05/2024",
      status: "Delivered",
      total: "$1002",
    },
  ],
  paginationData: {
    totalPages: 5,
  },
};

const addressData = {
  billingAddress: {
    name: "Jhon Bironi",
    phone: "+088123098123",
    email: "jhon.bironi@gmail.com",
    company: null,
    country: "USA",
    address: "772 Grand Avenue Orlando, FL 32809",
    city: "Orlando",
    state: "Grand Avenue",
    zipCode: "203069",
  },
  shippingAddress: null, // Shipping address not yet added
};
const MyAccount = () => {
  PageTitle("MyAccount");
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [userDetails, setUserDetails] = useState({
    firstName: "Jhon",
    lastName: "Bironi",
    displayName: "jhonbironi23",
    email: "jhon.bironi@gmail.com",
  });
  const handleUpdateUserDetails = (updatedDetails) => {
    setUserDetails(updatedDetails);
  };
  const handleSaveChanges = () => {};

  return (
    <>
      <div className="container">
        <ol className="breadcrumb cs_fs_18 mb-0">
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
          </div>
        </ol>
        <Spacing lg={30} md={30} />
      </div>
      <div className="container">
        <div className="cs_account_wrap">
          <div className="cs_account_nav cs_radius_10">
            <div className="cs_account_avatar">
              <img
                src={allData.user.avatar}
                alt={`${allData.user.name}'s Avatar`}
              />
              <h3>
                <span>Hello,</span> <br />
                {allData.user.name}
              </h3>
            </div>
            <ul className="cs_account_nav_list cs_mp_0">
              {allData.navItems.map((item, index) => (
                <li
                  key={index}
                  className={
                    item.isActive || activeTab === item.text ? "active" : ""
                  }
                  onClick={() => handleTabClick(item.text)}
                >
                  <Link to={item.link}>
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {activeTab === "Dashboard" && (
            <MyAccountContent
              orders={allData.orders}
              profile={allData.profile}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === "Orders" && <Orders ordersData={ordersData} />}
          {activeTab === "Address" && <Address data={addressData} />}
          {activeTab === "Account Details" && (
            <AccountDetails
              userDetails={userDetails}
              onUpdateUserDetails={handleUpdateUserDetails}
              onSaveChanges={handleSaveChanges}
            />
          )}
        </div>
      </div>
      <Spacing lg={70} md={120} />
    </>
  );
};

export default MyAccount;

const MyAccountContent = ({ profile, orders, setActiveTab }) => {
  return (
    <div className="cs_account_content">
      {/* Personal Profile Section */}
      <div className="cs_account_card cs_radius_10">
        <div className="cs_account_card_head">
          <h3 className="cs_fs_18 mb-0">Personal Profile</h3>
          <Link
            to="#account-details"
            className="cs_text_btn cs_accent_color cs_medium"
            onClick={() => setActiveTab("Account Details")}
          >
            <span>Edit</span>
          </Link>
        </div>
        <div className="cs_account_body">
          <div className="cs_personal_info">
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Number: {profile.phone}</p>
          </div>
        </div>
      </div>

      <Spacing lg={30} md={30} />

      {/* Orders Section */}
      <div className="cs_account_card cs_radius_10">
        <div className="cs_account_card_head cs_type_1">
          <h3 className="cs_fs_18 mb-0">Your Orders</h3>
          <select>
            <option value={1}>All Order</option>
            <option value={2}>Pending</option>
            <option value={3}>Delivered</option>
            <option value={4}>Canceled</option>
          </select>
        </div>
        <div className="cs_plr_25">
          <div className="table-responsive">
            <table className="cs_table_1 m-0">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Placed On</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`order-details?order=${order.id}`}>
                        #{order.id}
                      </Link>
                    </td>
                    <td>{order.date}</td>
                    <td className="cs_accent_color">{order.status}</td>
                    <td>{order.total}</td>
                    <td className="text-end">
                      <Link
                        className="cs_text_btn"
                        to={`order-details?order=${order.id}`}
                      >
                        <span>View Details</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Orders = ({ ordersData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(1);

  // Handle filter change
  const handleFilterChange = (e) => {
    setSelectedFilter(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter orders based on selected filter
  const filteredOrders =
    selectedFilter === 1
      ? ordersData.orders
      : ordersData.orders.filter((order) => {
          switch (selectedFilter) {
            case 2:
              return order.status === "Pending";
            case 3:
              return order.status === "Delivered";
            case 4:
              return order.status === "Canceled";
            default:
              return true;
          }
        });

  // Pagination logic
  const ordersPerPage = 5; // Define how many orders per page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="cs_account_card cs_radius_10" style={{ width: "100%" }}>
      <div className="cs_account_card_head cs_type_1">
        <h3 className="cs_fs_18 mb-0">{ordersData.title}</h3>
        <select onChange={handleFilterChange} value={selectedFilter}>
          {ordersData.filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="cs_plr_25">
        <div className="table-responsive">
          <table className="cs_table_1 m-0">
            <thead>
              <tr>
                <th>Order</th>
                <th>Placed On</th>
                <th>Status</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <Link to="order-details">{order.id}</Link>
                  </td>
                  <td>{order.date}</td>
                  <td
                    className={`${
                      order.status === "Pending"
                        ? "cs_accent_color"
                        : order.status === "Canceled"
                        ? "cs_ternary_color"
                        : order.status === "Delivered"
                        ? "cs_primary_color"
                        : ""
                    }`}
                  >
                    {order.status}
                  </td>
                  <td>{order.total}</td>
                  <td className="text-end">
                    <Link className="cs_text_btn" to="/order-details">
                      <span>View Details</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cs_table_1_footer">
          <div className="cs_table_1_footer_left">
            Page
            <select onChange={(e) => handlePageChange(Number(e.target.value))}>
              {Array.from(
                { length: ordersData.paginationData.totalPages },
                (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                )
              )}
            </select>
            Of {ordersData.paginationData.totalPages}
          </div>
          <div className="cs_table_1_footer_right">
            <ul className="pagination justify-content-center justify-content-md-start mb-0">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i>
                    <FaAnglesLeft />
                  </i>
                </Link>
              </li>
              {Array.from(
                { length: ordersData.paginationData.totalPages },
                (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <Link
                      className="page-link"
                      to="#"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Link>
                  </li>
                )
              )}
              <li className="page-item">
                <span className="page-link">
                  <i>
                    <HiMiniEllipsisHorizontal />
                  </i>
                </span>
              </li>
              <li
                className={`page-item ${
                  currentPage === ordersData.paginationData.totalPages
                    ? "disabled"
                    : ""
                }`}
              >
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i>
                    <FaAnglesRight />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Address = ({ data }) => {
  return (
    <div className="cs_account_content">
      <div className="cs_account_card cs_radius_10">
        <div className="cs_account_card_head cs_type_1">
          <h3 className="cs_fs_18 mb-0 cs_semibold">
            The following addresses will be used on the checkout page by
            default.
          </h3>
        </div>
        <div className="cs_plr_25">
          <div className="row cs_gap_y_20">
            {/* Billing Address Section */}
            <div className="col-md-6">
              <div className="cs_address_card cs_radius_5">
                <h3 className="cs_fs_24 cs_semibold">Billing address</h3>
                {data.billingAddress ? (
                  <p>
                    <span className="cs_primary_color">Name:</span>{" "}
                    {data.billingAddress.name}
                    <br />
                    <span className="cs_primary_color">Phone:</span>{" "}
                    {data.billingAddress.phone}
                    <br />
                    <span className="cs_primary_color">Email:</span>{" "}
                    {data.billingAddress.email}
                    <br />
                    <span className="cs_primary_color">Company name:</span>{" "}
                    {data.billingAddress.company || "N/A"}
                    <br />
                    <span className="cs_primary_color">
                      Country/Region:
                    </span>{" "}
                    {data.billingAddress.country}
                    <br />
                    <span className="cs_primary_color">Address:</span>{" "}
                    {data.billingAddress.address}
                    <br />
                    <span className="cs_primary_color">Town/City:</span>{" "}
                    {data.billingAddress.city}
                    <br />
                    <span className="cs_primary_color">State:</span>{" "}
                    {data.billingAddress.state}
                    <br />
                    <span className="cs_primary_color">ZIP Code:</span>{" "}
                    {data.billingAddress.zipCode}
                    <br />
                  </p>
                ) : (
                  <p>You have not set up a billing address yet.</p>
                )}
                <Link
                  to={data.billingAddress ? "update-address" : "add-address"}
                  className="cs_btn cs_style_2 cs_medium cs_size_md"
                >
                  <span>
                    {data.billingAddress ? "Update Address" : "Add Address"}
                  </span>
                </Link>
              </div>
            </div>

            {/* Shipping Address Section */}
            <div className="col-md-6">
              <div className="cs_address_card cs_radius_5">
                <h3 className="cs_fs_24 cs_semibold">Shipping address</h3>
                {data.shippingAddress ? (
                  <p>
                    <span className="cs_primary_color">Name:</span>{" "}
                    {data.shippingAddress.name}
                    <br />
                    <span className="cs_primary_color">Phone:</span>{" "}
                    {data.shippingAddress.phone}
                    <br />
                    <span className="cs_primary_color">Email:</span>{" "}
                    {data.shippingAddress.email}
                    <br />
                    <span className="cs_primary_color">Company name:</span>{" "}
                    {data.shippingAddress.company || "N/A"}
                    <br />
                    <span className="cs_primary_color">
                      Country/Region:
                    </span>{" "}
                    {data.shippingAddress.country}
                    <br />
                    <span className="cs_primary_color">Address:</span>{" "}
                    {data.shippingAddress.address}
                    <br />
                    <span className="cs_primary_color">Town/City:</span>{" "}
                    {data.shippingAddress.city}
                    <br />
                    <span className="cs_primary_color">State:</span>{" "}
                    {data.shippingAddress.state}
                    <br />
                    <span className="cs_primary_color">ZIP Code:</span>{" "}
                    {data.shippingAddress.zipCode}
                    <br />
                  </p>
                ) : (
                  <p>You have not set up this type of address yet.</p>
                )}
                <Link
                  to={data.shippingAddress ? "update-address" : "add-address"}
                  className="cs_btn cs_style_2 cs_medium cs_size_md"
                >
                  <span>
                    {data.shippingAddress ? "Update Address" : "Add Address"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <Spacing lg={30} md={30} />
        </div>
      </div>
    </div>
  );
};

const AccountDetails = ({
  userDetails,
  onUpdateUserDetails,
  onSaveChanges,
}) => {
  const { firstName, lastName, displayName, email } = userDetails;
  return (
    <div className="cs_account_content">
      <div className="cs_account_card cs_radius_10">
        <div className="cs_account_card_head cs_type_1">
          <h3 className="cs_fs_18 mb-0">Account Details</h3>
        </div>
        <div className="cs_plr_25">
          <hr />
          <Spacing lg={25} md={25} />
          <div className="row cs_gap_y_20">
            <div className="col-lg-6">
              <label className="cs_medium">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                className="cs_form_field"
                value={firstName}
                onChange={(e) =>
                  onUpdateUserDetails({
                    ...userDetails,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label className="cs_medium">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="cs_form_field"
                value={lastName}
                onChange={(e) =>
                  onUpdateUserDetails({
                    ...userDetails,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label className="cs_medium">
                Display Name <span>*</span>
              </label>
              <input
                type="text"
                className="cs_form_field"
                value={displayName}
                onChange={(e) =>
                  onUpdateUserDetails({
                    ...userDetails,
                    displayName: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label className="cs_medium">
                Email <span>*</span>
              </label>
              <input
                type="text"
                className="cs_form_field"
                value={email}
                disabled
              />
            </div>
            <div className="col-lg-12">
              <label className="cs_medium">Thumbnail</label>
              <input type="file" className="cs_form_field" />
            </div>
          </div>
          <Spacing lg={30} md={40} />
          <h3 className="cs_fs_18 cs_semibold mb-0">Password Change</h3>
          <Spacing lg={15} md={15} />
          <div className="row cs_gap_y_20">
            <div className="col-lg-6">
              <label className="cs_medium">
                Current Password <span>*</span>
              </label>
              <input type="password" className="cs_form_field" />
            </div>
            <div className="col-lg-6">
              <label className="cs_medium">
                New Password <span>*</span>
              </label>
              <input type="password" className="cs_form_field" />
            </div>
          </div>
          <Spacing lg={30} md={30} />
          <div>
            <button
              className="cs_btn cs_style_1 cs_type_1"
              onClick={onSaveChanges}
            >
              <span>Save Changes</span>
            </button>
          </div>
          <Spacing lg={30} md={30} />
        </div>
      </div>
    </div>
  );
};
