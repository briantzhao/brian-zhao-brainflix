import "./VideoTitle.scss";

//passed featured video object title as props
export default function VideoTitle({ text }) {
  return <h1 className="video-title">{text}</h1>;
}
