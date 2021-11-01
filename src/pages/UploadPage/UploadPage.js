import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import VideoTitle from "../../components/VideoTitle/VideoTitle";

export default function UploadPage() {
  return (
    <div>
      <VideoTitle text="Upload Video" />
      <UploadForm />
    </div>
  );
}
