import { Link } from "react-router-dom";
import Review from "../Review";
import Button2 from "../Buttons/Button2";
import Button3 from "../Buttons/Button3";
const ProductCard = ({
  discount,
  labelSize,
  image,
  category,
  title,
  price,
  originalPrice,
  rating,
  ratingCount,
  progress,
  stock,
  link,
  index,
  sold,
  reviews,
  offerNumber,
}) => {
  return (
    <div className="cs_product_card cs_style_1 cs_radius_12">
      <div className="cs_product_card_in">
        {discount && (
          <div className="cs_label cs_accent_strong_bg cs_white_color">
            <span>{discount}</span>
            <span className="cs_fs_10">{labelSize}</span>
          </div>
        )}
        <div className="cs_product_thumb cs_center">
          <img src={image} alt="Product" />
          {offerNumber && (
            <div className="cs_label cs_accent_strong_bg cs_white_color">
              <span>{offerNumber}%</span>
              <span className="cs_fs_10">OFF</span>
            </div>
          )}

          <div className="cs_products_btns">
            <Button3 variant={"cs_btn cs_style_1 cs_medium cs_size_md"} />
            <Button2 index={index} />
          </div>
        </div>
        <div className="cs_product_info">
          <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
            <Link to="/shop">{category}</Link>
          </div>
          <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
            {title}
          </h2>
          <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
            ${price}
            {originalPrice && <small>${originalPrice}</small>}
          </p>
          <div className="cs_product_ratings">
            <Review reviewNumber={rating} />
            <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
              <div className="cs_rating_number cs_ternary_color cs_fs_14 cs_light">
                <span>({ratingCount})</span>
                {(sold || reviews) && (
                  <span> | {sold ? `${sold} Sold` : `${reviews} Reviews`}</span>
                )}
              </div>
            </div>
          </div>
          {progress && (
            <div className="cs_progress">
              <div
                className="cs_progress_in"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {stock && (
            <p className="cs_product_stock mb-0 cs_fs_14 cs_light">
              Stock: {stock}
            </p>
          )}
        </div>
      </div>
      <Link to={link} className="cs_product_link" />
    </div>
  );
};

export default ProductCard;
