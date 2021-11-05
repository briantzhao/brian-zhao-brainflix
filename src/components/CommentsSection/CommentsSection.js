import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

//passed featured video object as props
export default function CommentsSection({
  video,
  update,
  updateComm,
  newComms,
}) {
  return (
    <ul className="comment-section">
      {/* use map to build out comments section */}
      {video.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              vidId={video.id}
              update={update}
              updateComm={updateComm}
              newComms={newComms}
            />
          );
        })}
    </ul>
  );
}
