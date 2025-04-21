import BreadCamp from "../../components/BreadCamp";
import { Link } from "react-router-dom";
import BlogCta from "../BlogPage/BlogCta";
import Spacing from "../../components/Spacing";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Store Location", url: "store-location", active: true },
];

const contactData = {
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd",
  storeLocations: [
    {
      name: "Denver",
      address: "2487 Clearview Drive,<br> Denver, CO 80216",
      telephone: "303-669-7565",
      email: "shop@example.com",
    },
    {
      name: "Marietta",
      address: "3033 Fowler Avenue,<br> Marietta, GA 30067",
      telephone: "770-303-8066",
      email: "shop@example.com",
    },
    {
      name: "Hanover",
      address: "1018 Columbia Boulevard,<br> Hanover, MD 21076",
      telephone: "410-419-4641",
      email: "shop@example.com",
    },
    {
      name: "Bells Savoy",
      address: "3450 Alpha Avenue,<br> Bells Savoy, TX 75414",
      telephone: "903-965-5795",
      email: "shop@example.com",
    },
  ],
  ctaData: {
    title: "Your beauty journey is our journey",
    subtitle:
      "Join us, explore our handpicked selection of products, and let's embark on a radiant experience together.",
    buttonText: "JOIN THE GLOWIFY COMMUNITY",
    buttonLink: "#",
    imageUrl: "/assets/images/cta_img_1.png",
  },
};
const StoreLocation = () => {
  PageTitle("Local-Store");
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_7.jpeg"
        title="Our Local Store"
        breadcrumbItems={breadcrumbData}
        type={true}
      />

      {/* End Breadcamp */}
      <Spacing lg={70} md={120} />
      <div className="container">
        {/* Start Google Map */}
        <div className="cs_map">
          <iframe id="map" src={contactData.mapSrc} allowFullScreen="" />
        </div>
        {/* End Google Map */}
        <Spacing lg={70} md={70} />

        {/* Start Store Locations */}
        <div className="cs_store_locations">
          {contactData.storeLocations.map((location, index) => (
            <div key={index} className="cs_store_location_col">
              <div className="cs_store_location cs_radius_8">
                <h3 className="cs_fs_24">{location.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: location.address }} />
                <p>
                  <b>Telephone:</b>{" "}
                  <Link to={`tel:${location.telephone}`}>
                    {location.telephone}
                  </Link>
                  <br />
                  <b>E-mail:</b>{" "}
                  <Link to={`mailto:${location.email}`}>{location.email}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* End Store Locations */}
      </div>
      {/* Start CTA Section */}
      <Spacing lg={70} md={120} />
      <BlogCta data={contactData.ctaData} bgColor={true} />
      <Spacing lg={70} md={120} />
      {/* End CTA Section */}
    </>
  );
};

export default StoreLocation;
