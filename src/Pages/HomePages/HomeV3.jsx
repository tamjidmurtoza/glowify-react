import React from "react";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import SaleSection2 from "../../components/SaleSection/SaleSection2";
import Section from "../../components/Section";
import ExploreSection from "../../components/ExploreSection";
import DealsSection from "../../components/DealsSection";
import ValuePackSection from "../../components/ProductSection/ValuePackSection";
import CTASection1 from "../../components/CTASection/CTASection1";
import BlogSection2 from "../../components/BlogSection/BlogSection2";
import FAQSection2 from "../../components/FAQSection/FAQSection2";
import Spacing from "../../components/Spacing";
import FeatureSection1 from "../../components/FeaturedSection/FeatureSection1";
import BannerSection2 from "../../components/BannerSection/BannerSection2";
import { PageTitle } from "../../Helper/PageTitle";
const HeroData = {
  heroSection: {
    backgroundImage: "/assets/images/hero_bg_3.jpeg",
    title: "Welcome to Beauty Haven",
    subtitle:
      "Discover Your Perfect Beauty Essentials and Unleash Your Inner Radiance!",
    button: {
      text: "Shop Now",
      link: "/shop",
    },
  },
  cardSection: {
    imageSrc: "/assets/images/card_img_1.png",
    title: "Hurry! Limited Time Offer",
    subtitle: "Sale Ends in",
    countdownDuration: "0:12:31:02", // Updated to include days: DD:HH:MM:SS
  },
};

const saleSectionData = {
  sectionTitle: "FEATURED PRODUCTS",
  productData: [
    {
      id: 1,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Color Pop Lipstick",
      price: "$49.99",
      rating: 2.0,
      image: "/assets/images/product_39.png",
      url: "/product/:product-details",
    },
    {
      id: 2,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Perfecting Matte Foundation",
      price: "$29.99",
      rating: 4.2,
      image: "/assets/images/product_40.png",
      url: "/product/:product-details",
    },
    {
      id: 3,
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Nourishing Hair Oil",
      price: "$19.99",
      rating: 3,
      image: "/assets/images/product_41.png",
      url: "/product/:product-details",
    },
    {
      id: 4,
      category: "FRAGRANCE",
      categoryUrl: "/shop",
      title: "Enchanted Blossom Perfume",
      price: "$39.99",
      rating: 1.0,
      image: "/assets/images/product_42.png",
      url: "/product/:product-details",
    },
    {
      id: 5,
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Essential Makeup Brush Set",
      price: "$14.99",
      rating: 3.0,
      image: "/assets/images/product_43.png",
      url: "/product/:product-details",
    },
    {
      id: 6,
      category: "BATH & BODY",
      categoryUrl: "/shop",
      title: "Refreshing Body Wash",
      price: "$24.99",
      rating: 4.0,
      image: "/assets/images/product_44.png",
      url: "/product/:product-details",
    },
    {
      id: 7,
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Invigorating Shaving Kit",
      price: "$34.99",
      rating: 3.0,
      image: "/assets/images/product_45.png",
      url: "/product/:product-details",
    },
    {
      id: 8,
      category: "WELLNESS",
      categoryUrl: "/shop",
      title: "Relaxing Aromatherapy Oil",
      price: "$12.99",
      rating: 4.0,
      image: "/assets/images/product_46.png",
      url: "/product/:product-details",
    },
  ],
};

const explorData = {
  sectionTitle: "Explore <br />What's New",
  products: [
    {
      id: 1,
      backgroundImg: "/assets/images/product_47.jpeg",
      heading: "Skincare Must-Haves",
      category: "SKINCARE",
      title: "Youthful Radiance Cream",
      price: "$39.99",
      detailsLink: "/product/:product-details",
      shopLink: "/shop",
      buttonText: "Add To Bag",
      buttonIcon: "/assets/images/icons/cart_white.svg",
    },
    {
      id: 2,
      backgroundImg: "/assets/images/product_48.jpeg",
      heading: "Makeup Essentials",
      headingHighlight: "Essentials", // for span element
      category: "MAKEUP",
      title: "Supreme Color Palette",
      price: "$24.99",
      detailsLink: "/product/:product-details",
      shopLink: "/shop",
      buttonText: "Add To Bag",
      buttonIcon: "/assets/images/icons/cart_white.svg",
    },
  ],
};

