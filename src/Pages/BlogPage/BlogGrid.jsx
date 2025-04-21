import { useState } from "react";
import BlogCta from "./BlogCta";
import BreadCamp from "../../components/BreadCamp";
import Pagination from "../../components/AllProductsSection/Pagination";
import { Link } from "react-router-dom";
import Spacing from "../../components/Spacing";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Wishlist", url: "wishlist", active: true },
];
const blogData = {
  ctaData: {
    title: "Your beauty journey is our journey",
    subtitle:
      "Join us, explore our handpicked selection of products, and let's embark on a radiant experience together.",
    buttonText: "JOIN THE GLOWIFY COMMUNITY",
    buttonLink: "#",
    imageUrl: "/assets/images/cta_img_1.png",
  },

  blogPosts: [
    {
      id: 1,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Elevate Your Wardrobe: Seasonal Style Essentials",
      imgSrc: "/assets/images/blog/post_7.jpeg",
      link: "/blog-details",
    },
    {
      id: 2,
      category: "SKINCARE",
      author: "Fabian Wright",
      date: "April 20, 2024",
      title: "Elevate Your Wardrobe: Seasonal Style Essentials",
      imgSrc: "/assets/images/blog/post_8.jpeg",
      link: "/blog-details",
    },
    {
      id: 3,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_10.jpeg",
      link: "/blog-details",
    },
    {
      id: 4,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_11.jpeg",
      link: "/blog-details",
    },
    {
      id: 5,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_12.jpeg",
      link: "/blog-details",
    },
    {
      id: 6,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_13.jpeg",
      link: "/blog-details",
    },
    {
      id: 7,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_14.jpeg",
      link: "/blog-details",
    },
    {
      id: 8,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_15.jpeg",
      link: "/blog-details",
    },
    {
      id: 9,
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "Summer Beauty Essentials for Every Skin Type",
      imgSrc: "/assets/images/blog/post_16.jpeg",
      link: "/blog-details",
    },
  ],
};
const BlogGrid = () => {
  PageTitle("Blog-Grid");
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_6.jpeg"
        title="Explore the World of Beauty <br />and Fashion"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      <Spacing lg={70} md={70} />
      <div className="container">
        <div className="row cs_gap_y_40">
          {blogData.blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="cs_post cs_style_2 cs_type_1 cs_radius_8">
                <Link
                  to={post.link}
                  className="cs_post_thumb cs_bg_filed cs_radius_8"
                >
                  <img src={post.imgSrc} alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    {post.category}
                  </div>
                  <div className="cs_post_meta cs_light cs_primary_color">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <Spacing lg={40} md={80} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Spacing lg={70} md={120} />
      {/* Start CTA Section */}
      <BlogCta data={blogData.ctaData} />
      <Spacing lg={70} md={120} />
      {/* End CTA Section */}
    </>
  );
};

export default BlogGrid;
