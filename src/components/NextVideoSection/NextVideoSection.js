import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoSection.scss";
export default function NextVideoSection(props) {
  return (
    <section className="next-video-section">
      <h2 className="next-video-section__title">NEXT VIDEOS</h2>
      <ul>
        {props.videos
          .filter((video) => video.id !== props.featured.id)
          .map((video) => {
            return (
              <NextVideo
                key={video.id}
                video={video}
                handleClick={props.handleClick}
              />
            );
          })}
      </ul>
    </section>
  );
}
