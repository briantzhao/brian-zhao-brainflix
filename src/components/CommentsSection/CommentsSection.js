import Comment from "../Comment/Comment";
import "./CommentsSection.scss";
export default function CommentsSection(props) {
  return (
    <section className="comment-section">
      {props.video.comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        );
      })}
    </section>
  );
}
