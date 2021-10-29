import "./Comment.scss";
import { formatDate, deepDive } from "../../utils/FormatDate";

export default function Comment(props) {
  return (
    <li className="comment">
      <div className="comment__profile-pic"></div>
      <section className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{props.comment.name}</h3>
          <h4 className="comment__timestamp">
            {deepDive(props.comment.timestamp)}
          </h4>
        </div>
        <p className="comment__comment">{props.comment.comment}</p>
      </section>
    </li>
  );
}
