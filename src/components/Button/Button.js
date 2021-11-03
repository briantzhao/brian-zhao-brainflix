import "./Button.scss";

//declared with icon and text as props
export default function Button(props) {
  return (
    <button
      className="button"
      onClick={() =>
        props.text === "PUBLISH" ? alert("Submission Received!") : null
      }
    >
      <img className="button__image" src={props.icon} alt="button icon" />
      {props.text}
    </button>
  );
}
