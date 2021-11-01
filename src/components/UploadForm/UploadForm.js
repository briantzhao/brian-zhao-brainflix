import React from "react";
import Button from "../Button/Button";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

export default function UploadForm(props) {
  return (
    <form className="upload-form">
      <label className="upload-form__thumbnail__label">
        VIDEO THUMBNAIL
        <img className="upload-form__thumbnail"></img>
      </label>
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
      <Link to="/">
        <Button icon={upload} text="PUBLISH" />
      </Link>
      <Link to="/">CANCEL</Link>
    </form>
  );
}
