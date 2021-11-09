import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";
import addComment from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";
import { Component } from "react";
import axios from "axios";

const API_KEY = "?api_key=b8bd0af8-a965-46bf-b7eb-0e912afcac3d";
const API_URL = "https://project-2-api.herokuapp.com/";

//using state-based form
export default class CommentsForm extends Component {
  state = {
    name: "BrainStation Man",
    comment: "",
  };

  //set new state whenever someone types into field
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //check for non-empty comment, then do axios call when comment is submitted
  //update comments list and update list of user-generated comments
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.comment) {
      alert("Please submit a valid comment");
      return;
    }
    axios
      .post(`${API_URL}videos/${this.props.id}/comments/${API_KEY}`, {
        name: this.state.name,
        comment: this.state.comment,
      })
      .then(({ data }) => {
        this.props.update(this.props.id);
        this.props.updateComm(data.id);
        this.setState({ comment: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="comment-form" name="form" onSubmit={this.handleSubmit}>
        <div className="comment-form__profile">
          <ProfilePic />
        </div>
        <section className="comment-form__text">
          <label className="comment-form__title">
            JOIN THE CONVERSATION
            {/* set value to state */}
            <textarea
              className="comment-form__input"
              placeholder="Add a new comment"
              name="comment"
              onChange={this.handleChange}
              value={this.state.comment}
            ></textarea>
          </label>
          <Button type="submit" icon={addComment} text="COMMENT" />
        </section>
      </form>
    );
  }
}
