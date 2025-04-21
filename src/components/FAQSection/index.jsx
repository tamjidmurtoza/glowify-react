import { useEffect, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";
import AccordionItem from "../AccordionItem";

const FAQSection = ({ data }) => {
  const [openItemIndex, setOpenItemIndex] = useState(-1); // Initialize with -1 for no item open initially
  const [firstItemOpen, setFirstItemOpen] = useState(true); // Set the first item to open initially

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    // Open the first item when the component mounts
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1">
              <div className="cs_section_heading_in">
                <SectionHeading
                  title={data.sectionTitle}
                  variant={
                    "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
                  }
                />
              </div>
            </div>
            <Spacing lg={50} md={60} />
          </div>
          <div className="col-lg-7">
            <div className="cs_accordians cs_style_1 cs_light">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.question}
                  content={faq.answer}
                  isOpen={index === openItemIndex}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
