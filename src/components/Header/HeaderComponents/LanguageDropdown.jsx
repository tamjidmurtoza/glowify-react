import React from "react";
import { Link } from "react-router-dom";

const LanguageDropdown = ({
  showLan,
  setShowLan,
  languageOptions,
  defaultLan,
  defaultLanImage,
}) => {
  return (
    <div className="cs_dropdown cs_language_wrap">
      <button
        className={`cs_language_toggle cs_dropdown_btn ${
          showLan ? "active" : ""
        }`}
        onClick={() => setShowLan(!showLan)}
      >
        <img src={defaultLanImage} alt="Icon" />
        {defaultLan}
        <svg width={13} height={7} viewBox="0 0 13 7" fill="none">
          <path
            d="M6.50003 7C6.3489 7 6.19763 6.94298 6.08226 6.82908L0.173173 0.995781C-0.0577243 0.767845 -0.0577243 0.398743 0.173173 0.170952C0.40407 -0.0568383 0.777967 -0.0569841 1.00872 0.170952L6.50003 5.59184L11.9913 0.170952C12.2222 -0.0569841 12.5961 -0.0569841 12.8269 0.170952C13.0576 0.398889 13.0578 0.767991 12.8269 0.995781L6.9178 6.82908C6.80242 6.94298 6.65115 7 6.50003 7Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <ul
        className={`cs_dropdown_content cs_language_list ${
          showLan ? "active" : ""
        }`}
      >
        {languageOptions.map((language, index) => (
          <li key={index}>
            <Link to={language.url}>
              <img src={language.icon} alt="Icon" />
              {language.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
