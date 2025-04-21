import Spacing from '../../components/Spacing';
import HeroSection from '../../components/HeroSection';
import CategorySection from '../../components/CategorySection';
import Section from '../../components/Section';
import SaleSection from '../../components/SaleSection';
import FeaturedSection from '../../components/FeaturedSection';
import CTASection from '../../components/CTASection';
import StoreSection from '../../components/StoreSection';
import BannerSection from '../../components/BannerSection';
import FeatureSection1 from '../../components/FeaturedSection/FeatureSection1';
import BlogSection from '../../components/BlogSection';
import FAQSection from '../../components/FAQSection';
import { PageTitle } from '../../Helper/PageTitle';

const heroData = {
  title: 'Discover Your Beauty',
  subtitle: 'Shop the Best Beauty Products Online',
  buttonText: 'Shop Now',
  shopLink: '/shop',
  backgroundImage: '/assets/images/hero_bg_1.jpeg',
  miniImage: '/assets/images/hero_mini_img_1.png',
  brands: [
    { image: '/assets/images/brand_1.svg' },
    { image: '/assets/images/brand_2.svg' },
    { image: '/assets/images/brand_3.svg' },
    { image: '/assets/images/brand_4.svg' },
    { image: '/assets/images/brand_5.svg' },
    { image: '/assets/images/brand_6.svg' },
  ],
};

const categoryData = [
  {
    title: 'Get Radiant Skin! fow women',
    subtitle:
      'Experience the ultimate skincare transformation with our breakthrough formula.',
    buttonText: 'Shop Now',
    link: '/shop',
    image: '/assets/images/category_img_1.jpeg',
  },
  {
    title: 'Enhance Your Natural Beauty',
    subtitle:
      'Experience the ultimate skincare transformation with our breakthrough formula.',
    buttonText: 'Shop Now',
    link: '/shop',
    image: '/assets/images/category_img_2.jpeg',
  },
  {
    title: 'Discover Trending Makeup',
    subtitle:
      'Experience the ultimate skincare transformation with our breakthrough formula.',
    buttonText: 'Shop Now',
    link: '/shop',
    image: '/assets/images/category_img_3.jpeg',
  },
];

const saleData = {
  headingTitle: { textStart: 'Fla', textEnd: 'h sale' },
  saleEndText: 'Ends in',
  countdownDuration: '01:02:02',
  buttonText: 'View All',
  buttonLink: '/flash-sale-product',

  products: [
    {
      id: 1,
      label: '43% OFF',
      labelSize: 'OFF',
      image: 'assets/images/product_1.png',
      category: 'MAKEUP PRODUCTS',
      title: 'Hydrating Lip Gloss',
      price: 19.99,
      originalPrice: 23.5,
      rating: 3.5,
      ratingCount: 871,
      progress: 47,
      stock: 10,
      discount: '20%',
      link: '/product/:product-details',
    },
    {
      id: 2,
      label: '07% OFF',
      labelSize: 'OFF',
      image: 'assets/images/product_2.png',
      category: 'MAKEUP PRODUCTS',
      title: 'Matte Finish Foundation',
      price: 22.5,
      originalPrice: 30.0,
      rating: 2.2,
      ratingCount: 654,
      progress: 80,
      stock: 8,
      discount: '15%',
      link: '/product/:product-details',
    },
    {
      id: 3,
      label: '30% OFF',
      labelSize: 'OFF',
      image: 'assets/images/product_3.png',
      category: 'MAKEUP PRODUCTS',
      title: 'Liquid Eyeliner',
      price: 15.0,
      originalPrice: 20.0,
      rating: 3.3,
      ratingCount: 480,
      progress: 55,
      stock: 12,
      discount: '15%',
      link: '/product/:product-details',
    },
    {
      id: 4,
      label: '10% OFF',
      labelSize: 'OFF',
      image: 'assets/images/product_4.png',
      category: 'MAKEUP PRODUCTS',
      title: 'High Pigment Eyeshadow',
      price: 18.0,
      originalPrice: 24.0,
      rating: 2.4,
      ratingCount: 520,
      progress: 65,
      stock: 9,
      discount: '15%',
      link: '/product/:product-details',
    },
    {
      id: 5,
      label: '15% OFF',
      labelSize: 'OFF',
      image: 'assets/images/product_5.png',
      category: 'MAKEUP PRODUCTS',
      title: 'Blush Palette',
      price: 22.5,
      originalPrice: 30.0,
      rating: 4.2,
      ratingCount: 654,
      progress: 39,
      stock: 8,
      discount: '15%',
      link: '/product/:product-details',
    },
  ],
};

