import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <Link
            className={`cs_pagination_item cs_center ${
              currentPage === i ? "active" : ""
            }`}
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(i);
            }}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pages;
  };

  return (
    <ul className="cs_pagination_box">
      {/* Left arrow */}
      <li>
        <Link
          to="#"
          className={`cs_pagination_arrow cs_pagination_arrow_left cs_center cs_accent_color ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) handleClick(currentPage - 1);
          }}
        >
          <svg
            width={11}
            height={20}
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.96476L11 19.0353C11 19.8904 9.96356 20.326 9.34818 19.7129L0.279353 10.6777C-0.0931162 10.3066 -0.0931163 9.69347 0.279353 9.32222L9.34818 0.286953C9.96356 -0.325993 11 0.109636 11 0.96476Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </li>

      {/* Dynamic pagination items */}
      {renderPages()}

      {/* Right arrow */}
      <li>
        <Link
          to="#"
          className={`cs_pagination_arrow cs_pagination_arrow_right cs_center cs_accent_color ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) handleClick(currentPage + 1);
          }}
        >
          <svg
            width={11}
            height={20}
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.32057e-07 0.964762L4.21688e-08 19.0353C4.79022e-09 19.8904 1.03644 20.326 1.65182 19.7129L10.7206 10.6777C11.0931 10.3066 11.0931 9.69347 10.7206 9.32222L1.65182 0.286955C1.03644 -0.32599 8.69435e-07 0.109639 8.32057e-07 0.964762Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
