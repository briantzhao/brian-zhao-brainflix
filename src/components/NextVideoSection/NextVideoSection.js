import data from "../../data/video-details.json";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoSection.scss";
export default function NextVideoSection() {
  return (
    <div className="next-video-section">
      <h4 className="next-video-section__title">NEXT VIDEOS</h4>
      {data.map((video) => {
        return (
          <NextVideo
            image={video.image}
            title={video.title}
            channel={video.channel}
          />
        );
      })}
    </div>
  );
}
