import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";
import ProductCard2 from "../ProductCard/ProductCard2";

const ValuePackSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 justify-content-center">
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
        <div className="cs_grid_style_2">
          {data.productData.map((product, index) => (
            <div className="cs_grid_col" key={index}>
              <ProductCard2 {...product} variant={"style-3"} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ValuePackSection;
