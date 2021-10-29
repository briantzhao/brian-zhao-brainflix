import "./VideoViewer.scss";

export default function VideoViewer(props) {
  return (
    <section className="video-viewer">
      <video
        className="video-viewer__video"
        controls
        poster={props.video.image}
      ></video>
    </section>
  );
}
