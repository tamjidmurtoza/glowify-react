export default function VideoModal({ videoUrl, isOpen, onClose }) {
  return (
    <div className={`cs_video_popup ${isOpen ? "active" : ""}`}>
      <div className="cs_video_popup-overlay" onClick={onClose}></div>
      <div className="cs_video_popup_content">
        <div className="cs_video_popup_layer" onClick={onClose}></div>
        <div className="cs_video_popup_container">
          <div className="cs_video_popup_align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={videoUrl}
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="cs_video_popup_close" onClick={onClose}>
            &#x2715;
          </div>
        </div>
      </div>
    </div>
  );
}
