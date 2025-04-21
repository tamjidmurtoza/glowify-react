import React from "react";
import HeroSection1 from "../../components/HeroSection/HeroSection1";
import Spacing from "../../components/Spacing";
import FeatureSection1 from "../../components/FeaturedSection/FeatureSection1";
import BannerSection1 from "../../components/BannerSection/BannerSection1";
import SaleSection1 from "../../components/SaleSection/SaleSection1";
import Section from "../../components/Section";
import VideoBlock from "../../components/VideoBlock";
import NewStore from "../../components/StoreSection/NewStore";
import ProductSection from "../../components/ProductSection";
import BannerSection2 from "../../components/BannerSection/BannerSection2";
import FAQSection1 from "../../components/FAQSection/FAQSection1";
import BlogSection1 from "../../components/BlogSection/BlogSection1";
import { PageTitle } from "../../Helper/PageTitle";

const heroData = {
  backgroundImage: "/assets/images/hero_bg_2.jpeg",
  title: "Discover Your Glow",
  subtitle:
    "Transform Your Beauty Routine with Premium Products. Shop Now and Embrace Your Radiance!",
  buttonText: "Shop Now",
  buttonLink: "/shop",
  starShape1:
    "M0.841694 20.8361L7.15422 19.0283C9.99692 18.2251 12.5864 16.7043...",
  starShape2:
    "M0.841694 20.8361L7.15422 19.0283C9.99692 18.2251 12.5864 16.7043...",
};

const featuresData = [
  {
    title: "Quality Assurance",
    iconUrl: "/assets/images/icons/feature_icon_1.svg",
  },
  {
    title: "Customer Satisfaction",
    iconUrl: "/assets/images/icons/feature_icon_2.svg",
  },
  {
    title: "Trust and Reliability",
    iconUrl: "/assets/images/icons/feature_icon_3.svg",
  },
  {
    title: "Personalization",
    iconUrl: "/assets/images/icons/feature_icon_4.svg",
  },
  {
    title: "Continuous Improvement",
    iconUrl: "/assets/images/icons/feature_icon_5.svg",
  },
];

const bannersData = [
  {
    link: "/shop",
    style: "cs_style_4",
    imageUrl: "/assets/images/banner/banner_img_4.jpeg",
    offerText: "LIMITED TIME OFFER",
    title: "Buy 2 <br>Get 1",
    label: null, // no label for this banner
  },
  {
    link: "/shop",
    style: "cs_style_5",
    imageUrl: "/assets/images/banner/banner_img_5.jpeg",
    offerText: "SUMMER SALE",
    title1: "Save 20%",
    title2: "",
    label: "on Skincare Products", // with label for this banner
  },
];

const saleData = {
  sectionHeading: "TRENDING PRODUCTS",
  productSliderData: [
    {
      image: "/assets/images/product_21.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Silky Smooth Shampoo",
      price: "$19.99",
      rating: 2.7,
      sold: 523,
    },
    {
      image: "/assets/images/product_22.png",
      url: "/shop",
      category: "FRAGRANCE",
      title: "Luxury Perfume",
      price: "$89.99",
      rating: 3.3,
      sold: 157,
    },
    {
      image: "/assets/images/product_23.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Velvet Matte Lipstick",
      price: "$12.99",
      rating: 3.8,
      sold: 712,
    },
    {
      image: "/assets/images/product_24.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Coconut Body Lotion",
      price: "$24.99",
      rating: 4.6,
      sold: 308,
    },
    {
      image: "/assets/images/product_25.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Hydrating Face Cream",
      price: "$34.99",
      rating: 2.9,
      sold: 620,
    },
  ],
};

const videoData = {
  title: "DISCOVER THE SECRETS OF GLOWING SKIN",
  videoUrl: "https://www.youtube.com/embed/9NwvV67w4HQ",
  backgroundImage: "/assets/images/video_block_bg.jpeg",
};

const newStoreData = {
  sectionTitle: "YOU MUST HAVE THIS",
  productData: [
    {
      image: "/assets/images/product_25.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Hydrating Face Cream",
      price: "$34.99",
      rating: 2.9,
      sold: 620,
    },
    {
      image: "/assets/images/product_26.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Nourishing Hair Oil",
      price: "$15.99",
      rating: 4.2,
      sold: 473,
    },
    {
      image: "/assets/images/product_27.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Long-Lasting Foundation",
      price: "$29.99",
      rating: 4.5,
      sold: 291,
    },
    {
      image: "/assets/images/product_28.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Moisturizing Body Wash",
      price: "$18.99",
      rating: 4.0,
      sold: 389,
    },
    {
      image: "/assets/images/product_29.png",
      url: "/shop",
      category: "FRAGRANCE",
      title: "Summer Breeze Perfume",
      price: "$54.99",
      rating: 3.9,
      sold: 202,
    },
    {
      image: "/assets/images/product_30.png",
      url: "/shop",
      category: "MAKEUP",
      title: "Waterproof Mascara",
      price: "$11.99",
      rating: 4.1,
      sold: 512,
    },
    {
      image: "/assets/images/product_31.png",
      url: "/shop",
      category: "SKINCARE",
      title: "Anti-Aging Serum",
      price: "$39.99",
      rating: 4.4,
      sold: 267,
    },
    {
      image: "/assets/images/product_32.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Volumizing Shampoo",
      price: "$22.99",
      rating: 4.3,
      sold: 453,
    },
    {
      image: "/assets/images/product_33.png",
      url: "/shop",
      category: "BODYCARE",
      title: "Lavender Body Scrub",
      price: "$27.99",
      rating: 4.7,
      sold: 348,
    },
    {
      image: "/assets/images/product_34.png",
      url: "/shop",
      category: "HAIRCARE",
      title: "Anti-Aging Serum",
      price: "$85.99",
      rating: 3.6,
      sold: 872,
    },
  ],
};

