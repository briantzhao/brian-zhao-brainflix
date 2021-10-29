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
              key={video.id}
              video={video}
              handleClick={props.handleClick}
            />
          );
        })}
    </section>
  );
}
