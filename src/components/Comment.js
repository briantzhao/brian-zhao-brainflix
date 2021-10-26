export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__profilePic"></div>
      <article className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{props.name}</h3>
          <h4 className="comment__timestamp">{props.timestamp}</h4>
        </div>
        <p className="comment__comment">{props.comment}</p>
      </article>
    </div>
  );
}