const dealSectionData = {
  sectionTitle: "TOP DEALS OF THE DAY",
  countdownTitle: "Hurry Up! Offer ends in",
  countdownDuration: "02:05:02",
  viewAllLink: "/flash-sale-product",
  viewAllText: "View All",
  products: [
    {
      imageUrl: "/assets/images/product_50.png",
      discount: "10",
      category: "SKINCARE",
      categoryUrl: "/shop",
      title: "Hydrating Facial Cream",
      price: 44.78,
      mainPrice: 59.99,
      url: "/product/:product-details",
      sold: 22,
      rating: 3.3,
    },
    {
      imageUrl: "/assets/images/product_51.png",
      discount: "14",
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Long Lasting Lipstick",
      price: 54.12,
      mainPrice: "40.00",
      url: "/product/:product-details",
      rating: 4.3,
      sold: 65,
    },
    {
      imageUrl: "/assets/images/product_52.png",
      discount: "54",
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Revitalizing Hair Mask",
      price: 87.78,
      mainPrice: "50.00",
      url: "/product/:product-details",
      rating: 1.3,
      sold: 15,
    },
    {
      imageUrl: "/assets/images/product_50.png",
      discount: "22",
      category: "SKINCARE",
      categoryUrl: "/shop",
      title: "Brightening Eye Cream",
      price: 88.12,
      mainPrice: "45.00",
      url: "/product/:product-details",
      rating: 4.3,
      sold: 72,
    },
    {
      imageUrl: "/assets/images/product_51.png",
      discount: "13",
      category: "MAKEUP",
      categoryUrl: "/shop",
      title: "Silky Smooth Foundation",
      price: 32.98,
      mainPrice: "30.00",
      url: "/product/:product-details",
      rating: 3.3,
      sold: 44,
    },
    {
      imageUrl: "/assets/images/product_52.png",
      discount: "65",
      category: "HAIRCARE",
      categoryUrl: "/shop",
      title: "Nourishing Hair Oil",
      price: 83.73,
      mainPrice: "35.00",
      url: "/product/:product-details",
      rating: 4.3,
      sold: 88,
    },
    {
      imageUrl: "/assets/images/product_50.png",
      discount: "34",
      category: "FRAGRANCE",
      categoryUrl: "/shop",
      title: "Luxury Perfume",
      price: 11,
      mainPrice: "90.00",
      url: "/product/:product-details",
      rating: 2.3,
      sold: 65.32,
    },
    {
      imageUrl: "/assets/images/product_51.png",
      discount: "10",
      category: "BODYCARE",
      categoryUrl: "/shop",
      title: "Moisturizing Body Lotion",
      price: 33.66,
      mainPrice: "32.00",
      url: "/product/:product-details",
      rating: 1.3,
      sold: 35,
    },
  ],
};

const ValuePackData = {
  sectionTitle: "Value Pack",
  productData: [
    {
      headline: "BUNDLED BEAUTY SET",
      image: "/assets/images/product_57.png",
      category: "SKINCARE",
      title:
        "Radiant Glow Serum, Nourishing Face Cream, and Revitalizing Eye Gel",
      price: "$69.99",
      originalPrice: "$89.99",
      badge: "BUNDLE",
      link: "/shop",
      detailsLink: "/product/:product-details",
    },
    {
      headline: "MAKEUP COLLECTION BUNDLE",
      image: "/assets/images/product_58.png",
      category: "MAKEUP",
      title: "Perfecting Matte Foundation, Supreme Color Palette, Mascara",
      price: "$59.99",
      originalPrice: "$79.99",
      badge: "BUNDLE",
      link: "/shop",
      detailsLink: "/product/:product-details",
    },
    {
      headline: "ESSENTIALS PACK",
      image: "/assets/images/product_59.png",
      category: "HAIRCARE",
      title:
        "Nourishing Shampoo, Hydrating Conditioner, and Repairing Hair Mask",
      price: "$39.99",
      originalPrice: "$49.99",
      badge: "BUNDLE",
      link: "/shop",
      detailsLink: "/product/:product-details",
    },
    {
      headline: "TRIO SET",
      image: "/assets/images/product_60.png",
      category: "FRAGRANCE",
      title: "Enchanted Blossom Perfume, Citrus Breeze Cologne, and Floral",
      price: "$49.99",
      originalPrice: "$59.99",
      badge: "BUNDLE",
      link: "/shop",
      detailsLink: "/product/:product-details",
    },
  ],
};

