import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

export default function VideoDetails(props) {
  let dateFormatted = new Date(props.timestamp);
  dateFormatted = `${
    dateFormatted.getMonth() + 1
  }/${dateFormatted.getDate()}/${dateFormatted.getFullYear()}`;
  return (
    <div className="video-details">
      <div className="video-details__header">
        <h3 className="video-details__channel">By {props.channel}</h3>
        <h4 className="video-details__timestamp">{dateFormatted}</h4>
      </div>
      <div className="video-details__stats">
        <h4>
          <img src={viewIcon} alt="views"></img>
          {props.views}
        </h4>
        <h4>
          <img src={likesIcon} alt="likes"></img>
          {props.likes}
        </h4>
      </div>
    </div>
  );
}
