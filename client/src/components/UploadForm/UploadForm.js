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
  //published state decides whether to set the default upload picture or to substitute user-submitted picture
  state = {
    published: false,
    title: "",
    description: "",
    image: "",
    uploadImg: null,
  };

  //handles updates to title and description input fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "image") {
      this.setState({ published: true });
    }
  };

  //handles updates to image upload input field
  handleImage = (event) => {
    this.setState({ image: event.target.files[0], published: true });
  };

  //grabs default image from server
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

  //sends post call to server to add new video object to server array
  handleSubmit = (event) => {
    event.preventDefault();

    //checks that user submits title and description
    if (!(this.state.title && this.state.description && this.state.image)) {
      alert("Please submit an upload image, a title, and description");
      return;
    }

    //convert uploaded image data to URL
    let sentImage = URL.createObjectURL(this.state.image);
    axios
      .post(`${API_URL}videos/`, {
        image: sentImage,
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => {
        alert("Submission received!");
        //sends user to Homepage after successful submission
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //renders loading screen before componentDidMount kicks in
    if (this.state.uploadImg === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <form className="upload-page__form" onSubmit={this.handleSubmit}>
        {/* article to separate input section from buttons */}
        <article className="upload-page__form__input">
          <label className="upload-page__form__thumbnail__label">
            VIDEO THUMBNAIL
            <img
              className="upload-page__form__thumbnail"
              // sets displayed image to default image if no file has been uploaded, otherwise sets to uploaded image
              src={URL.createObjectURL(
                this.state.published ? this.state.image : this.state.uploadImg
              )}
              alt="video thumbnail"
            ></img>
            <input
              className="upload-page__form__thumbnail-field"
              type="file"
              placeholder={uploadThumb}
              name="image"
              onChange={this.handleImage}
            ></input>
          </label>
          {/* section to apply flex to text inputs for desktop view*/}
          <section className="upload-page__form__text">
            <label className="upload-page__form__title__label">
              TITLE YOUR VIDEO
              <input
                className="upload-page__form__title"
                type="text"
                placeholder="Add a title to your video"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              ></input>
            </label>
            <label className="upload-page__form__description__label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="upload-page__form__description"
                placeholder="Add a description to your video"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              ></textarea>
            </label>
          </section>
        </article>
        {/* section to apply row reverse flexbox to buttons for tablet view*/}
        <section className="upload-page__form__buttons">
          <Button icon={upload} text="PUBLISH" />
          <Link to="/">
            <p className="upload-page__form__cancel">CANCEL</p>
          </Link>
        </section>
      </form>
    );
  }
}

export default withRouter(UploadForm);
