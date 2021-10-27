import "./Button.scss";

export default function Button(props) {
  return (
    <button class="button">
      <img class="button__image" src={props.icon} alt="button icon" />
      {props.text}
    </button>
  );
}
