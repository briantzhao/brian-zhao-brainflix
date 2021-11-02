import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoSection.scss";

//passed featured video object and video array as props
export default function NextVideoSection(props) {
  return (
    <section className="next-video-section">
      <h2 className="next-video-section__title">NEXT VIDEOS</h2>
      <ul>
        {/* map function to build out NextVideo components */}
        {props.videos
          .filter((video) => video.id !== props.featured.id)
          .map((video) => {
            return (
              // <NextVideo
              //   key={video.id}
              //   video={video}
              //   handleClick={props.handleClick}
              // />
              <NextVideo key={video.id} video={video} />
            );
          })}
      </ul>
    </section>
  );
}
