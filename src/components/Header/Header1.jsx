import React, { useEffect, useState } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { sidebarData, menuData, categories, topBar } from './hederdata';
import Sidebar from './Sidebar';
import SocialMedia from './HeaderComponents/SocialMedia';
import LanguageDropdown from './HeaderComponents/LanguageDropdown';
import Navbar from './HeaderComponents/Navbar';
import CategoryDropdown from './HeaderComponents/CategoryDropdown';

const Header1 = () => {
  const [showLan, setShowLan] = useState(false);
  const [isActiveCategory, setActiveCategory] = useState(false);
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

  const handleOpenMobileSubmenu = index => {
    setOpenMobileSubmenuIndex(prevIndex =>
      prevIndex === index ? null : index,
    );
  };

  const handleOpenMobileListSubmenu = index => {
    setOpenMobileMegaMenuIndex(prevIndex =>
      prevIndex === index ? null : index,
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 0) {
        setIsSticky(true); // Scrolled down, make header sticky
      } else {
        setIsSticky(false); // Back to top, remove sticky class
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_type_1 cs_primary_color cs_sticky_header cs_white_bg ${
          isSticky ? 'cs_sticky_active' : ''
        } ${isShowMobileMenu ? 'cs_mobile_active' : ''}`}
      >
        <div className="cs_top_header cs_primary_bg cs_accent_light_color cs_light">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_top_header_list cs_mp_0 cs_top_header_info_list">
                  <li>
                    <Link to={topBar.url} className="cs_header_icon_box">
                      <svg
                        width={15}
                        height={17}
                        viewBox="0 0 15 17"
                        fill="none"
                      >
                        {/* Static SVG Icon */}
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
                      defaultLan={'Eng'}
                      defaultLanImage={
                        '/assets/images/icons/language_icon_1.svg'
                      }
                    />
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <ul className="cs_top_header_list cs_mp_0 cs_mobile_hide">
                  <li>
                    <Link to={topBar.wishlistUrl}>{topBar.wishlist}</Link>
                  </li>
                  <li>
                    <Link to={topBar.myAccountUrl}>{topBar.myAccount}</Link>
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
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={topBar.logoUrl}>
                  <img src={topBar.logo} alt={topBar.logoAlt} />
                </Link>
                <div
                  className={`cs_header_search_form_wrap ${
                    activeSearch ? 'active' : ''
                  }`}
                >
                  <form
                    action="#"
                    className="cs_header_search_with_category_form"
                  >
                    <input
                      type="text"
                      placeholder={topBar.searchPlaceholder}
                      className="cs_header_search_with_category_field"
                    />
                    <div
                      className={`cs_header_category_wrap cs_light cs_dropdown ${
                        isActiveCategory ? 'cs_mobile_active' : ''
                      }`}
                    >
                      <button
                        className={`cs_header_category_toggle cs_dropdown_btn ${
                          isActiveCategory ? 'active' : ''
                        }`}
                        type="button"
                        onClick={() => setActiveCategory(!isActiveCategory)}
                      >
                        <span>{categories.categoriesTitle}</span>
                        <svg
                          width={10}
                          height={5}
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00002 5C4.88377 5 4.76741 4.95927 4.67866 4.87792L0.13321 0.711272C-0.0444033 0.54846 -0.0444033 0.284816 0.13321 0.122109C0.310823 -0.0405988 0.598436 -0.0407029 0.775936 0.122109L5.00002 3.99417L9.22411 0.122109C9.40172 -0.0407029 9.68933 -0.0407029 9.86683 0.122109C10.0443 0.28492 10.0444 0.548565 9.86683 0.711272L5.32138 4.87792C5.23263 4.95927 5.11627 5 5.00002 5Z"
                            fill="#303030"
                          />
                        </svg>
                      </button>
                      <ul
                        className={`cs_header_category_list cs_mp_0 cs_dropdown_content ${
                          isActiveCategory ? 'active' : ''
                        }`}
                      >
                        {categories.category.map((category, index) => (
                          <li key={index}>
                            <input type="checkbox" name={category.name} />
                            <span>{category.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="cs_header_submit_btn">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.91484 16.976C4.64396 18.712 6.95263 19.7477 9.39783 19.8844C11.843 20.0211 14.2525 19.249 16.164 17.7164L20.1056 21.6731C20.2082 21.7767 20.3303 21.8589 20.4649 21.915C20.5994 21.9711 20.7437 22 20.8895 22C21.0353 22 21.1796 21.9711 21.3141 21.915C21.4487 21.8589 21.5708 21.7767 21.6734 21.6731C21.7769 21.5703 21.859 21.4481 21.9151 21.3134C21.9711 21.1787 22 21.0343 22 20.8884C22 20.7425 21.9711 20.598 21.9151 20.4634C21.859 20.3287 21.7769 20.2064 21.6734 20.1037L17.6655 16.1471C19.0951 14.3978 19.8754 12.2069 19.8737 9.94685C19.8737 7.30878 18.8268 4.77876 16.9633 2.91336C15.0998 1.04797 12.5723 0 9.93688 0C7.30146 0 4.77399 1.04797 2.91046 2.91336C1.04694 4.77876 2.76361e-05 7.30878 2.76361e-05 9.94685C-0.00306236 11.2533 0.252996 12.5473 0.753353 13.754C1.25371 14.9606 1.98841 16.0557 2.91484 16.976ZM4.47161 4.47608C5.92841 3.01782 7.90426 2.19857 9.96448 2.19857C12.0247 2.19857 14.0006 3.01782 15.4574 4.47608C16.9142 5.93435 17.7326 7.91218 17.7326 9.97448C17.7326 12.0368 16.9142 14.0146 15.4574 15.4729C14.0079 16.9238 12.042 17.7389 9.99209 17.7389C7.94221 17.7389 5.9763 16.9238 4.52682 15.4729C3.07734 14.0219 2.26303 12.054 2.26303 10.0021C2.26303 7.95018 3.07734 5.98228 4.52682 4.53134L4.47161 4.47608Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              <div className="cs_main_header_right">
                <button
                  className="cs_mobile_search_toggle cs_mobile_show"
                  type="button"
                  onClick={() => setActiveSearch(!activeSearch)}
                >
                  <img src={topBar.searchIcon} alt="Search Icon" />
                </button>
                <ul className="cs_header_list cs_mp_0">
                  <li>
                    <div className="cs_header_credential_btns">
                      <Link to={topBar.loginUrl}>
                        <img src={topBar.userIcon} alt="User" />
                      </Link>
                      <span>
                        <Link to={topBar.loginUrl}>Log in</Link> /{' '}
                        <Link to={topBar.signupUrl}>Sign Up</Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="cs_cart_btn"
                      onClick={() => setActiveSideHeader(!isactiveSideBar)}
                    >
                      <img src={topBar.cartIcon} alt="Cart" />
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
                      variant={'cs_mobile_show'}
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
          className={`cs_menu_toggle ${isShowMobileMenu && 'active'}`}
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

export default Header1;
