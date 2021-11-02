import React from "react";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideoSection from "../../components/NextVideoSection/NextVideoSection";
import "./HomePage.scss";
import { Component } from "react";
import data from "../../data/video-details.json";

export default class HomePage extends Component {
  //videos holds array of video objects, featured holds the video displayed in the hero video section
  state = {
    videos: data,
    featured: data[0],
  };

  // componentDidMount() {
  //   mockAPI.getVideos.then(videosData => {
  //     this.setState({videos: videosData, featured: videosData[0]})
  // })

  componentDidUpdate(prevProps, prevState) {
    const prevVidId = prevProps.match.params.id;
    const vidId = this.props.match.params.id;
    if (prevVidId !== vidId) {
      this.setState({
        featured: this.state.videos.find((video) => {
          return video.id == vidId;
        }),
      });
    }
  }

  // }
  // //passed to side video elements, updates featured video when a side video element is clicked
  // handleClick = (videoObj) => {
  //   const videosCopy = [...this.state.videos];
  //   const index = videosCopy.findIndex((video) => {
  //     return video.id === videoObj.id;
  //   });
  //   this.setState({ featured: videosCopy[index] });
  // };
  render() {
    if (this.state.featured === null) return <p>Loading...</p>;
    return (
      <div>
        <VideoViewer video={this.state.featured} />
        <main className="HomePage__main-section">
          <div className="HomePage__video-details">
            <VideoDesc video={this.state.featured} />
            <CommentsForm />
            <CommentsSection video={this.state.featured} />
          </div>
          {/* <NextVideoSection
            videos={this.state.videos}
            featured={this.state.featured}
            handleClick={this.handleClick}
          /> */}
          <NextVideoSection
            videos={this.state.videos}
            featured={this.state.featured}
          />
        </main>
      </div>
    );
  }
}
