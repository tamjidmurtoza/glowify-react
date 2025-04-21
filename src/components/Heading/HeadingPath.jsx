import { Link } from "react-router-dom";

const HeadingPath = ({ active, kye, label, url }) => {
  return (
    <>
      <li key={kye} className={`breadcrumb-item ${active ? "active" : ""}`}>
        {active ? label : <Link to={url}>{label}</Link>}
      </li>
    </>
  );
};

export default HeadingPath;
