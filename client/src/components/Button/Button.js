import "./Button.scss";

//declared with icon and text as props
export default function Button({ text, icon, onclick }) {
  return (
    //add onclick to button if onclick is provided
    <button className="button" type="submit" onClick={onclick ? onclick : null}>
      <img className="button__image" src={icon} alt="button icon" />
      {text}
    </button>
  );
}
