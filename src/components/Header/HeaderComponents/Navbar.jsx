import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  showMenu,
  handleMenuClick,
  menuData,
  isShowMobileMenu,
  setIsShowMobileMenu,
  openMobileSubmenuIndex,
  openMobileMegaMenuIndex,
  handleOpenMobileListSubmenu,
  handleOpenMobileSubmenu,
}) => {
  const toggleSubmenu = index => {
    handleOpenMobileSubmenu(index === openMobileSubmenuIndex ? null : index);
  };

  const toggleMegaMenu = index => {
    handleOpenMobileListSubmenu(
      index === openMobileMegaMenuIndex ? null : index,
    );
  };

  return (
    <nav className={`cs_nav ${showMenu ? 'cs_mobile_active' : ''}`}>
      <span
        className="cs_mobile_tab_btn cs_mobile_show"
        onClick={handleMenuClick}
      >
        Menu
      </span>
      <ul className="cs_nav_list">
        {menuData?.map((menuItem, index) => (
          <li
            key={index}
            className={`${menuItem.submenu ? 'menu-item-has-children ' : ''}${
              menuItem.megaMenu ? 'cs_mega_menu' : ''
            }`}
          >
            <Link
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              to={menuItem.link}
            >
              {menuItem.title}
            </Link>
            {menuItem.submenu && (
              <>
                <ul
                  className={`${menuItem.megaMenu ? 'cs_mega_wrapper' : ''}`}
                  style={{
                    display:
                      openMobileSubmenuIndex === index ? 'block' : 'none',
                  }}
                >
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="menu-item-has-children">
                      {subItem.submenuItems ? (
                        subItem.submenuItems.map((titleGroup, titleIndex) => (
                          <React.Fragment key={titleIndex}>
                            {titleGroup.title ? (
                              <>
                                <h4>{titleGroup.title}</h4>
                                <ul
                                  className={`${
                                    openMobileMegaMenuIndex === index
                                      ? 'active'
                                      : ''
                                  }`}
                                  style={{
                                    display:
                                      openMobileMegaMenuIndex === index
                                        ? 'block'
                                        : 'none',
                                  }}
                                >
                                  {titleGroup.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <Link
                                        onClick={() =>
                                          setIsShowMobileMenu(!isShowMobileMenu)
                                        }
                                        to={item.link}
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                <span
                                  className={`cs_munu_dropdown_toggle ${
                                    openMobileMegaMenuIndex === index
                                      ? 'active'
                                      : ''
                                  }`}
                                  onClick={() => toggleMegaMenu(index)}
                                >
                                  <span></span>
                                </span>
                              </>
                            ) : (
                              <Link
                                to={titleGroup.link}
                                className="cs_banner cs_style_5 cs_accent_light_bg cs_radius_10 overflow-hidden position-relative cs_bg_filed"
                                style={{
                                  backgroundImage: `url(${titleGroup.dataSrc})`,
                                }}
                              >
                                <div className="cs_banner_text">
                                  <p className="cs_fs_24 cs_white_color cs_medium">
                                    {titleGroup.bannerTitle}
                                  </p>
                                  <h2 className="cs_fs_54 cs_white_color cs_normal cs_secondary_font">
                                    {titleGroup.subtitle}
                                  </h2>
                                  <span className="cs_banner_lavel cs_accent_strong_bg cs_white_color cs_fs_18 cs_radius_5">
                                    {titleGroup.buttonText}
                                  </span>
                                </div>
                              </Link>
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <>
                          <Link
                            onClick={() =>
                              setIsShowMobileMenu(!isShowMobileMenu)
                            }
                            to={subItem.link}
                          >
                            {subItem.title}
                          </Link>
                          {subItem.items && (
                            <ul>
                              {subItem.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    onClick={() =>
                                      setIsShowMobileMenu(!isShowMobileMenu)
                                    }
                                    to={item.link}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <span
                  className={`cs_munu_dropdown_toggle ${
                    openMobileSubmenuIndex === index ? 'active' : ''
                  }`}
                  onClick={() => toggleSubmenu(index)}
                >
                  <span></span>
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
