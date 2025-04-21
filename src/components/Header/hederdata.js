// header data
export const menuData = [
  {
    id: 1,
    title: "Home",
    link: "/",
    submenu: [
      { title: "Home V1 - Default", link: "/" },
      { title: "Home V2 - Classic", link: "/home-v2" },
      { title: "Home V3 - Modern", link: "/home-v3" },
    ],
  },
  {
    id: 2,
    title: "Shop",
    link: "/shop",
    megaMenu: true,
    submenu: [
      {
        submenuItems: [
          {
            title: "Shop Variation",
            items: [
              { title: "Shop V1 - Default", link: "/shop" },
              { title: "Shop V2 - Classic", link: "/shop-v2" },
              { title: "Shop V3 - Modern", link: "/shop-v3" },
            ],
          },
          {
            title: "Shop Layout",
            items: [
              {
                title: "With Right Sidebar",
                link: "/shop-right-sidebar",
              },
              {
                title: "Four Column Product",
                link: "/shop-four-column",
              },
              {
                title: "Three Column Product",
                link: "/shop-three-column",
              },
              { title: "Two Column Product", link: "/shop-two-column" },
              {
                title: "List View Left Sidebar",
                link: "/shop-list-view-left-sidebar",
              },
              {
                title: "List View Right Sidebar",
                link: "/shop-list-view-right-sidebar",
              },
              { title: "List View Fullwidth", link: "/shop-list-view" },
              {
                title: "Shop Without Banner",
                link: "/shop-without-banner",
              },
              { title: "Shop With Banner", link: "/shop-with-banner" },
              {
                title: "With Highlight Category",
                link: "/shop-with-highlight-category",
              },
            ],
          },
        ],
      },
      {
        submenuItems: [
          {
            title: "Shop Catalog",
            items: [
              { title: "Catalog - V1", link: "/shop-catalog" },
              { title: "Catalog - V2", link: "/shop-catalog-v2" },
              { title: "Catalog - V3", link: "/shop-catalog-v3" },
            ],
          },
          {
            title: "Offer Catalog",
            items: [
              {
                title: "Flash Sale Catalog - V1",
                link: "/flash-sale-catalog-v1",
              },
              {
                title: "Flash Sale Catalog - V2",
                link: "/flash-sale-Catalog-v2",
              },
            ],
          },
          {
            title: "Filter Type",
            items: [
              {
                title: "Filter Sidebar - V1",
                link: "/shop-v2",
              },
              {
                title: "Filter Sidebar - V2",
                link: "/shop-list-view-left-sidebar",
              },
              {
                title: "Filter Top",
                link: "/shop-v3",
              },
              {
                title: "Drawer Filter",
                link: "/shop",
              },
            ],
          },
        ],
      },
      {
        submenuItems: [
          {
            title: "Page Loading",
            items: [
              { title: "Pagination", link: "/shop" },
              { title: "Load More", link: "/shop-load-more" },
              { title: "Infinity Scroll", link: "/shop-infinity-scroll" },
            ],
          },
          {
            title: "Other Pages",
            items: [
              {
                title: "My Account",
                link: "/my-account",
              },
              {
                title: "Wishlist",
                link: "/wishlist",
              },
              {
                title: "Cart",
                link: "/cart",
              },
              { title: "Checkout", link: "/checkout" },
            ],
          },
        ],
      },
      {
        submenuItems: [
          {
            link: "shop",

            dataSrc: "/assets/images/offer.jpeg",

            bannerTitle: "SUMMER SALE",
            subtitle: "Save 20%",
            buttonText: "Shop Now",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Product",
    link: "/product/:product-details",
    submenu: [
      {
        title: "Product Details V1",
        link: "/product/:product-details",
      },
      {
        title: "Product Details V2",
        link: "/product1/:product-details-v2",
      },
      {
        title: "Product Details V3",
        link: "/product2/:product-details-v3",
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
    submenu: [
      { title: "Default Blog", link: "/blog" },
      { title: "Blog List", link: "/blog-list" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog Grid Sidebar", link: "/blog-grid-sidebar" },
      { title: "Blog Details", link: "/blog-details" },
      {
        title: "Blog Details Right Sidebar",
        link: "/blog-details-right-sidebar",
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    submenu: [
      { title: "About Us", link: "/about" },
      { title: "About Me", link: "/about-me" },
      { title: "Contact", link: "/contact" },
      { title: "Store Location", link: "/store-location" },
      { title: "FAQ", link: "/faq" },
      { title: "404 Error", link: "/404" },
    ],
  },
  { title: "Contact", link: "/contact" },
];

export const categories = {
  categoriesTitle: "All Categories",
  category: [
    {
      href: "/shop-catalog",
      imgSrc: "/assets/images/nav-category/1.jpeg",
      label: "New Arrivals",
    },
    {
      href: "/shop-catalog-v2",
      imgSrc: "/assets/images/nav-category/2.jpeg",
      label: "Flash Sale",
    },
    {
      href: "/shop-catalog-v3",
      imgSrc: "/assets/images/nav-category/3.jpeg",
      label: "Special Offer!",
    },
    {
      href: "/shop-catalog",
      imgSrc: "/assets/images/nav-category/4.jpeg",
      label: "Skincare",
    },
    {
      href: "/shop-catalog-v2",
      imgSrc: "/assets/images/nav-category/5.jpeg",
      label: "Body Care",
    },
    {
      href: "/shop-catalog-v3",
      imgSrc: "/assets/images/nav-category/6.jpeg",
      label: "Haircare",
    },
    {
      href: "/shop-catalog",
      imgSrc: "/assets/images/nav-category/7.jpeg",
      label: "Beauty Tools",
    },
    {
      href: "/shop-catalog-v2",
      imgSrc: "/assets/images/nav-category/10.jpeg",
      label: "Makeup",
    },
    {
      href: "/shop-catalog-v3",
      imgSrc: "/assets/images/nav-category/9.jpeg",
      label: "Face Care",
    },
  ],
};

export const topBar = {
  logo: "/assets/images/logo.svg",
  logoWhite: "/assets/images/logo_white.svg",
  logoUrl: "/",
  categoriesTitle: "All Categories",
  location: "123 Anywhere Street, Anytown USA",
  supportText: "Help Center",
  loginText: "Log in",
  loginUrl: "/login",
  signupText: "Sign Up",
  signupUrl: "/signUp",
  suportLink: "/",
  balance: "82.43",
  wishlist: "Wish List (0)",
  wishlistUrl: "/wishlist",
  myAccount: "My Account",
  myAccountUrl: "my-account",
  facebookLink: "/",
  twitterLink: "/",
  instagramLink: "/",
  searchPlaceholder: "Search for products",
  searchIcon: "/assets/images/icons/search.svg",
  searchIconWhite: "/assets/images/icons/search_white.svg",
  userIcon: "/assets/images/icons/user.svg",
  cartIcon: "/assets/images/icons/bag.svg",
  userIconWhite: "/assets/images/icons/user_white.svg",
  wishListWhiteIcon: "/assets/images/icons/love_white.svg",
  cardIconWhite: "/assets/images/icons/bag_white.svg",
  cartItems: 3,
  cartTotal: "54.97",
  phon: "+99327456",
  suportText: "24/7 Support Center",
  languageOptions: [
    {
      code: "eng",
      name: "Eng - English",
      icon: "/assets/images/icons/language_icon_1.svg",
      url: "#",
    },
    {
      code: "ar",
      name: "Ar - الترجمة",
      icon: "/assets/images/icons/language_icon_2.svg",
      url: "#",
    },
  ],
};

export const sidebarData = {
  cartTitle: "Your Cart",
  cartItems: [
    {
      name: "Rosewater Hydrating Mist",
      image: "/assets/images/product_1.png",
      quantity: 1,
      price: 19.99,
    },
    {
      name: "Charcoal Detoxifying Mask",
      image: "/assets/images/product_2.png",
      quantity: 1,
      price: 14.99,
    },
    {
      name: "Rosewater Hydrating Mist",
      image: "/assets/images/product_3.png",
      quantity: 0,
      price: 19.99,
    },
  ],
  subtotal: 54.97,
  cartUrl: "/cart",
  checkoutUrl: "/checkout",
};
