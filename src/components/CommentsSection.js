import Comment from "./Comment";
import data from "../data/video-details.json";
export default function CommentsSection() {
  return (
    <div className="commentSection">
      {data[0].comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}
