import React from "react";
import { Link } from "react-router-dom";
import Review from "../Review";
import Button2 from "../Buttons/Button2";
import Button3 from "../Buttons/Button3";

const ProductCard2 = ({
  image,
  title,
  url,
  category,
  price,
  rating,
  sold,
  index,
  variant,
  originalPrice,
  headline,
  badge,
  reviews,
  offerNumber,
}) => {
  return (
    <div
      className={`cs_product_card ${
        variant === "style-1" ? "cs_style_3 cs_radius_12" : ""
      }${variant === "style-2" ? " cs_style_7 text-center" : ""} ${
        variant === "style-3" ? " cs_style_9 cs_type_1 text-center" : ""
      }`}
    >
      <div className="cs_product_card_in">
        {headline && (
          <div className="cs_pack_title cs_light text-center cs_accent_color cs_white_bg">
            <span>{headline}</span>
          </div>
        )}
        <div className="cs_product_thumb cs_center">
          <img src={image} alt={title} />

          {offerNumber && (
            <div className="cs_label cs_accent_strong_bg cs_white_color">
              <span>{offerNumber}%</span>
              <span className="cs_fs_10">OFF</span>
            </div>
          )}
        </div>
        <div className="text-center">
          {badge && (
            <span className="cs_bundle_badge cs_accent_strong_bg cs_white_color text-uppercase cs_radius_5 cs_fs_14 cs_light">
              {badge}
            </span>
          )}
          {variant === "style-1" && (
            <span className="cs_hover_icon cs_accent_color">
              <svg
                width={27}
                height={26}
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3019 0H18.1729C17.9505 0 17.7371 0.0883638 17.5798 0.245652C17.4225 0.402941 17.3342 0.61627 17.3342 0.83871C17.3342 1.06115 17.4225 1.27448 17.5798 1.43177C17.7371 1.58906 17.9505 1.67742 18.1729 1.67742H23.2085L15.497 9.03835C15.4173 9.11441 15.3534 9.20541 15.3089 9.30617C15.2643 9.40693 15.2401 9.51547 15.2375 9.62559C15.235 9.73571 15.2541 9.84527 15.2939 9.94799C15.3336 10.0507 15.3933 10.1446 15.4693 10.2243C15.5454 10.304 15.6364 10.3679 15.7371 10.4124C15.8379 10.4569 15.9464 10.4812 16.0565 10.4837C16.1667 10.4863 16.2762 10.4672 16.3789 10.4274C16.4817 10.3876 16.5756 10.328 16.6552 10.252L24.4632 2.79877V7.96774C24.4632 8.19018 24.5516 8.40351 24.7089 8.5608C24.8662 8.71809 25.0795 8.80645 25.3019 8.80645C25.5244 8.80645 25.7377 8.71809 25.895 8.5608C26.0523 8.40351 26.1406 8.19018 26.1406 7.96774V0.83871C26.1406 0.61627 26.0523 0.402941 25.895 0.245652C25.7377 0.0883638 25.5244 0 25.3019 0Z"
                  fill="currentColor"
                />
                <path
                  d="M25.3018 17.1935C25.0793 17.1935 24.866 17.2819 24.7087 17.4392C24.5514 17.5965 24.4631 17.8098 24.4631 18.0322V23.1366L16.6689 15.3425C16.5107 15.1897 16.2989 15.1052 16.079 15.1071C15.8591 15.109 15.6487 15.1972 15.4932 15.3527C15.3377 15.5082 15.2495 15.7186 15.2476 15.9385C15.2457 16.1584 15.3302 16.3702 15.483 16.5284L23.2771 24.3226H18.1727C17.9503 24.3226 17.737 24.4109 17.5797 24.5682C17.4224 24.7255 17.334 24.9388 17.334 25.1613C17.334 25.3837 17.4224 25.597 17.5797 25.7543C17.737 25.9116 17.9503 26 18.1727 26H25.3018C25.5242 26 25.7375 25.9116 25.8948 25.7543C26.0521 25.597 26.1405 25.3837 26.1405 25.1613V18.0322C26.1405 17.8098 26.0521 17.5965 25.8948 17.4392C25.7375 17.2819 25.5242 17.1935 25.3018 17.1935Z"
                  fill="currentColor"
                />
                <path
                  d="M9.19282 15.7618L1.81804 23.1366V18.0322C1.81804 17.8098 1.72968 17.5964 1.57239 17.4391C1.4151 17.2818 1.20177 17.1935 0.979335 17.1935C0.756895 17.1935 0.543566 17.2818 0.386277 17.4391C0.228989 17.5964 0.140625 17.8098 0.140625 18.0322V25.1612C0.140625 25.3837 0.228989 25.597 0.386277 25.7543C0.543566 25.9116 0.756895 25.9999 0.979335 25.9999H8.10837C8.33081 25.9999 8.54414 25.9116 8.70142 25.7543C8.85871 25.597 8.94708 25.3837 8.94708 25.1612C8.94708 24.9388 8.85871 24.7255 8.70142 24.5682C8.54414 24.4109 8.33081 24.3225 8.10837 24.3225H3.00398L10.3788 16.9477C10.5315 16.7896 10.6161 16.5777 10.6142 16.3578C10.6122 16.1379 10.524 15.9275 10.3685 15.772C10.213 15.6165 10.0027 15.5283 9.78277 15.5264C9.56286 15.5245 9.351 15.609 9.19282 15.7618Z"
                  fill="currentColor"
                />
                <path
                  d="M3.00398 1.67742H8.10837C8.33081 1.67742 8.54414 1.58906 8.70142 1.43177C8.85871 1.27448 8.94708 1.06115 8.94708 0.83871C8.94708 0.61627 8.85871 0.402941 8.70142 0.245652C8.54414 0.0883638 8.33081 0 8.10837 0H0.979335C0.756895 0 0.543566 0.0883638 0.386277 0.245652C0.228989 0.402941 0.140625 0.61627 0.140625 0.83871V7.96774C0.140625 8.19018 0.228989 8.40351 0.386277 8.5608C0.543566 8.71809 0.756895 8.80645 0.979335 8.80645C1.20177 8.80645 1.4151 8.71809 1.57239 8.5608C1.72968 8.40351 1.81804 8.19018 1.81804 7.96774V2.86335L9.19282 10.2381C9.351 10.3909 9.56286 10.4754 9.78277 10.4735C10.0027 10.4716 10.213 10.3834 10.3685 10.2279C10.524 10.0724 10.6122 9.86205 10.6142 9.64214C10.6161 9.42224 10.5315 9.21038 10.3788 9.05219L3.00398 1.67742Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          )}
        </div>
        <div className="cs_product_info">
          <div className="cs_product_info_in">
            <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
              <Link to={url}>{category}</Link>
            </div>
            <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
              {title}
            </h2>
            {variant === "style-2" && (
              <div className="cs_product_ratings">
                <Review reviewNumber={rating} />

                <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                  {variant !== "style-2" && <span>({rating}/5)</span>}{" "}
                  {sold && <span>| {sold} Sold</span>}
                </div>
              </div>
            )}
            <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
              {price}
              <small>{originalPrice}</small>
            </p>
            {variant === "style-1" && (
              <div className="cs_product_ratings">
                <Review reviewNumber={rating} />

                <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                  {variant !== "style-2" && <span>({rating}/5)</span>}
                  {(sold || reviews) && (
                    <span>
                      {" "}
                      | {sold ? `${sold} Sold` : `${reviews} Reviews`}
                    </span>
                  )}
                </div>
              </div>
            )}
            <div
              className={`${
                variant === "style-3" ? "text-center" : "cs_products_btns"
              }`}
            >
              <Button3 variant={"cs_btn cs_style_1 cs_medium cs_size_md"} />
              {variant === "style-1" && <Button2 index={index} />}
            </div>
          </div>
        </div>
        <Link to={url} className="cs_product_link"></Link>
      </div>
    </div>
  );
};

export default ProductCard2;
