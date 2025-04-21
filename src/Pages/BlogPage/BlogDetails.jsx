import HeadingPath from "../../components/Heading/HeadingPath";
import Sidebar from "./BlogSidebar";
import BlogCta from "./BlogCta";
import {
  FaClock,
  FaCommentDots,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spacing from "../../components/Spacing";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Blog", url: "", active: false },
  {
    label: "Summer Beauty Essentials for Every Skin Type",
    url: "",
    active: true,
  },
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
  blogDetails: {
    date: "May 5, 2024",
    author: "Diana Jones",
    comments: 354,
    title: "Summer Beauty Essentials<br> for Every Skin Type",
    imageUrl: "/assets/images/blog/blog_details_1.jpeg",
    content: [
      {
        type: "paragraph",
        text: "Summer is here, and it's time to let your skin bask in the sun's warm embrace. But as the seasons change, so do the needs of your skin. The scorching sun and rising temperatures call for a beauty regimen that caters to your skin's unique requirements. Whether you have dry, oily, sensitive, or combination skin, we've got you covered with the must-have summer beauty essentials.",
      },
      {
        type: "section",
        title: "For Dry Skin",
        items: [
          {
            title: "Hydrating Sunscreen",
            description:
              "Opt for a broad-spectrum sunscreen with added moisture to protect your skin from UV rays and keep it hydrated.",
          },
          {
            title: "Lightweight Moisturizer",
            description:
              "Swap your heavy winter moisturizer for a lighter, hydrating lotion to keep your skin feeling fresh.",
          },
          {
            title: "Aloe Vera Gel",
            description:
              "Aloe vera is a natural skin-soother. Keep a bottle handy for instant relief from sunburn and irritation.",
          },
        ],
      },
      {
        type: "section",
        title: "For Oily Skin",
        items: [
          {
            title: "Oil-Free Sunscreen",
            description:
              "Choose a non-comedogenic sunscreen that won't clog your pores and will control excess oil.",
          },
          {
            title: "Mattifying Primer",
            description:
              "Apply a mattifying primer before your makeup to keep shine at bay throughout the day.",
          },
          {
            title: "Oil-Absorbing Blotting Papers",
            description:
              "These are a lifesaver for keeping excess oil in check, especially in the T-zone.",
          },
        ],
      },
      {
        type: "section",
        title: "For Sensitive Skin",
        items: [
          {
            title: "Mineral Sunscreen",
            description:
              "Go for a mineral-based sunscreen with zinc oxide or titanium dioxide, which is less likely to cause irritation.",
          },
          {
            title: "Gentle Cleanser",
            description:
              "Use a mild, fragrance-free cleanser to prevent further sensitivity.",
          },
          {
            title: "Hyaluronic Acid Serum",
            description:
              "Hyaluronic acid is a moisture magnet, perfect for soothing sensitive skin.",
          },
        ],
      },
      {
        type: "section",
        title: "For Combination Skin",
        items: [
          {
            title: "Dual-Purpose Sunscreen",
            description:
              "Look for a sunscreen that offers both hydration and oil control to cater to different areas of your face.",
          },
          {
            title: "Balancing Toner",
            description:
              "A toner can help balance the skin and keep oil and dryness in check",
          },
          {
            title: "Multi-Masking",
            description:
              "Use different masks on different areas of your face. Clay masks for oil-prone zones and hydrating masks for dry spots",
          },
        ],
      },
      {
        type: "section",
        title: "General Essentials for All Skin Types",
        items: [
          {
            title: "Lip Balm with SPF",
            description:
              "Protect your lips from sun damage with a lip balm that has built-in SPF.",
          },
          {
            title: "Antioxidant Serum",
            description:
              "Combat free radicals and premature aging with an antioxidant serum",
          },
          {
            title: "Setting Spray",
            description:
              "A setting spray helps keep your makeup in place even in the summer heat.",
          },
        ],
      },
    ],
    quote:
      "Like a sunflower following the sun, let your skin bask in the radiance of summer. Embrace the season's beauty with the right essentials for your unique glow.",
  },

  tags: [
    "Summer Skincare",
    "Sunscreen Tips",
    "Skin Type Solutions",
    "Seasonal Beauty",
  ],

  ctaData: {
    title: "Your beauty journey is our journey",
    subtitle:
      "Join us, explore our handpicked selection of products, and let's embark on a radiant experience together.",
    buttonText: "JOIN THE GLOWIFY COMMUNITY",
    buttonLink: "#",
    imageUrl: "/assets/images/cta_img_1.png",
  },

  socialLinks: [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaXTwitter />, url: "https://twitter.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://whatsapp.com" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ],

  comments: [
    {
      author: "Lily Belle",
      avatar: "/assets/images/avatar_1.jpeg",
      date: "Sept 12, 2024",
      text: "Thank you for these fantastic tips! As someone with combination skin, I'm always struggling to find the right products. This article has given me some great ideas for a summer-ready skincare routine.",
      replies: [
        {
          author: "Sarah Taylor",
          avatar: "/assets/images/avatar_2.jpeg",
          date: "Jan 24, 2023 at 9:59 am",
          text: "Thanks bro 🙂",
        },
      ],
    },
    {
      author: "Chris Sunshine",
      avatar: "/assets/images/avatar_1.jpeg",
      date: "July 22, 2023",
      text: "I have sensitive skin, and summer can be a nightmare for me. I appreciate the recommendations for a mineral sunscreen and a hyaluronic acid serum. Can't wait to try these out and enjoy the sun without worry!",
      replies: [],
    },
  ],

  commentForm: {
    title: "Leave a comment on this post",
    buttonText: "POST COMMENT",
    placeholderText: "",
  },
};
const BlogDetails = () => {
  PageTitle("/blog-details");
  return (
    <>
      {/* Start Breadcamp */}
      <Spacing lg={30} md={40} />
      <div className="container">
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
      {/* End Breadcamp */}
      <Spacing lg={30} md={30} />
      <div className="container">
        <div className="row cs_gap_y_40">
          <Sidebar data={blogData.sidebarData} />
          <div className="col-lg-8">
            <div className="cs_blog_details cs_light">
              <div className="cs_post_meta">
                <span>
                  <i style={{ display: "flex" }}>
                    <FaClock />
                  </i>{" "}
                  {blogData.blogDetails.date}
                </span>
                <span>
                  <i style={{ display: "flex" }}>
                    <FaUserCircle />
                  </i>{" "}
                  {blogData.blogDetails.author}
                </span>
                <Link to="#">
                  <i style={{ display: "flex" }}>
                    <FaCommentDots />
                  </i>{" "}
                  {blogData.blogDetails.comments} Comments
                </Link>
              </div>
              <h1
                dangerouslySetInnerHTML={{ __html: blogData.blogDetails.title }}
              />
              <img src={blogData.blogDetails.imageUrl} alt="Blog Details" />
              {blogData.blogDetails.content.map((section, index) =>
                section.type === "paragraph" ? (
                  <p key={index}>{section.text}</p>
                ) : (
                  <div key={index}>
                    <h2>{section.title}</h2>
                    <ul>
                      {section.items.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
              <blockquote>{blogData.blogDetails.quote}</blockquote>
            </div>
            <Spacing lg={60} md={80} />
            <div className="cs_post_share_wrap">
              <div className="cs_tagcloud">
                {blogData.tags.map((tag, index) => (
                  <Link to="#" className="tag-cloud-link" key={index}>
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="cs_social_share">
                {blogData.socialLinks.map((social, index) => (
                  <Link
                    to={social.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i style={{ display: "flex" }}>{social.icon}</i>
                  </Link>
                ))}
              </div>
            </div>
            <div id="comments" className="comments-area">
              <h2 className="comments-title">Comments</h2>
              <ol className="comment-list">
                {blogData.comments.map((comment, index) => (
                  <li key={index} className="comment">
                    <div className="comment-body">
                      <div className="comment-author vcard">
                        <img
                          className="avatar"
                          src={comment.avatar}
                          alt="Author"
                        />
                        <Link to="#" className="url">
                          {comment.author}
                        </Link>
                      </div>
                      <div className="comment-meta">
                        <Link to="#">{comment.date}</Link>
                      </div>
                      <p>{comment.text}</p>
                      <div className="reply">
                        <Link className="comment-reply-link" to="#">
                          Reply
                        </Link>
                      </div>
                    </div>
                    {comment.replies.length > 0 && (
                      <ol className="children">
                        {comment.replies.map((reply, replyIndex) => (
                          <li key={replyIndex} className="comment">
                            <div className="comment-body">
                              <div className="comment-author vcard">
                                <img
                                  className="avatar"
                                  src={reply.avatar}
                                  alt="Author"
                                />
                                <Link to="#" className="url">
                                  {reply.author}
                                </Link>
                              </div>
                              <div className="comment-meta">
                                <Link to="#">{reply.date}</Link>
                              </div>
                              <p>{reply.text}</p>
                              <div className="reply">
                                <Link className="comment-reply-link" to="#">
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <div className="cs_post_reply cs_accent_light_bg cs_radius_10">
              <h3 className="cs_secondary_font cs_fs_24 cs_medium">
                {blogData.commentForm.title}
              </h3>
              <textarea
                cols={30}
                rows={5}
                placeholder={blogData.commentForm.placeholderText}
                defaultValue=""
              />
              <button className="cs_btn cs_style_1 cs_medium">
                <span>{blogData.commentForm.buttonText}</span>
              </button>
            </div>
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

export default BlogDetails;
