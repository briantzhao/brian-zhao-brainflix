import "./NextVideo.scss";

export default function NextVideo(props) {
  return (
    <article
      className="next-video"
      onClick={() => {
        props.handleClick(props.video);
      }}
    >
      <img
        className="next-video__image"
        src={props.video.image}
        alt="Video screenshot"
      ></img>
      <section className="next-video__details">
        <h3 className="next-video__title">{props.video.title}</h3>
        <p className="next-video__channel">{props.video.channel}</p>
      </section>
    </article>
  );
}
