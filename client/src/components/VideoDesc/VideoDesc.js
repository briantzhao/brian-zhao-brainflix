import VideoTitle from "../VideoTitle/VideoTitle";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./VideoDesc.scss";

//passed featured video object as props, as well as handleLike function to pass to VideoDetails component
export default function VideoDesc({ video, handleLike }) {
  return (
    <section className="video-desc">
      <VideoTitle text={video.title} />
      <VideoDetails
        channel={video.channel}
        views={video.views}
        timestamp={video.timestamp}
        likes={video.likes}
        handleLike={handleLike}
        id={video.id}
      />
      <p className="video-desc__description">{video.description}</p>
      <h3 className="video-desc__comments">{video.comments.length} Comments</h3>
    </section>
  );
}
