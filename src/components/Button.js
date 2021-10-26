export default function Button(props) {
  return (
    <button>
      <img src={props.icon} alt="button icon" />
      {props.text}
    </button>
  );
}
