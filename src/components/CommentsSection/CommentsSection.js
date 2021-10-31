import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

//passed featured video object as props
export default function CommentsSection(props) {
  let i = 0;
  return (
    <ul className="comment-section">
      {/* use map to build out comments section */}
      {props.video.comments.map((comment) => {
        return <Comment comment={comment} key={i++} />;
      })}
    </ul>
  );
}
