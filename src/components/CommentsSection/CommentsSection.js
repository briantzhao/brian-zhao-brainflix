import Comment from "../Comment/Comment";
import "./CommentsSection.scss";
export default function CommentsSection(props) {
  return (
    <section className="comment-section">
      {props.video.comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </section>
  );
}
