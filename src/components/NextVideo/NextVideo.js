import "./NextVideo.scss";

export default function NextVideo(props) {
  return (
    <div className="next-video">
      <img
        className="next-video__image"
        src={props.image}
        alt="Video screenshot"
      ></img>
      <section className="next-video__details">
        <h3 className="next-video__title">{props.title}</h3>
        <p className="next-video__channel">{props.channel}</p>
      </section>
    </div>
  );
}
