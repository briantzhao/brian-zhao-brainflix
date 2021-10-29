import "./NextVideo.scss";

export default function NextVideo(props) {
  // ellipses code
  const title = () => {
    switch (props.video.id) {
      case "25ce5d91-a262-4dcf-bb87-42b87546bcfa":
        return (
          <>
            <h3 className="next-video__title next-video__title__les">
              Les Houches The Hidden Gem Of The...
            </h3>
            <h3 className="next-video__title next-video__title__les--tablet">
              LesHouches The Hidden Gem Of The Chamonix
            </h3>
          </>
        );
      case "b6f35f03-7936-409b-bd2a-446bcc5f30e7":
        return (
          <>
            <h3 className="next-video__title next-video__title__travel">
              Travel Health Useful Medical Information...
            </h3>
            <h3 className="next-video__title next-video__title__travel--tablet">
              Travel Health Useful Medical Information For
            </h3>
          </>
        );
      case "9c268c0a-83dc-4b96-856a-bb5ded2772b1":
        return (
          <>
            <h3 className="next-video__title next-video__title__romantic">
              Take A Romantic Break In A Boutique...
            </h3>
            <h3 className="next-video__title next-video__title__romantic--tablet">
              Take A Romantic Break In A Boutique Hotel
            </h3>
          </>
        );
      default:
        return <h3 className="next-video__title">{props.video.title}</h3>;
    }
  };
  return (
    <li
      className="next-video"
      key={props.key}
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
        {/* ellipses code */}
        {title()}
        {/* non-ellipses code */}
        {/* <h3 className="next-video__title">{props.video.title}</h3> */}
        <p className="next-video__channel">{props.video.channel}</p>
      </section>
    </li>
  );
}
