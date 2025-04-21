import React, { useEffect, useState } from "react";
import { sidebarData, menuData, categories, topBar } from "./hederdata";
import { Link } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import SocialMedia from "./HeaderComponents/SocialMedia";
import LanguageDropdown from "./HeaderComponents/LanguageDropdown";
import Navbar from "./HeaderComponents/Navbar";
import CategoryDropdown from "./HeaderComponents/CategoryDropdown";

const Header2 = () => {
  const [showLan, setShowLan] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isactiveSideBar, setActiveSideHeader] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [openMobileMegaMenuIndex, setOpenMobileMegaMenuIndex] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowCategory(false);
  };

  const handleOpenMobileSubmenu = (index) => {
    setOpenMobileSubmenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const handleOpenMobileListSubmenu = (index) => {
    setOpenMobileMegaMenuIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_type_2 cs_primary_color cs_sticky_header cs_white_bg ${
          isSticky ? "cs_sticky_active" : ""
        } ${isShowMobileMenu ? "cs_mobile_active" : ""}`}
      >
        <div className="cs_top_header cs_primary_bg cs_accent_light_color cs_light">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_top_header_list cs_mp_0 cs_top_header_info_list">
                  <li>
                    <LanguageDropdown
                      languageOptions={topBar.languageOptions}
                      setShowLan={setShowLan}
                      showLan={showLan}
                      defaultLan={"Eng"}
                      defaultLanImage={
                        "/assets/images/icons/language_icon_1.svg"
                      }
                    />
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_rihgt cs_mobile_hide">
                <ul className="cs_top_header_list cs_mp_0">
                  <li>
                    <Link to="#" className="cs_header_icon_box">
                      <svg
                        width={15}
                        height={17}
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0.701523C3.36499 0.701523 0 4.17892 0 8.45207C0 9.6973 0.295015 10.9322 0.859985 12.0432L0.024995 15.257C-0.040005 15.5154 0.03 15.7944 0.214995 15.9804C0.350005 16.1251 0.535005 16.2026 0.725005 16.2026C0.790005 16.2026 0.850005 16.1923 0.915005 16.1768L4.02499 15.3139C5.10001 15.8977 6.29501 16.2026 7.5 16.2026C11.635 16.2026 15 12.7252 15 8.45207C15 4.17892 11.635 0.701523 7.5 0.701523ZM7.5 13.1541C7.04501 13.1541 6.67499 12.7717 6.67499 12.3015C6.67499 11.8313 7.04501 11.4489 7.5 11.4489C7.95499 11.4489 8.32501 11.8313 8.32501 12.3015C8.32501 12.7717 7.95499 13.1541 7.5 13.1541ZM8.82501 8.87577C8.45001 9.11343 8.22 9.50613 8.22 9.92983C8.22 10.3432 7.89499 10.6791 7.495 10.6791C7.095 10.6791 6.76999 10.3432 6.76999 9.92983C6.76999 8.97908 7.25501 8.11103 8.07001 7.59432C8.405 7.38249 8.60501 7.01045 8.59501 6.60226C8.59 6.02356 8.10502 5.51203 7.54001 5.4862C6.95002 5.4552 6.45499 5.91504 6.39999 6.51961C6.36499 6.93296 6.005 7.22749 5.60998 7.19649C5.20999 7.16031 4.92002 6.79344 4.95499 6.38009C5.07501 4.98498 6.23001 3.93609 7.60001 3.98775C8.92999 4.04459 10.025 5.20717 10.05 6.58161C10.065 7.51166 9.595 8.39006 8.82501 8.87577Z"
                          fill="currentColor"
                        />
                      </svg>
                      {topBar.supportText}
                    </Link>
                  </li>
                  <li>
                    <SocialMedia
                      facebookLink={topBar.facebookLink}
                      instagramLink={topBar.instagramLink}
                      twitterLink={topBar.twitterLink}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              {/* Left Section - Search */}
              <div className="cs_main_header_left">
                <div
                  className={`cs_header_search_form_wrap ${
                    activeSearch ? "active" : ""
                  }`}
                >
                  <form action="#" className="cs_header_search_form">
                    <input
                      type="text"
                      placeholder={topBar.searchPlaceholder}
                      className="cs_header_search_field"
                    />
                    <button className="cs_header_submit_btn">
                      <img src={topBar.searchIconWhite} alt="Search" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Center Section - Logo */}
              <div className="cs_main_header_center">
                <Link className="cs_site_branding" to={topBar.logoUrl}>
                  <img src={topBar.logoWhite} alt={topBar.logoWhite} />
                </Link>
              </div>

              {/* Right Section - Icons */}
              <div className="cs_main_header_right">
                <button
                  className="cs_mobile_search_toggle cs_mobile_show"
                  type="button"
                  onClick={() => setActiveSearch(!activeSearch)}
                >
                  <img src={topBar.searchIconWhite} alt="Mobile Search" />
                </button>
                <div className="cs_header_icon_btns cs_mp_0">
                  <Link to={topBar.myAccountUrl}>
                    <img
                      src={topBar.userIconWhite}
                      alt={topBar.userIconWhite}
                    />
                  </Link>
                  <Link to={topBar.wishlistUrl} className="cs_mobile_hide_sm">
                    <img
                      src={topBar.wishListWhiteIcon}
                      alt={topBar.wishListWhiteIcon}
                    />
                  </Link>
                  <button
                    type="button"
                    className="cs_cart_btn"
                    onClick={() => setActiveSideHeader(!isactiveSideBar)}
                  >
                    <img
                      src={topBar.cardIconWhite}
                      alt={topBar.cardIconWhite}
                    />
                    <span className="cs_cart_label cs_accent_bg cs_white_color">
                      {topBar.cartItems}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_bottom_header">
          <div className="container">
            <div className="cs_bottom_header_in">
              <div className="cs_bottom_header_left">
                <div className="cs_nav_wrap">
                  <div className="cs_site_branding_wrap cs_mobile_show">
                    <Link className="cs_site_branding" to={topBar.logoUrl}>
                      <img src={topBar.logo} alt="Logo" />
                    </Link>
                    <button
                      className="cs_close_mobile_active"
                      onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                    >
                      <i>
                        <FaRegCircleXmark />
                      </i>
                    </button>
                  </div>
                  <div className="cs_nav_out">
                    <CategoryDropdown
                      showCategory={showCategory}
                      handleCategoryClick={handleCategoryClick}
                      setIsShowMobileMenu={setIsShowMobileMenu}
                      isShowMobileMenu={isShowMobileMenu}
                      {...categories}
                    />
                    <Navbar
                      handleMenuClick={handleMenuClick}
                      handleOpenMobileListSubmenu={handleOpenMobileListSubmenu}
                      handleOpenMobileSubmenu={handleOpenMobileSubmenu}
                      isShowMobileMenu={isShowMobileMenu}
                      menuData={menuData}
                      openMobileMegaMenuIndex={openMobileMegaMenuIndex}
                      openMobileSubmenuIndex={openMobileSubmenuIndex}
                      setIsShowMobileMenu={setIsShowMobileMenu}
                      showMenu={showMenu}
                    />
                    <SocialMedia
                      facebookLink={topBar.facebookLink}
                      instagramLink={topBar.instagramLink}
                      twitterLink={topBar.twitterLink}
                      variant={"cs_mobile_show"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cs_header_overlay_mobile"
          onClick={() => setIsShowMobileMenu(false)}
        />
        <span
          className={`cs_menu_toggle ${isShowMobileMenu && "active"}`}
          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
        >
          <span></span>
        </span>
        <div className="cs_header_overlay_mobile" />
      </header>
      <div className="cs_site_header_height_1" />

      <Sidebar
        data={sidebarData}
        isactiveSideBar={isactiveSideBar}
        setActiveSideHeader={setActiveSideHeader}
      />
    </>
  );
};

export default Header2;
