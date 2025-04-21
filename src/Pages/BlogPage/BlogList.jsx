import { useState } from "react";
import BreadCamp from "../../components/BreadCamp";
import Sidebar from "./BlogSidebar";
import BlogCta from "./BlogCta";
import Pagination from "../../components/AllProductsSection/Pagination";
import { FaClock } from "react-icons/fa6";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Wishlist", url: "wishlist", active: true },
];
const blogData = {
  sidebarData: {
    categories: [
      "Beauty Tips",
      "Skincare",
      "PureGlow",
      "Makeup Trends",
      "Haircare",
      "Style Inspiration",
    ],
    recentPosts: [
      {
        title: "Unlocking the Secrets of Youthful Skin",
        date: "October 3, 2024",
        link: "/blog-details",
      },
      {
        title: "Glow Up Your Makeup Game",
        date: "Sept 22, 2024",
        link: "/blog-details",
      },
    ],
    tags: ["Beauty", "Skincare", "Makeup", "Haircare", "Fashion"],
  },

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
      category: "SKINCARE",
      title: "10 Skincare Tips for a Healthy Glow",
      subtitle:
        "Here are 10 skincare tips that will guide you towards achieving that enviable complexion. Follow these steps diligently to cleanse, nourish, and protect your skin.",
      date: "March 15, 2024",
      author: "Lisa Dominic",
      imgUrl: "/assets/images/blog/post_11.jpeg",
      link: "/blog-details",
    },
    {
      category: "MAKEUP",
      title: "The Ultimate Guide to Makeup Application",
      subtitle:
        "Learn the essential steps to achieve a flawless makeup look. This guide covers everything from foundation to the final touches.",
      date: "March 15, 2024",
      author: "Lisa Dominic",
      imgUrl: "/assets/images/blog/post_12.jpeg",
      link: "/blog-details",
    },
    {
      category: "SKINCARE",
      title: "How to Choose the Perfect Foundation Shade",
      subtitle:
        "Find out how to select the best foundation shade for your skin tone. This guide simplifies the process with practical tips.",
      date: "March 15, 2024",
      author: "Lisa Dominic",
      imgUrl: "/assets/images/blog/post_14.jpeg",
      link: "/blog-details",
    },
  ],
};
const BlogList = () => {
  PageTitle("Blog-List");
  const [currentPage, setCurrentPage] = useState(2);
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
          <Sidebar data={blogData.sidebarData} />
          <div className="col-lg-8">
            <ul className="cs_blog_list_2 cs_mp_0">
              {blogData.blogPosts.map((post, index) => (
                <li key={index}>
                  <div className="cs_post cs_style_2 cs_radius_8">
                    <Link
                      to={post.link}
                      className="cs_post_thumb cs_bg_filed cs_radius_10"
                    >
                      <img src={post.imgUrl} alt="Thumbnail" />
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                        {post.category}
                      </div>
                      <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                        <Link to={post.link}>{post.title}</Link>
                      </h2>
                      <p className="cs_post_subtitle cs_light">
                        {post.subtitle}
                      </p>
                      <div className="cs_post_meta cs_light">
                        <span>
                          <i style={{ display: "flex" }}>
                            {" "}
                            <FaClock />
                          </i>{" "}
                          {post.date}
                        </span>
                        <span>
                          <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.75"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 0C13.1867 0 17 3.81331 17 8.5C17 13.1867 13.1867 17 8.5 17C3.81331 17 0 13.1867 0 8.5C0 3.81331 3.81331 0 8.5 0ZM13.8045 12.7501C12.5571 14.3037 10.6427 15.3 8.5 15.3C6.35728 15.3 4.44275 14.3036 3.19541 12.7499C4.44275 11.1963 6.35723 10.2 8.4999 10.2C10.6426 10.2 12.5571 11.1964 13.8045 12.7501ZM8.5 8.5C9.90837 8.5 11.05 7.35832 11.05 5.95C11.05 4.54168 9.90837 3.4 8.5 3.4C7.09168 3.4 5.95 4.54168 5.95 5.95C5.95 7.35832 7.09168 8.5 8.5 8.5Z"
                              fill="#303030"
                            />
                          </svg>

                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Spacing lg={40} md={70} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Spacing lg={70} md={120} />
      {/* Start CTA Section */}
      <BlogCta data={blogData.ctaData} />
      <Spacing lg={70} md={120} />
      {/* End CTA Section */}
    </>
  );
};

export default BlogList;
