import { Link } from "react-router-dom";
import Button2 from "../Buttons/Button2";
import Review from "../Review";
import Button3 from "../Buttons/Button3";

const ProductCard3 = ({
  discount,
  imageUrl,
  index,
  category,
  categoryUrl,
  title,
  rating,
  price,
  mainPrice,
  sold,
  url,
}) => {
  return (
    <div className="cs_product_card cs_style_9 text-center cs_radius_12">
      <div className="cs_product_card_in">
        <div className="cs_label cs_accent_strong_bg cs_white_color">
          <span>{discount}%</span>
          <span className="cs_fs_10">OFF</span>
        </div>
        <div className="cs_product_thumb cs_center">
          <img src={imageUrl} alt="Product" />
          <div className="cs_product_icon_btns">
            <Button2 index={index} variant={"style-1"} />
            <svg
              width={29}
              height={30}
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 29.452C18.0322 29.4549 21.443 28.1428 24.0869 25.7639L27.453 29.1824C27.6236 29.3518 27.8531 29.4461 28.0916 29.4447C28.3302 29.4434 28.5587 29.3465 28.7274 29.1752C28.8961 29.0038 28.9915 28.7718 28.9928 28.5295C28.9941 28.2872 28.9013 28.0542 28.7345 27.8809L25.3685 24.4623C27.7108 21.7772 29.0028 18.3133 29 14.726C29 6.60606 22.4953 0 14.5 0C6.50467 0 0 6.60606 0 14.726C0 22.846 6.50467 29.452 14.5 29.452ZM14.5 1.84075C21.4959 1.84075 27.1875 7.62106 27.1875 14.726C27.1875 21.831 21.4959 27.6113 14.5 27.6113C7.50409 27.6113 1.8125 21.831 1.8125 14.726C1.8125 7.62106 7.50409 1.84075 14.5 1.84075ZM8.67825 14.726C8.67825 14.4819 8.77373 14.2478 8.94368 14.0752C9.11364 13.9026 9.34415 13.8056 9.5845 13.8056H13.5937V9.7339C13.5937 9.4898 13.6892 9.2557 13.8592 9.0831C14.0291 8.91049 14.2596 8.81353 14.5 8.81353C14.7404 8.81353 14.9709 8.91049 15.1408 9.0831C15.3108 9.2557 15.4062 9.4898 15.4062 9.7339V13.8056H19.4155C19.6558 13.8056 19.8864 13.9026 20.0563 14.0752C20.2263 14.2478 20.3217 14.4819 20.3217 14.726C20.3217 14.9701 20.2263 15.2042 20.0563 15.3768C19.8864 15.5494 19.6558 15.6464 19.4155 15.6464H15.4062V19.7181C15.4062 19.9622 15.3108 20.1963 15.1408 20.3689C14.9709 20.5416 14.7404 20.6385 14.5 20.6385C14.2596 20.6385 14.0291 20.5416 13.8592 20.3689C13.6892 20.1963 13.5937 19.9622 13.5937 19.7181V15.6464H9.5845C9.34415 15.6464 9.11364 15.5494 8.94368 15.3768C8.77373 15.2042 8.67825 14.9701 8.67825 14.726Z"
                fill="#636363"
              />
            </svg>
          </div>
        </div>
        <div className="cs_product_info">
          <div className="overflow-hidden position-relative">
            <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
              <Link to={categoryUrl}>{category}</Link>
            </div>
            <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
              {title}
            </h2>
            <div className="cs_product_ratings">
              {<Review reviewNumber={rating} />}
            </div>
            <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
              ${price} <small>${mainPrice}</small>
            </p>
            <div className="cs_progress" style={{ width: "100%" }}>
              <div className="cs_progress_in" style={{ width: `${sold}%` }}>
                {sold} SOLD
              </div>
            </div>
            <div className="cs_products_btns">
              <Button3 variant={"cs_btn cs_style_1 cs_medium cs_size_md"} />
            </div>
          </div>
        </div>
      </div>
      <Link to={url} className="cs_product_link" />
    </div>
  );
};

export default ProductCard3;
