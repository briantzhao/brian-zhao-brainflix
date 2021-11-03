import React from "react";
import Button from "../Button/Button";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";
import "./UploadForm.scss";
import uploadThumb from "../../assets/images/upload.jpg";

export default function UploadForm() {
  return (
    <form
      className="upload-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* article to separate input section from buttons */}
      <article className="upload-form__input">
        <label className="upload-form__thumbnail__label">
          VIDEO THUMBNAIL
          <img
            className="upload-form__thumbnail"
            src={uploadThumb}
            alt="video thumbnail"
          ></img>
        </label>
        {/* section to apply flex to text inputs for desktop view*/}
        <section className="upload-form__text">
          <label className="upload-form__title__label">
            TITLE YOUR VIDEO
            <input
              className="upload-form__title"
              type="text"
              placeholder="Add a title to your video"
            ></input>
          </label>
          <label className="upload-form__description__label">
            ADD A VIDEO DESCRIPTION
            <textarea
              className="upload-form__description"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
        </section>
      </article>
      {/* section to apply row reverse flexbox to buttons for tablet view*/}
      <section className="upload-form__buttons">
        <Link to="/">
          <Button icon={upload} text="PUBLISH" />
        </Link>
        <Link to="/">
          <p className="upload-form__cancel">CANCEL</p>
        </Link>
      </section>
    </form>
  );
}
