import VideoTitle from "../VideoTitle/VideoTitle";
import VideoDetails from "../VideoDetails/VideoDetails";
import data from "../../data/video-details.json";
import "./VideoDesc.scss";
export default function VideoDesc() {
  return (
    <div className="video-desc">
      <VideoTitle text={data[0].title} />
      <VideoDetails
        channel={data[0].channel}
        views={data[0].views}
        timestamp={data[0].timestamp}
        likes={data[0].likes}
      />
      <p class="video-desc__description">{data[0].description}</p>
      <h3 className="video-desc__comments">
        {data[0].comments.length} Comments
      </h3>
    </div>
  );
}
