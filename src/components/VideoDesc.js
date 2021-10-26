import VideoTitle from "./VideoTitle";
import VideoDetails from "./VideoDetails";
import data from "../data/video-details.json";

export default function VideoDesc() {
  return (
    <div className="videoDesc">
      <VideoTitle text={data[0].title} />
      <VideoDetails
        channel={data[0].channel}
        views={data[0].views}
        timestamp={data[0].timestamp}
        likes={data[0].likes}
      />
      <p class="videoDesc__description">{data[0].description}</p>
    </div>
  );
}
