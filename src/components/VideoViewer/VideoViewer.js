import "./VideoViewer.scss";

//passed featured video object as props
export default function VideoViewer({ video }) {
  return (
    // section created for black bars on side
    <section className="video-viewer">
      <video
        className="video-viewer__video"
        controls
        poster={video.image}
      ></video>
    </section>
  );
}