const featureData = {
  sectionTitle: 'FEATURED PRODUCTS',
  btnText: 'View All',
  btnUrl: '/shop',
  sliderData: [
    {
      image: '/assets/images/product_6.png',
      category: 'MAKEUP',
      title: 'Matte Velvet Lipstick',
      price: 25.99,
      ratingCount: '4.7/5',
      rating: '4.7',
      sold: '421',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
    {
      image: '/assets/images/product_7.png',
      category: 'SKINCARE',
      title: 'Hydrating Face Cream',
      price: 35.5,
      ratingCount: '4.5/5',
      sold: '378',
      rating: '4.5',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
    {
      image: '/assets/images/product_8.png',
      category: 'HAIRCARE',
      title: 'Argan Oil Shampoo',
      price: 19.99,
      ratingCount: '4.6/5',
      rating: '4.6',
      sold: '490',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
    {
      image: '/assets/images/product_9.png',
      category: 'MAKEUP',
      title: 'Liquid Eyeliner',
      price: 15.99,
      ratingCount: '4.2/5',
      rating: '4.2',
      sold: '589',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
    {
      image: '/assets/images/product_10.png',
      category: 'FRAGRANCE',
      title: 'Eau de Parfum',
      price: 49.99,
      ratingCount: '4.1/5',
      rating: '4.1',
      sold: '216',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
    {
      image: '/assets/images/product_11.png',
      category: 'SKINCARE',
      title: 'Vitamin C Serum',
      price: 29.99,
      ratingCount: '4.6/5',
      rating: '4.6',
      sold: '310',
      link: '/product/:product-details',
      cartIcon: '/assets/images/icons/cart_white.svg',
    },
  ],
};

const ctaData = {
  backgroundImage: '/assets/images/cta_bg.jpeg',
  linkUrl: '/shop',
  buttonText: 'Discover the Latest<br>Trending Product',
};

const storeData = {
  products: [
    {
      id: 1,
      image: '/assets/images/product_11.png',
      category: 'MAKEUP',
      title: 'Radiant Creamy Concealer',
      price: '$39.99',
      rating: 4.5,
      sold: 20,
      url: '/product/:product-details',
    },
    {
      id: 2,
      image: '/assets/images/product_12.png',
      category: 'MAKEUP',
      title: 'Long-Wear Lipstick',
      price: '$25.99',
      rating: 4.2,
      url: '/product/:product-details',
      sold: 10,
    },
    {
      id: 3,
      image: '/assets/images/product_13.png',
      category: 'MAKEUP',
      title: 'Liquid Eyeliner',
      price: '$29.99',
      rating: 4.7,
      url: '/product/:product-details',
      sold: 15,
    },
    {
      id: 4,
      image: '/assets/images/product_14.png',
      category: 'MAKEUP',
      title: 'Matte Foundation',
      price: '$45.00',
      rating: 4.8,
      url: '/product/:product-details',
      sold: 30,
    },
    {
      id: 5,
      image: '/assets/images/product_15.png',
      category: 'MAKEUP',
      title: 'Cream Blush',
      price: '$19.99',
      rating: 4.3,
      url: '/product/:product-details',
      sold: 25,
    },
    {
      id: 6,
      image: '/assets/images/product_16.png',
      category: 'MAKEUP',
      title: 'Powder Highlighter',
      price: '$35.99',
      rating: 4.6,
      url: '/product/:product-details',
      sold: 12,
    },
  ],

  thumbnailsData: [
    { imageUrl: 'assets/images/product_17.png' },
    { imageUrl: 'assets/images/product_18.png' },
    { imageUrl: 'assets/images/product_19.png' },
    { imageUrl: 'assets/images/product_17.png' },
    { imageUrl: 'assets/images/product_18.png' },
    { imageUrl: 'assets/images/product_19.png' },
  ],

  navThumbnailsData: [
    { imageUrl: 'assets/images/product_17.png' },
    { imageUrl: 'assets/images/product_18.png' },
    { imageUrl: 'assets/images/product_19.png' },
    { imageUrl: 'assets/images/product_17.png' },
    { imageUrl: 'assets/images/product_18.png' },
    { imageUrl: 'assets/images/product_19.png' },
  ],

  productInfo: {
    productCategory: 'EYES MAKEUP',
    categoryLink: '/shop',
    productName: 'Mascara Perfect Black',
    productLink: '/product/:product-details',
    rating: '4.2',
    sold: '56',
    price: '12.99',
    productQuantity: 2,
  },
};

const bannerData = {
  largeBanner: {
    offerText: 'LIMITED TIME OFFER',
    discount: 'Save <br />20%',
    imageUrl: '/assets/images/banner/banner_img_1.png',
    link: '/shop',
  },
  leftTopBanner: {
    offerText: 'Free Shipping on <br />Orders Over',
    amount: '$50',
    imageUrl: '/assets/images/banner/banner_img_2.png',
    link: '/shop',
  },
  leftBottomBanner: {
    offerText: 'Exclusive <br />Discounts!',
    subtitle: 'For New Customers',
    imageUrl: '/assets/images/banner/banner_img_3.png',
    link: '/shop',
  },
};

const featuresData = [
  {
    title: 'Quality Assurance',
    iconUrl: 'assets/images/icons/feature_icon_1.svg',
  },
  {
    title: 'Customer Satisfaction',
    iconUrl: 'assets/images/icons/feature_icon_2.svg',
  },
  {
    title: 'Trust and Reliability',
    iconUrl: 'assets/images/icons/feature_icon_3.svg',
  },
  {
    title: 'Personalization',
    iconUrl: 'assets/images/icons/feature_icon_4.svg',
  },
  {
    title: 'Continuous Improvement',
    iconUrl: 'assets/images/icons/feature_icon_5.svg',
  },
];

const blogData = {
  sectionTitle: 'EXPERT TIPS AND INSPIRATION',
  blogPosts: [
    {
      category: 'SKINCARE',
      title: '10 Skincare Tips for a Healthy Glow from Glowify',
      date: 'May 5, 2024',
      author: 'Diana Jones',
      imageUrl: '/assets/images/blog/post_1.jpeg',
      link: '/blog-details',
    },
    {
      category: 'MAKEUP',
      title: 'The Ultimate Guide to Makeup Application',
      date: 'April 20, 2024',
      author: 'Fabian Wright',
      imageUrl: '/assets/images/blog/post_2.jpeg',
      link: '/blog-details',
    },
    {
      category: 'MAKEUP',
      title: 'How to Choose the Perfect Foundation Shade',
      date: 'March 15, 2024',
      author: 'Lisa Dominic',
      imageUrl: '/assets/images/blog/post_3.jpeg',
      link: '/blog-details',
    },
  ],
};

const faqData = {
  sectionTitle: "Got Questions?<br> We've Got<br> Answers!",
  faqs: [
    {
      question: 'How can I track my order?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.',
    },
    {
      question: 'Are your products cruelty-free?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.',
    },
  ],
};

const HomePage = () => {
  PageTitle('Home');
  return (
    <>
      <Spacing lg={30} md={40} />
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      {/* Start Category Section */}
      <Section
        topSpaceLg="65"
        topSpaceMd="115"
        bottomSpaceLg="80"
        bottomSpaceMd="150"
      >
        <CategorySection data={categoryData} />
      </Section>
      {/* End Category Section */}
      {/* Start Flash Sale Section */}
      <Section
        topSpaceLg="75"
        topSpaceMd="140"
        bottomSpaceLg="80"
        bottomSpaceMd="122"
        className={'cs_accent_bg_03p'}
      >
        <SaleSection data={saleData} />
      </Section>
      {/* End Flash Sale Section */}
      {/* Start Featured Products Section */}
      <Section topSpaceLg="75" topSpaceMd="140">
        <FeaturedSection data={featureData} />
      </Section>
      {/* End Featured Products Section */}
      {/* Start CTA Section */}
      <CTASection data={ctaData} />
      {/* End CTA Section */}
      {/* Start New in Store */}
      <Section topSpaceLg="70" topSpaceMd="140">
        <StoreSection data={storeData} />
      </Section>

      {/* End New in Store */}
      {/* Start Banner Section */}
      <Spacing lg={80} md={150} />

      <BannerSection data={bannerData} />
      {/* End Banner Section */}
      {/* Start Feature Section */}
      <FeatureSection1 data={featuresData} variant={'style-1'} />
      {/* End Feature Section */}
      {/* Start Blog Section */}
      <Section bottomSpaceLg="80" bottomSpaceMd="150">
        <BlogSection data={blogData} />
      </Section>

      {/* End Blog Section */}
      {/* Start FAQ Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="150"
        bottomSpaceLg="80"
        bottomSpaceMd="150"
        className={'cs_accent_light_bg cs_sibling_newsletter'}
      >
        <FAQSection data={faqData} />
      </Section>

      {/* End FAQ Section */}
    </>
  );
};

export default HomePage;
