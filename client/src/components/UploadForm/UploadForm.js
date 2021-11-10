import React, { Component } from "react";
import Button from "../Button/Button";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";
import "./UploadForm.scss";
import uploadThumb from "../../assets/images/upload.jpg";
import { withRouter } from "react-router";
import axios from "axios";

const API_URL = "http://localhost:8080/";

class UploadForm extends Component {
  state = {
    published: false,
    title: "",
    description: "",
    image: "",
    uploadImg: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios
      .get(`${API_URL}images/upload.jpg`, { responseType: "blob" })
      .then(({ data }) => {
        this.setState({ uploadImg: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!(this.state.title && this.state.description && this.state.uploadImg)) {
      alert("Please submit a title and description");
      return;
    }
    axios
      .post(`${API_URL}videos/`, {
        image: URL.createObjectURL(this.state.uploadImg),
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => {
        alert("Submission received!");
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.uploadImg === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <form className="upload-form" onSubmit={this.handleSubmit}>
        {/* article to separate input section from buttons */}
        <article className="upload-form__input">
          <label className="upload-form__thumbnail__label">
            VIDEO THUMBNAIL
            <img
              className="upload-form__thumbnail"
              src={URL.createObjectURL(this.state.uploadImg)}
              alt="video thumbnail"
            ></img>
            <input
              className="upload-form__thumbnail-field"
              type="file"
              placeholder={uploadThumb}
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            ></input>
          </label>
          {/* section to apply flex to text inputs for desktop view*/}
          <section className="upload-form__text">
            <label className="upload-form__title__label">
              TITLE YOUR VIDEO
              <input
                className="upload-form__title"
                type="text"
                placeholder="Add a title to your video"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              ></input>
            </label>
            <label className="upload-form__description__label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="upload-form__description"
                placeholder="Add a description to your video"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              ></textarea>
            </label>
          </section>
        </article>
        {/* section to apply row reverse flexbox to buttons for tablet view*/}
        <section className="upload-form__buttons">
          <Button icon={upload} text="PUBLISH" />
          <Link to="/">
            <p className="upload-form__cancel">CANCEL</p>
          </Link>
        </section>
      </form>
    );
  }
}

export default withRouter(UploadForm);
