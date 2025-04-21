import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePages/HomePage";
import Layout1 from "./components/Layout/Layout1";
import HomeV2 from "./Pages/HomePages/HomeV2";
import Layout3 from "./components/Layout/Layout3";
import HomeV3 from "./Pages/HomePages/HomeV3";
import ShopPage from "./Pages/ShopPages";
import ShopV2 from "./Pages/ShopPages/ShopV2";
import ShopV3 from "./Pages/ShopPages/ShopV3";
import WithRightSidebar from "./Pages/ShopPages/WithRightSidebar";
import FourColumnProduct from "./Pages/ShopPages/FourColumnProduct";
import ThreeColumnProduct from "./Pages/ShopPages/ThreeColumnProduct";
import TwoColumnProduct from "./Pages/ShopPages/TwoColumnProduct";
import ListViewLeftSidebar from "./Pages/ShopPages/ListViewLeftSidebar";
import ListViewRightSidebar from "./Pages/ShopPages/ListViewRightSidebar";
import ListViewFullwidth from "./Pages/ShopPages/ListViewFullwidth";
import ShopWithoutBanner from "./Pages/ShopPages/ShopWithoutBanner";
import ShopWithBanner from "./Pages/ShopPages/ShopWithBanner";
import WithHighlightCategory from "./Pages/ShopPages/WithHighlightCategory";
import ShopCatalog from "./Pages/ShopPages/ShopCatalog";
import ShopCatalog1 from "./Pages/ShopPages/ShopCatalog/ShopCatalog1";
import ShopCatalog2 from "./Pages/ShopPages/ShopCatalog/ShopCatalog2";
import OfferCatalog from "./Pages/ShopPages/OfferCatalog";
import FlashSaleCatalogV2 from "./Pages/ShopPages/OfferCatalog/FlashSaleCatalogV2";
import PageLoading from "./Pages/ShopPages/PageLoading";
import InfinityScroll from "./Pages/ShopPages/PageLoading/InfinityScroll";
import MyAccount from "./Pages/ShopPages/OtherPages/MyAccount";
import Login from "./Pages/ShopPages/Login";
import Signup from "./Pages/Signup";
import Wishlist from "./Pages/ShopPages/OtherPages/Wishlist";
import Cart from "./Pages/ShopPages/OtherPages/Cart";
import Checkout from "./Pages/ShopPages/OtherPages/Checkout";
import ProductDetails from "./Pages/ProductDetails";
import ProductDetailsV2 from "./Pages/ProductDetails/ProductDetailsV2";
import ProductDetailsV3 from "./Pages/ProductDetails/ProductDetailsV3";
import DefaultBlog from "./Pages/BlogPage";
import BlogList from "./Pages/BlogPage/BlogList";
import BlogGrid from "./Pages/BlogPage/BlogGrid";
import BlogGridWithSideBar from "./Pages/BlogPage/BlogGridWithSideBar";
import BlogDetails from "./Pages/BlogPage/BlogDetails";
import BlogDetailsRightSidebar from "./Pages/BlogPage/BlogDetailsRightSidebar";
import About from "./Pages/AboutPage";
import AboutMe from "./Pages/AboutPage/AboutMe";
import Contact from "./Pages/ContactPage";
import StoreLocation from "./Pages/AboutPage/StoreLocation";
import Fqa from "./Pages/AboutPage/Fqa";
import ErrorPage from "./Pages/AboutPage/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-four-column" element={<FourColumnProduct />} />
          <Route path="/shop-three-column" element={<ThreeColumnProduct />} />
          <Route path="/shop-two-column" element={<TwoColumnProduct />} />
          <Route
            path="/shop-list-view-left-sidebar"
            element={<ListViewLeftSidebar />}
          />
          <Route
            path="/shop-list-view-right-sidebar"
            element={<ListViewRightSidebar />}
          />
          <Route path="/shop-list-view" element={<ListViewFullwidth />} />
          <Route path="/shop-catalog" element={<ShopCatalog />} />
          <Route path="/shop-catalog-v2" element={<ShopCatalog1 />} />
          <Route path="/shop-catalog-v3" element={<ShopCatalog2 />} />
          <Route path="/flash-sale-catalog-v1" element={<OfferCatalog />} />
          <Route path="/shop-load-more" element={<PageLoading />} />
          <Route path="/shop-infinity-scroll" element={<InfinityScroll />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/product/:product-details"
            element={<ProductDetails />}
          />
          <Route
            path="/product1/:product-details-v2"
            element={<ProductDetailsV2 />}
          />
          <Route
            path="/product2/:product-details-v3"
            element={<ProductDetailsV3 />}
          />
          <Route path="/blog" element={<DefaultBlog />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-grid-sidebar" element={<BlogGridWithSideBar />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route
            path="/blog-details-right-sidebar"
            element={<BlogDetailsRightSidebar />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store-location" element={<StoreLocation />} />
          <Route path="/faq" element={<Fqa />} />
        </Route>
        <Route path="/" element={<Layout1 />}>
          <Route path="/home-v2" element={<HomeV2 />} />
          <Route path="/shop-v2" element={<ShopV2 />} />
          <Route path="/shop-right-sidebar" element={<WithRightSidebar />} />
          <Route path="/shop-without-banner" element={<ShopWithoutBanner />} />
          <Route path="/shop-with-banner" element={<ShopWithBanner />} />
          <Route
            path="/shop-with-highlight-category"
            element={<WithHighlightCategory />}
          />
          <Route
            path="/flash-sale-Catalog-v2"
            element={<FlashSaleCatalogV2 />}
          />
        </Route>
        <Route path="/" element={<Layout3 />}>
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/shop-v3" element={<ShopV3 />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
