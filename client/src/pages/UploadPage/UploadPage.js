import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import VideoTitle from "../../components/VideoTitle/VideoTitle";
import "./UploadPage.scss";
export default function UploadPage() {
  return (
    <main className="upload-page">
      {/* allows us to use margins while maintaining page-wide border below header */}
      <section className="upload-page__styling">
        <VideoTitle text="Upload Video" />
        <UploadForm />
      </section>
    </main>
  );
}
