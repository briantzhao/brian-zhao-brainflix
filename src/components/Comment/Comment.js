import "./Comment.scss";

export default function Comment(props) {
  let dateFormatted = new Date(props.timestamp);
  dateFormatted = `${
    dateFormatted.getMonth() + 1
  }/${dateFormatted.getDate()}/${dateFormatted.getFullYear()}`;
  return (
    <div className="comment">
      <div className="comment__profile-pic"></div>
      <article className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{props.name}</h3>
          <h4 className="comment__timestamp">{dateFormatted}</h4>
        </div>
        <p className="comment__comment">{props.comment}</p>
      </article>
    </div>
  );
}
