import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

//passed "video" as featured video, "update" as axios call to update hero information,
//"updateComm" to delete ID's from user-generated comments list, and "newComms" as a list of user-generated comment ID's
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
