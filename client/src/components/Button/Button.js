import "./Button.scss";

//declared with icon and text as props
export default function Button({ text, icon, onclick }) {
  return (
    //if the button is the PUBLISH button, then add an on-click that sends alert
    // if the form onSubmit sets the alert, it doesn't run before the page redirect

    <button className="button" type="submit" onClick={onclick ? onclick : null}>
      <img className="button__image" src={icon} alt="button icon" />
      {text}
    </button>
  );
}