import "./VideoTitle.scss";

//passed featured video object title as props
export default function VideoTitle(props) {
  return <h1 className="video-title">{props.text}</h1>;
}
