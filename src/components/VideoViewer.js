import data from "../data/video-details.json";

export default function VideoViewer(props) {
  return (
    <video className="video-viewer">
      <source src={data[0].video}></source>
    </video>
  );
}
