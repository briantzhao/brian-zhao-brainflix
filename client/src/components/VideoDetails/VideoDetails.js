import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";
import { deepDive } from "../../utils/FormatDate";

//passed featured video object channel, timestamp, views, likes as props
export default function VideoDetails({ timestamp, views, likes, channel }) {
  return (
    <article className="video-details">
      <div className="video-details__header">
        <h3 className="video-details__channel">By {channel}</h3>
        <h4 className="video-details__timestamp">{deepDive(timestamp)}</h4>
      </div>
      <div className="video-details__stats">
        <h4 className="video-details__views">
          <img
            className="video-details__views-icon"
            src={viewIcon}
            alt="views"
          ></img>
          {views}
        </h4>
        <h4 className="video-details__likes">
          <img
            className="video-details__likes-icon"
            src={likesIcon}
            alt="likes"
          ></img>
          {likes}
        </h4>
      </div>
    </article>
  );
}
