import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

//passed featured video object as props
export default function CommentsSection(props) {
  return (
    <ul className="comment-section">
      {/* use map to build out comments section */}
      {props.video.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              vidId={props.video.id}
              update={props.update}
              updateComm={props.updateComm}
              newComms={props.newComms}
            />
          );
        })}
    </ul>
  );
}
