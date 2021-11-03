import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";
import addComment from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";

export default function CommentsForm() {
  return (
    <form
      className="comment-form"
      name="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="comment-form__profile">
        <ProfilePic />
      </div>
      <section className="comment-form__text">
        <label className="comment-form__title">
          JOIN THE CONVERSATION
          <textarea
            className="comment-form__input"
            placeholder="Add a new comment"
          ></textarea>
        </label>
        <Button icon={addComment} text="COMMENT" />
      </section>
    </form>
  );
}
