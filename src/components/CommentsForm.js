import Button from "./Button";

export default function CommentsForm() {
  return (
    <form className="commentForm" name="form">
      <h3 className="commentForm__title">JOIN THE CONVERSATION</h3>
      <textarea
        className="commentForm__input"
        placeholder="Add a new comment"
      ></textarea>
      <Button icon="../assets/icons/add_comment.svg" text="COMMENT" />
    </form>
  );
}
