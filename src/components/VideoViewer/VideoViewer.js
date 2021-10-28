import "./VideoViewer.scss";

export default function VideoViewer(props) {
  return (
    <video className="video-viewer" controls poster={props.video.image}></video>
  );
}
