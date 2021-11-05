import NextVideo from "../NextVideo/NextVideo";
import "./NextVideoSection.scss";

//passed featured video object and video array as props
export default function NextVideoSection({ videos, featured }) {
  return (
    <section className="next-video-section">
      <h2 className="next-video-section__title">NEXT VIDEOS</h2>
      <ul>
        {/* map function to build out NextVideo components */}
        {videos
          .filter((video) => video.id !== featured.id)
          .map((video) => {
            return <NextVideo key={video.id} video={video} />;
          })}
      </ul>
    </section>
  );
}
