import React from "react";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ data, leftSideBar }) => {
  return (
    <div className="col-lg-4">
      <div
        className={`cs_sidebar cs_accent_light_bg ${
          leftSideBar ? "cs_left_sidebar" : "cs_right_sidebar"
        }`}
      >
        <div className="cs_sidebar_item widget_search">
          <form className="cs_sidebar_search" action="#">
            <input type="text" placeholder="Search..." />
            <button className="cs_sidebar_search_btn">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91484 16.976C4.64396 18.712 6.95263 19.7477 9.39783 19.8844C11.843 20.0211 14.2525 19.249 16.164 17.7164L20.1056 21.6731C20.2082 21.7767 20.3303 21.8589 20.4649 21.915C20.5994 21.9711 20.7437 22 20.8895 22C21.0353 22 21.1796 21.9711 21.3141 21.915C21.4487 21.8589 21.5708 21.7767 21.6734 21.6731C21.7769 21.5703 21.859 21.4481 21.9151 21.3134C21.9711 21.1787 22 21.0343 22 20.8884C22 20.7425 21.9711 20.598 21.9151 20.4634C21.859 20.3287 21.7769 20.2064 21.6734 20.1037L17.6655 16.1471C19.0951 14.3978 19.8754 12.2069 19.8737 9.94685C19.8737 7.30878 18.8268 4.77876 16.9633 2.91336C15.0998 1.04797 12.5723 0 9.93688 0C7.30146 0 4.77399 1.04797 2.91046 2.91336C1.04694 4.77876 2.76361e-05 7.30878 2.76361e-05 9.94685C-0.00306236 11.2533 0.252996 12.5473 0.753353 13.754C1.25371 14.9606 1.98841 16.0557 2.91484 16.976ZM4.47161 4.47608C5.92841 3.01782 7.90426 2.19857 9.96448 2.19857C12.0247 2.19857 14.0006 3.01782 15.4574 4.47608C16.9142 5.93435 17.7326 7.91218 17.7326 9.97448C17.7326 12.0368 16.9142 14.0146 15.4574 15.4729C14.0079 16.9238 12.042 17.7389 9.99209 17.7389C7.94221 17.7389 5.9763 16.9238 4.52682 15.4729C3.07734 14.0219 2.26303 12.054 2.26303 10.0021C2.26303 7.95018 3.07734 5.98228 4.52682 4.53134L4.47161 4.47608Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="cs_sidebar_item cs_widget_categories">
          <h4 className="cs_sidebar_widget_title cs_secondary_font cs_normal cs_fs_18">
            Categories
          </h4>
          <ul>
            {data.categories.map((category, index) => (
              <li key={index} className="cat-item">
                <Link to="#">{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_sidebar_item">
          <h4 className="cs_sidebar_widget_title cs_secondary_font cs_normal cs_fs_18">
            Recent Posts
          </h4>
          <ul className="cs_recent_posts cs_mp_0">
            {data.recentPosts.map((post, index) => (
              <li key={index}>
                <div className="cs_recent_post">
                  <div className="cs_recent_post_info">
                    <h3 className="cs_recent_post_title cs_fs_24 cs_medium cs_secondary_font">
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                    <div className="cs_recent_post_date">
                      <i style={{ display: "flex" }}>
                        <FaClock />
                      </i>{" "}
                      Published on {post.date}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_sidebar_item widget_tag_cloud">
          <h4 className="cs_sidebar_widget_title cs_secondary_font cs_normal cs_fs_18">
            Tags
          </h4>
          <div className="cs_tagcloud">
            {data.tags.map((tag, index) => (
              <Link key={index} to="#" className="tag-cloud-link">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
