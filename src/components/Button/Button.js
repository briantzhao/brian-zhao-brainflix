import "./Button.scss";

//declared with icon and text as props
export default function Button({ text, icon }) {
  return (
    <button
      className="button"
      onClick={() =>
        text === "PUBLISH" ? alert("Submission Received!") : null
      }
    >
      <img className="button__image" src={icon} alt="button icon" />
      {text}
    </button>
  );
}
