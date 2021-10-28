import Comment from "../Comment/Comment";
export default function CommentsSection(props) {
  return (
    <section className="commentSection">
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
