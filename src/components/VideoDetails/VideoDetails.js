import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";
import { formatDate, deepDive } from "../../utils/FormatDate";

export default function VideoDetails(props) {
  return (
    <article className="video-details">
      <div className="video-details__header">
        <h3 className="video-details__channel">By {props.channel}</h3>
        <h4 className="video-details__timestamp">
          {deepDive(props.timestamp)}
        </h4>
      </div>
      <div className="video-details__stats">
        <h4 className="video-details__views">
          <img
            className="video-details__views-icon"
            src={viewIcon}
            alt="views"
          ></img>
          {props.views}
        </h4>
        <h4 className="video-details__likes">
          <img
            className="video-details__likes-icon"
            src={likesIcon}
            alt="likes"
          ></img>
          {props.likes}
        </h4>
      </div>
    </article>
  );
}
