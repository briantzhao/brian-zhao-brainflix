import VideoTitle from "../VideoTitle/VideoTitle";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoDesc.scss";
export default function VideoDesc(props) {
  return (
    <div className="video-desc">
      <VideoTitle text={props.video.title} />
      <VideoDetails
        channel={props.video.channel}
        views={props.video.views}
        timestamp={props.video.timestamp}
        likes={props.video.likes}
      />
      <p class="video-desc__description">{props.video.description}</p>
      <h3 className="video-desc__comments">
        {props.video.comments.length} Comments
      </h3>
    </div>
  );
}
