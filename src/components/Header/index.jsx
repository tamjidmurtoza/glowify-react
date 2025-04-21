import { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { sidebarData, menuData, categories, topBar } from "./hederdata";
import Sidebar from "./Sidebar";
import SocialMedia from "./HeaderComponents/SocialMedia";
import LanguageDropdown from "./HeaderComponents/LanguageDropdown";
import Navbar from "./HeaderComponents/Navbar";
import CategoryDropdown from "./HeaderComponents/CategoryDropdown";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showLan, setShowLan] = useState(false);
  const [isactiveSideBar, setActiveSideHeader] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [openMobileMegaMenuIndex, setOpenMobileMegaMenuIndex] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

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

  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowCategory(false);
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
        className={`cs_site_header cs_style_1 cs_primary_color cs_sticky_header cs_white_bg ${
          isSticky ? "cs_sticky_active" : ""
        } ${isShowMobileMenu ? "cs_mobile_active" : ""}`}
      >
        <div className="cs_top_header cs_primary_bg cs_accent_light_color cs_light">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left cs_mobile_hide">
                <ul className="cs_top_header_list cs_mp_0">
                  <li>
                    <SocialMedia
                      facebookLink={topBar.facebookLink}
                      instagramLink={topBar.instagramLink}
                      twitterLink={topBar.twitterLink}
                    />
                  </li>
                  <li>
                    <p className="cs_header_icon_box">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0C4.74305 0 2.49999 2.24306 2.49999 5.00001C2.49999 5.82765 2.70692 6.64825 3.10029 7.3761L7.22657 14.8389C7.28151 14.9384 7.38618 15 7.5 15C7.61382 15 7.7185 14.9384 7.77343 14.8389L11.9012 7.37364C12.2931 6.64825 12.5 5.82762 12.5 4.99998C12.5 2.24306 10.257 0 7.5 0ZM7.5 7.5C6.12153 7.5 5.00001 6.37849 5.00001 5.00001C5.00001 3.62153 6.12153 2.50002 7.5 2.50002C8.87848 2.50002 9.99999 3.62153 9.99999 5.00001C9.99999 6.37849 8.87848 7.5 7.5 7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      {topBar.location}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_rihgt">
                <ul className="cs_top_header_list cs_mp_0 cs_top_header_info_list">
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
            </div>
          </div>
        </div>

        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={topBar.logoUrl}>
                  <img src={topBar.logo} alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div
                  className={`cs_header_search_form_wrap ${
                    activeSearch ? "active" : ""
                  }`}
                >
                  <form action="#" className="cs_header_search_form">
                    <input
                      type="text"
                      placeholder="Search for products and brands"
                      className="cs_header_search_field"
                    />
                    <button className="cs_header_submit_btn">
                      <img src="/assets/images/icons/search.svg" alt="" />
                    </button>
                  </form>
                </div>
                <button
                  className="cs_mobile_search_toggle cs_mobile_show"
                  type="button"
                  onClick={() => setActiveSearch(!activeSearch)}
                >
                  <img src="/assets/images/icons/search.svg" alt="" />
                </button>
                <ul className="cs_header_list cs_mp_0">
                  <li>
                    <div className="cs_header_credential_btns">
                      <Link to={topBar.loginUrl}>
                        <img src="/assets/images/icons/user.svg" alt="" />
                      </Link>
                      <span>
                        <Link to={topBar.loginUrl}>{topBar.loginText}</Link> /{" "}
                        <Link to={topBar.signupUrl}>{topBar.signupText}</Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="cs_cart_btn"
                      onClick={() => setActiveSideHeader(!isactiveSideBar)}
                    >
                      <img src="/assets/images/icons/bag.svg" alt="" />
                      <span className="cs_cart_label cs_accent_bg cs_white_color">
                        {topBar.cartItems}
                      </span>
                      <span>
                        My Bag <b>(${topBar.cartTotal})</b>
                      </span>
                    </button>
                  </li>
                </ul>
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
              <div className="cs_bottom_header_right">
                <Link to={topBar.suportLink} className="cs_header_number_wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-headset"
                  >
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                  </svg>
                  <span className="cs_accent_color cs_fs_24 cs_header_number">
                    {topBar.phon}
                  </span>
                  <span className="cs_header_number_text">
                    {topBar.suportText}
                  </span>
                </Link>
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

export default Header;
