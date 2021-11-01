import React from "react";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideoSection from "../../components/NextVideoSection/NextVideoSection";
import "./HomePage.scss";
export default function HomePage(props) {
  return (
    <div>
      <VideoViewer video={props.featured} />
      <main className="HomePage__main-section">
        <div className="HomePage__video-details">
          <VideoDesc video={props.featured} />
          <CommentsForm />
          <CommentsSection video={props.featured} />
        </div>
        <NextVideoSection
          videos={props.videos}
          featured={props.featured}
          handleClick={props.handleClick}
        />
      </main>
    </div>
  );
}
