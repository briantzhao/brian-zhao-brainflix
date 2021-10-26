export default function VideoDetails(props) {
  return (
    <div className="video-details">
      <div className="video-details__header">
        <h3 className="video-details__title">{props.title}</h3>
        <h4 className="video-details__timestamp">{props.timestamp}</h4>
      </div>
      <div className="video-details__stats">
        <h4>
          <img src="../assets/icons/views.svg" alt="views"></img>
          {props.views}
        </h4>
        <h4>
          <img src="../assets/icons/likes.svg" alt="likes"></img>
          {props.likes}
        </h4>
      </div>
    </div>
  );
}