const productData = [
  {
    id: 1,
    imageUrl: "/assets/images/banner/home_2_banner_1.jpg",
    linkUrl: "/shop",
    altText: "Banner 1",
  },
  {
    id: 2,
    imageUrl: "/assets/images/banner/home_2_banner_2.jpg",
    linkUrl: "/shop",
    altText: "Banner 2",
  },
  {
    id: 3,
    imageUrl: "/assets/images/banner/home_2_banner_3.jpg",
    linkUrl: "/shop",
    altText: "Banner 3",
  },
  {
    id: 4,
    imageUrl: "/assets/images/banner/home_2_banner_4.jpg",
    linkUrl: "/shop",
    altText: "Banner 4",
  },
];

const bannerData2 = {
  heading: "Shop Now and<br> Unleash Your<br> Inner Glow!",
  bannerImage: "/assets/images/banner/banner_img_6.png",
  lineShape: "/assets/images/icons/line_shape.svg",
  brands: [
    "/assets/images/brand_1.svg",
    "/assets/images/brand_2.svg",
    "/assets/images/brand_3.svg",
    "/assets/images/brand_4.svg",
    "/assets/images/brand_5.svg",
    "/assets/images/brand_6.svg",
  ],
};

const FAQData = {
  sectionTitle: "Got Questions? We've Got Answers!",
  faqData: [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
    },
  ],
};

const blogData = {
  sectionTitle: "EXPERT TIPS, TRENDS, AND INSPIRATION",
  buttonText: "View All",
  buttonUrl: "/shop",
  blogs: [
    {
      category: "SKINCARE",
      title: "10 Skincare Tips for a Healthy Glow",
      subtitle:
        "Here are 10 skincare tips that will guide you towards achieving that enviable complexion. Follow these steps diligently to cleanse, nourish, and protect your skin.",
      date: "March 15, 2024",
      author: "Lisa Dominic",
      imgSrc: "/assets/images/blog/post_4.jpeg",
      link: "/blog-details",
    },
    {
      category: "MAKEUP",
      title: "The Ultimate Guide to Makeup Application",
      subtitle:
        "Here are 10 skincare tips that will guide you towards achieving that enviable complexion. Follow these steps diligently to cleanse, nourish, and protect your skin.",
      date: "April 20, 2024",
      author: "Fabian Wright",
      imgSrc: "/assets/images/blog/post_5.jpeg",
      link: "/blog-details",
    },
    {
      category: "MAKEUP",
      title: "How to Choose the Perfect Foundation Shade",
      subtitle:
        "Here are 10 skincare tips that will guide you towards achieving that enviable complexion. Follow these steps diligently to cleanse, nourish, and protect your skin.",
      date: "April 20, 2024",
      author: "Fabian Wright",
      imgSrc: "/assets/images/blog/post_6.jpeg",
      link: "/blog-details",
    },
    {
      category: "SKINCARE",
      title:
        "Unlocking the Secrets to Radiant Skin: Your Ultimate Skincare Guide",
      subtitle:
        "Here are 10 skincare tips that will guide you towards achieving that enviable complexion. Follow these steps diligently to cleanse, nourish, and protect your skin.",
      date: "May 23, 2024",
      author: "David Hamilton",
      imgSrc: "/assets/images/blog/post_7.jpeg",
      link: "/blog-details",
    },
  ],
};

const HomeV2 = () => {
  PageTitle("Home-V2");
  return (
    <>
      {/* Start Hero Section */}
      <HeroSection1 data={heroData} />
      {/* End Hero Section */}
      <Spacing lg={60} md={80} />
      {/* feature section  */}
      <FeatureSection1 variant={"style-2"} data={featuresData} />
      <Spacing lg={60} md={80} />
      {/* Start Banner Section */}
      <BannerSection1 data={bannersData} />
      {/* End Banner Section */}
      {/* Start Flash Sale Section */}
      <Section topSpaceLg="75" topSpaceMd="140">
        <SaleSection1 data={saleData} />
      </Section>
      {/* End Flash Sale Section */}
      {/* Start Video Block */}
      <Spacing lg={70} md={110} />
      <VideoBlock data={videoData} />
      {/* End Video Block */}
      {/* Start New Store */}
      <Section
        topSpaceLg="70"
        topSpaceMd="140"
        bottomSpaceLg="40"
        bottomSpaceMd="120"
      >
        <NewStore data={newStoreData} />
      </Section>
      {/* End New Store */}
      {/* Start Special Product Section */}
      <ProductSection data={productData} />
      {/* End Special Product Section */}
      <Spacing lg={80} md={150} />
      {/* Start Banner Section */}
      <BannerSection2 ctaSection={true} data={bannerData2} />
      <Spacing lg={65} md={145} />
      {/* End Banner Section */}
      {/* Start FAQ Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="140"
        bottomSpaceLg="30"
        bottomSpaceMd="110"
        className={"cs_accent_light_bg"}
      >
        <FAQSection1 data={FAQData} />
      </Section>

      {/* End FAQ Section */}
      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="140"
        bottomSpaceLg="80"
        bottomSpaceMd="150"
      >
        <BlogSection1 data={blogData} />
      </Section>
      {/* End Blog Section */}
    </>
  );
};

export default HomeV2;
