import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";
import addComment from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";

export default function CommentsForm() {
  return (
    <form className="comment-form" name="form">
      <div className="comment-form__profile">
        <ProfilePic />
      </div>
      <section className="comment-form__text">
        <h3 className="comment-form__title">JOIN THE CONVERSATION</h3>
        <textarea
          className="comment-form__input"
          placeholder="Add a new comment"
        ></textarea>
        <Button icon={addComment} text="COMMENT" />
      </section>
    </form>
  );
}
