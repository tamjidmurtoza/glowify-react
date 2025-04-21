import React from "react";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

const BannerSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_20">
          <div className="col-lg-6">
            <Link
              to={data.largeBanner.link}
              className="cs_banner cs_style_1 cs_accent_light_bg cs_radius_12 overflow-hidden position-relative"
            >
              <div className="cs_banner_text">
                <p className="cs_fs_24 cs_medium text-uppercase mb-0">
                  {data.largeBanner.offerText}
                </p>
                <h2
                  className="cs_fs_100 cs_accent_color mb-0"
                  dangerouslySetInnerHTML={{
                    __html: data.largeBanner.discount,
                  }}
                />
              </div>
              <img
                src={data.largeBanner.imageUrl}
                alt="Banner"
                className="cs_banner_img"
              />
              <div className="cs_banner_shape">
                <svg
                  width={792}
                  height={760}
                  viewBox="0 0 792 760"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_79_29"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={792}
                    height={760}
                  >
                    <rect width={792} height={760} rx={12} fill="#FAEFF2" />
                  </mask>
                  <g mask="url(#mask0_79_29)">
                    <path
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M317.842 411.305C480.36 364.357 608.002 127.058 759.271 202.799C896.263 271.391 810.991 493.659 783.397 644.409C761.888 761.911 720.736 881.23 622.623 949.315C535.69 1009.64 420.899 991.427 317.842 967.479C239.581 949.294 194.17 879.901 127.958 834.371C31.3601 767.947 -137.566 760.783 -151.985 644.409C-166.156 530.037 -28.9793 451.896 74.2255 400.691C149.926 363.133 236.66 434.756 317.842 411.305Z"
                      fill="white"
                    />
                    <path
                      className="cs_accent_color"
                      opacity="0.3"
                      d="M-10 307C26.8333 403.5 173.1 577.8 463.5 503C753.9 428.2 733.5 634.833 687 747.5"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </g>
                </svg>
              </div>
              <div className="cs_star_shape_1 cs_accent_strong_color">
                <svg
                  width={71}
                  height={71}
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35818 33.6219L11.5443 30.7047C16.1314 29.4087 20.3098 26.9546 23.6798 23.5774C27.0498 20.2001 29.4986 16.0126 30.7918 11.4156L33.7027 1.20737C33.8491 0.85022 34.0981 0.544746 34.4181 0.329765C34.7381 0.114783 35.1147 0 35.5 0C35.8853 0 36.2619 0.114783 36.5819 0.329765C36.9019 0.544746 37.1509 0.85022 37.2973 1.20737L40.2082 11.4156C41.5014 16.0126 43.9502 20.2001 47.3202 23.5774C50.6902 26.9546 54.8686 29.4087 59.4557 30.7047L69.6418 33.6219C70.0329 33.7332 70.3772 33.9692 70.6223 34.2943C70.8674 34.6194 71 35.0157 71 35.4231C71 35.8306 70.8674 36.2269 70.6223 36.552C70.3772 36.877 70.0329 37.1131 69.6418 37.2243L59.4557 40.1415C54.8686 41.4375 50.6902 43.8916 47.3202 47.2689C43.9502 50.6462 41.5014 54.8337 40.2082 59.4307L37.2973 69.6389C37.1863 70.0308 36.9508 70.3758 36.6264 70.6215C36.302 70.8671 35.9066 71 35.5 71C35.0934 71 34.698 70.8671 34.3736 70.6215C34.0492 70.3758 33.8137 70.0308 33.7027 69.6389L30.7918 59.4307C29.4986 54.8337 27.0498 50.6462 23.6798 47.2689C20.3098 43.8916 16.1314 41.4375 11.5443 40.1415L1.35818 37.2243C0.967072 37.1131 0.622841 36.877 0.377731 36.552C0.132622 36.2269 0 35.8306 0 35.4231C0 35.0157 0.132622 34.6194 0.377731 34.2943C0.622841 33.9692 0.967072 33.7332 1.35818 33.6219Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="cs_star_shape_2 cs_accent_strong_color">
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.55475 13.7329L4.71528 12.5414C6.58887 12.012 8.29557 11.0096 9.67204 9.63019C11.0485 8.25073 12.0487 6.54034 12.5769 4.66269L13.7659 0.493151C13.8257 0.347273 13.9274 0.222502 14.0581 0.134693C14.1888 0.0468833 14.3426 0 14.5 0C14.6574 0 14.8112 0.0468833 14.9419 0.134693C15.0726 0.222502 15.1743 0.347273 15.2341 0.493151L16.4231 4.66269C16.9513 6.54034 17.9515 8.25073 19.328 9.63019C20.7044 11.0096 22.4111 12.012 24.2847 12.5414L28.4452 13.7329C28.605 13.7783 28.7456 13.8748 28.8457 14.0075C28.9458 14.1403 29 14.3022 29 14.4686C29 14.635 28.9458 14.7969 28.8457 14.9297C28.7456 15.0624 28.605 15.1589 28.4452 15.2043L24.2847 16.3958C22.4111 16.9252 20.7044 17.9276 19.328 19.307C17.9515 20.6865 16.9513 22.3969 16.4231 24.2745L15.2341 28.444C15.1888 28.6041 15.0926 28.7451 14.9601 28.8454C14.8276 28.9457 14.6661 29 14.5 29C14.3339 29 14.1724 28.9457 14.0399 28.8454C13.9074 28.7451 13.8112 28.6041 13.7659 28.444L12.5769 24.2745C12.0487 22.3969 11.0485 20.6865 9.67204 19.307C8.29557 17.9276 6.58887 16.9252 4.71528 16.3958L0.55475 15.2043C0.395 15.1589 0.2544 15.0624 0.154284 14.9297C0.0541668 14.7969 0 14.635 0 14.4686C0 14.3022 0.0541668 14.1403 0.154284 14.0075C0.2544 13.8748 0.395 13.7783 0.55475 13.7329Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to={data.leftTopBanner.link}
              className="cs_banner cs_style_2 cs_white_bg cs_radius_12 overflow-hidden position-relative"
            >
              <div className="cs_banner_text">
                <p
                  className="cs_fs_24 cs_primary_color mb-0"
                  dangerouslySetInnerHTML={{
                    __html: data.leftTopBanner.offerText,
                  }}
                />
                <h2
                  className="cs_fs_64 cs_accent_color mb-0 cs_normal cs_secondary_font"
                  dangerouslySetInnerHTML={{
                    __html: data.leftTopBanner.amount,
                  }}
                />
              </div>
              <img
                src={data.leftTopBanner.imageUrl}
                alt="Banner"
                className="cs_banner_img"
              />
              <div className="cs_banner_shape cs_accent_light_color">
                <svg
                  width={750}
                  height={395}
                  viewBox="0 0 750 395"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_80_39"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={750}
                    height={395}
                  >
                    <rect
                      width={750}
                      height={395}
                      rx={12}
                      fill="currentColor"
                    />
                  </mask>
                  <g mask="url(#mask0_80_39)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M191.415 -139.716C258.116 -156.6 331.31 -131.556 382.428 -85.5006C435.859 -37.361 475.521 34.5887 463.599 105.512C452.544 171.283 369.227 189.561 327.453 241.55C274.467 307.492 272.491 420.116 191.415 444.251C103.034 470.56 3.8481 423.459 -59.9415 356.869C-122.693 291.363 -165.042 190.406 -133.077 105.512C-103.839 27.8625 11.3752 41.6937 77.5704 -8.33202C125.631 -44.6528 133.016 -124.933 191.415 -139.716Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </Link>
            <Spacing lg={20} md={20} />

            <Link
              to={data.leftBottomBanner.link}
              className="cs_banner cs_style_3 cs_accent_light_bg cs_radius_12 overflow-hidden position-relative"
            >
              <div className="cs_banner_text">
                <h2
                  className="cs_fs_54 cs_accent_color mb-0 cs_semibold"
                  dangerouslySetInnerHTML={{
                    __html: data.leftBottomBanner.offerText,
                  }}
                />
                <p
                  className="cs_fs_24 cs_primary_color mb-0"
                  dangerouslySetInnerHTML={{
                    __html: data.leftBottomBanner.subtitle,
                  }}
                />
              </div>
              <img
                src={data.leftBottomBanner.imageUrl}
                alt="Banner"
                className="cs_banner_img"
              />
              <div className="cs_banner_shape cs_accent_light_color">
                <svg
                  width={457}
                  height={390}
                  viewBox="0 0 457 390"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_81_109"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={457}
                    height={390}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width={456}
                      height={389}
                      fill="#FAEFF2"
                      stroke="currentColor"
                    />
                  </mask>
                  <g mask="url(#mask0_81_109)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M349.415 5.28434C416.116 -11.5997 489.31 13.4443 540.428 59.4994C593.859 107.639 633.521 179.589 621.599 250.512C610.544 316.283 527.227 334.561 485.453 386.55C432.467 452.492 430.491 565.116 349.415 589.251C261.034 615.56 161.848 568.459 98.0585 501.869C35.3074 436.363 -7.04242 335.406 24.9233 250.512C54.1614 172.863 169.375 186.694 235.57 136.668C283.631 100.347 291.016 20.067 349.415 5.28434Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
