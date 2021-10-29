import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

export default function VideoDetails(props) {
  const formatDate = (date) => {
    const newDate = new Date(date);
    const newMonth =
      newDate.getMonth() + 1 < 10
        ? `0${newDate.getMonth() + 1}`
        : newDate.getMonth() + 1;
    const newDay =
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
    const newYear = newDate.getFullYear();
    return `${newMonth}/${newDay}/${newYear}`;
  };

  const deepDive = (date) => {
    const daysPassed = Math.floor((Date.now() - date) / 86400000);
    if (daysPassed < 1) {
      return `less than 1 day ago`;
    }
    if (daysPassed < 2) {
      return `1 day ago`;
    }
    if (daysPassed < 30) {
      return `${daysPassed} days ago`;
    }
    if (daysPassed < 60) {
      return `1 month ago`;
    }
    if (daysPassed < 365) {
      return `${Math.floor(daysPassed / 30)} months ago`;
    }
    return `over 1 year ago`;
  };

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
