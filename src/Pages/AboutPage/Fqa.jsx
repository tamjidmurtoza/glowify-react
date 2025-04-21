import { useState } from "react";
import BreadCamp from "../../components/BreadCamp";
import Spacing from "../../components/Spacing";
import AccordionItem from "../../components/AccordionItem";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "FAQ", url: "fqa", active: true },
];

const faqData = {
  generalAccordionData: {
    title: "General Questions<br > Answers!",
    accordionData: [
      {
        title: "How can I track my order?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "How long does it take for home delivery?",
        content:
          "Delivery time varies depending on your location. You can expect to receive your order within 3-7 business days.",
      },
      {
        title: "Do you offer international shipping?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website..",
      },
      {
        title: "What Shipping Methods Are Available?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "Are your products cruelty-free?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
    ],
  },

  paymentAccordionData: {
    title: "Payment Methods<br>Answers!",
    accordionData: [
      {
        title: "What Payment Methods Are Accepted?",
        content:
          "We accept various payment methods including credit cards, debit cards, and PayPal. Please check our payment options during checkout.",
      },
      {
        title: "Can I use a different payment method?",
        content:
          "Yes, you can choose from the available payment methods at checkout. Please ensure your selected method is valid.",
      },
      {
        title: "How Do I Track My Order?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "Is it possible to cash on delivery?",
        content:
          "Yes, we offer cash on delivery as a payment option in select areas. Please check if this option is available for your location during checkout.",
      },
    ],
  },
  OrdersAccordionData: {
    title: "Orders &amp; Returns <br />Answers!",
    accordionData: [
      {
        title: "How Can I Cancel Or Change My Order?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "How do I place an Order?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "How Can I Return a Product?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
      {
        title: "Do I need an account to place an order?",
        content:
          "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.",
      },
    ],
  },
};

const Fqa = () => {
  PageTitle("FAQ");
  const [generalOpenIndex, setGeneralOpenIndex] = useState(0);
  const [paymentOpenIndex, setPaymentOpenIndex] = useState(0);
  const [ordersOpenIndex, setOrdersOpenIndex] = useState(0);

  const handleGeneralClick = (index) => {
    setGeneralOpenIndex(generalOpenIndex === index ? -1 : index);
  };

  const handlePaymentClick = (index) => {
    setPaymentOpenIndex(paymentOpenIndex === index ? -1 : index);
  };

  const handleOrdersClick = (index) => {
    setOrdersOpenIndex(ordersOpenIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_8.jpeg"
        title="About Me"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}

      {/* Start FAQ Section */}
      <section>
        <Spacing lg={70} md={120} />
        <div className="container">
          {/* General Questions Accordion */}
          <div className="row">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_in">
                  <h3
                    className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
                    dangerouslySetInnerHTML={{
                      __html: faqData.generalAccordionData.title,
                    }}
                  />
                </div>
              </div>
              <Spacing lg={50} md={60} />
            </div>
            <div className="col-lg-7">
              <hr />
              <div className="cs_accordians cs_style_1 cs_light cs_type_1">
                {faqData.generalAccordionData.accordionData.map(
                  (item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      isOpen={index === generalOpenIndex}
                      onClick={() => handleGeneralClick(index)}
                    />
                  )
                )}
              </div>
              <hr />
            </div>
          </div>
          <Spacing lg={70} md={120} />
          {/* Payment Methods Accordion */}
          <div className="row">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_in">
                  <h3
                    className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
                    dangerouslySetInnerHTML={{
                      __html: faqData.paymentAccordionData.title,
                    }}
                  />
                </div>
              </div>
              <Spacing lg={50} md={60} />
            </div>
            <div className="col-lg-7">
              <hr />
              <div className="cs_accordians cs_style_1 cs_light cs_type_1">
                {faqData.paymentAccordionData.accordionData.map(
                  (item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      isOpen={index === paymentOpenIndex}
                      onClick={() => handlePaymentClick(index)}
                    />
                  )
                )}
              </div>
              <hr />
            </div>
          </div>
          <Spacing lg={70} md={120} />
          {/* Orders & Returns Accordion */}
          <div className="row">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_in">
                  <h3
                    className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
                    dangerouslySetInnerHTML={{
                      __html: faqData.OrdersAccordionData.title,
                    }}
                  />
                </div>
              </div>
              <Spacing lg={50} md={60} />
            </div>
            <div className="col-lg-7">
              <hr />
              <div className="cs_accordians cs_style_1 cs_light cs_type_1">
                {faqData.OrdersAccordionData.accordionData.map(
                  (item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      isOpen={index === ordersOpenIndex}
                      onClick={() => handleOrdersClick(index)}
                    />
                  )
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
        <Spacing lg={70} md={120} />
      </section>
      {/* End FAQ Section */}
    </>
  );
};

export default Fqa;

function OrderAccordian({ item, index, ordersOpenIndex, handleOrdersClick }) {
  return (
    <div className="row">
      <div className="col-lg-5">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_in">
            <h3
              className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              dangerouslySetInnerHTML={{
                __html: faqData.OrdersAccordionData.title,
              }}
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />
      </div>
      <div className="col-lg-7">
        <hr />
        <div className="cs_accordians cs_style_1 cs_light cs_type_1">
          {faqData.OrdersAccordionData.accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={index === ordersOpenIndex}
              onClick={() => handleOrdersClick(index)}
            />
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