const ctaData = {
  title: "Shop Now and Reveal Your Inner Beauty with Our Premium Collection!",
  buttonText: "SHOP NOW",
  buttonLink: "/shop",
};

const blogData = {
  sectionTitle: " EXPERT TIPS, TRENDS, AND INSPIRATION",
  blogData: [
    {
      image: "/assets/images/blog/post_4.jpeg",
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "10 Skincare Tips for a Healthy Glow Permanent",
      link: "/blog-details",
    },
    {
      image: "/assets/images/blog/post_5.jpeg",
      category: "SKINCARE",
      author: "Fabian Wright",
      date: "April 20, 2024",
      title: "The Ultimate Guide to Makeup Application",
      link: "/blog-details",
    },
    {
      image: "/assets/images/blog/post_6.jpeg",
      category: "SKINCARE",
      author: "Lisa Dominic",
      date: "March 15, 2024",
      title: "How to Choose the Perfect Foundation Shade",
      link: "/blog-details",
    },
  ],
};

const FQAData = {
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

const bannerData2 = {
  brands: [
    "/assets/images/brand_1.svg",
    "/assets/images/brand_2.svg",
    "/assets/images/brand_3.svg",
    "/assets/images/brand_4.svg",
    "/assets/images/brand_5.svg",
    "/assets/images/brand_6.svg",
  ],
};
const HomeV3 = () => {
  PageTitle("Home-V3");
  return (
    <>
      {/* Start Hero Section */}
      <HeroSection2 data={HeroData} />
      {/* Start Flash Sale Section */}

      <Section
        topSpaceLg="75"
        topSpaceMd="140"
        bottomSpaceLg="40"
        bottomSpaceMd="140"
      >
        <SaleSection2 data={saleSectionData} />
      </Section>

      {/* End Flash Sale Section */}
      {/* Start Explore Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="150"
        bottomSpaceLg="80"
        bottomSpaceMd="150"
        className={"cs_accent_light_bg cs_shape"}
      >
        <ExploreSection data={explorData} />
      </Section>

      {/* End Explore Section */}
      {/* Start Top Deals Section */}
      <Section topSpaceLg="75" topSpaceMd="140">
        <DealsSection data={dealSectionData} />
      </Section>

      {/* End Top Deals Section */}
      {/* Start Value Pack Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="130"
        bottomSpaceLg="50"
        bottomSpaceMd="130"
      >
        <ValuePackSection data={ValuePackData} />
      </Section>

      {/* End Value Pack Section */}
      {/* Start CTA Section */}
      <Section
        className={"cs_cta cs_style_2 cs_bg_filed"}
        backgroundImage="/assets/images/cta_bg_2.jpeg"
      >
        <CTASection1 data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start Blog Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="140"
        bottomSpaceLg="70"
        bottomSpaceMd="140"
      >
        <BlogSection2 data={blogData} />
      </Section>

      {/* End Blog Section */}
      {/* Start FAQ Section */}

      <FAQSection2 data={FQAData} />

      {/* End FAQ Section */}
      {/* Start Feature Section */}
      <Spacing lg={60} md={80} />
      <FeatureSection1 variant={"style-2"} data={featuresData} />
      <Spacing lg={60} md={80} />
      {/* End Feature Section */}
      {/* Start Brand Section */}
      <Section bottomSpaceLg="70" bottomSpaceMd="140">
        <BannerSection2 data={bannerData2} />
      </Section>
      {/* End Brand Section */}
    </>
  );
};

export default HomeV3;
