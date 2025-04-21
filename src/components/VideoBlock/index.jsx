import { useState } from "react";
import Spacing from "../Spacing";
import SectionHeading from "../Heading/SectionHeading";
import { Link } from "react-router-dom";
import VideoModal from "./Modal";

const VideoBlock = ({ data }) => {
  const { title, videoUrl, backgroundImage } = data || {};
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 justify-content-center">
          <div className="cs_section_heading_in">
            <SectionHeading
              title={title}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />
        <Link
          to={"#"}
          className="cs_video_block cs_style_1 cs_center cs_bg_filed cs_video_open"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          onClick={openModal}
        >
          <svg
            width={97}
            height={97}
            viewBox="0 0 97 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.5 92.1501C72.6072 92.1501 92.1501 72.6077 92.1501 48.5C92.1501 24.3928 72.6077 4.8499 48.5 4.8499C24.3928 4.8499 4.8499 24.3928 4.8499 48.5C4.8499 72.6072 24.3928 92.1501 48.5 92.1501ZM48.5 97C75.2855 97 97 75.2855 97 48.5C97 21.714 75.2855 0 48.5 0C21.714 0 0 21.714 0 48.5C0 75.2855 21.714 97 48.5 97Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.1027 48.4999L38.7996 33.6313V63.3689L61.1027 48.4999ZM65.6087 45.6752C67.6247 47.0192 67.6247 49.981 65.6087 51.3251L39.2275 68.9128C36.9714 70.417 33.9492 68.7992 33.9492 66.0877V30.9126C33.9492 28.201 36.9714 26.5837 39.2275 28.0879L65.6087 45.6752Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <VideoModal
        videoUrl={isModalOpen ? videoUrl : "about:blank"}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default VideoBlock;
