import "./App.scss";
import Header from "./components/Header/Header";
import VideoDesc from "./components/VideoDesc/VideoDesc";
import VideoViewer from "./components/VideoViewer/VideoViewer";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import NextVideoSection from "./components/NextVideoSection/NextVideoSection";
import { Component } from "react";
import data from "./data/video-details.json";

class App extends Component {
  state = {
    videos: data,
    featured: data[0],
  };
  handleClick = (title) => {
    const videosCopy = [...this.state.videos];
    const index = videosCopy.findIndex((video) => {
      return video.title === title;
    });
    this.setState({ featured: videosCopy[index] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <VideoViewer video={this.state.featured} />
        <div className="App__main-section">
          <div className="App__video-details">
            <VideoDesc video={this.state.featured} />
            <CommentsForm />
            <CommentsSection video={this.state.featured} />
          </div>
          <NextVideoSection
            videos={this.state.videos}
            featured={this.state.featured}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
