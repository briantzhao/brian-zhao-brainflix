import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoSection.scss";
export default function NextVideoSection(props) {
  return (
    <section className="next-video-section">
      <h2 className="next-video-section__title">NEXT VIDEOS</h2>
      {props.videos
        .filter((video) => video.title !== props.featured.title)
        .map((video) => {
          return (
            <NextVideo
              image={video.image}
              title={video.title}
              channel={video.channel}
              handleClick={props.handleClick}
            />
          );
        })}
    </section>
  );
}
