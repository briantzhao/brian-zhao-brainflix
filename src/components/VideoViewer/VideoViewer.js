import data from "../../data/video-details.json";
import "./VideoViewer.scss";

export default function VideoViewer(props) {
  return (
    <video className="video-viewer" controls poster={data[0].image}></video>
  );
}
