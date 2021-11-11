import React from "react";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideoSection from "../../components/NextVideoSection/NextVideoSection";
import "./HomePage.scss";
import { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/";

export default class HomePage extends Component {
  //videos holds array of video objects, featured holds the video displayed in the hero video section
  state = {
    videos: [],
    featured: null,
    newComments: [], //holds list of comments that were user-generated, so that I can apply the profile picture to the comments later
  };

  componentDidMount() {
    axios
      .get(`${API_URL}videos/`)
      .then(({ data }) => {
        this.setState({ videos: data });
        //check if the user is refreshing on a specific video. if not, use the default
        this.props.match.params.id
          ? this.updateVideo(this.props.match.params.id)
          : this.updateVideo(data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //update featured video if url has changed
  componentDidUpdate({ match }) {
    const prevVidId = match.params.id;
    const vidId = this.props.match.params.id;
    if (prevVidId !== vidId) {
      if (vidId === undefined) {
        this.updateVideo(this.state.videos[0].id);
        return;
      }
      this.updateVideo(vidId);
    }
  }

  //function to call for new hero video information (also refreshes for comment addition/deletion)
  updateVideo = (vidId) => {
    axios
      .get(`${API_URL}videos/${vidId}/`)
      .then(({ data }) => {
        this.setState({ featured: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function to add/delete comment ID's to newComments state for user-generated comments
  updateNewComms = (commId, del) => {
    let newCommCopy = [...this.state.newComments];
    if (del) {
      const index = newCommCopy.findIndex((id) => id === commId);
      if (index >= 0) {
        newCommCopy.splice(index, 1);
      }
      this.setState({ newComments: newCommCopy });
    } else {
      newCommCopy.push(commId);
      this.setState({ newComments: newCommCopy });
    }
  };

  //updates video likes, passed to VideoDetails component
  handleLike = (id) => {
    axios
      .put(`${API_URL}videos/${id}/likes`)
      .then(({ data }) => {
        this.setState({ featured: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //render loading screen before axios call
    if (this.state.featured === null || this.state.videos.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <VideoViewer video={this.state.featured} />
        <main className="HomePage__main-section">
          <div className="HomePage__video-details">
            <VideoDesc
              video={this.state.featured}
              handleLike={this.handleLike}
            />
            {/* passes id for comment post call, update to call for new comments list, and updateComm to add new comment id to newComments state */}
            <CommentsForm
              id={this.state.featured.id}
              update={this.updateVideo}
              updateComm={this.updateNewComms}
            />
            {/* passes update to call for new comments list, updateComm to delete comment id from newComments state, and newComms to check which comment ID's have profile pics */}
            <CommentsSection
              video={this.state.featured}
              update={this.updateVideo}
              updateComm={this.updateNewComms}
              newComms={this.state.newComments}
            />
          </div>
          {/* passes featured so that the hero video can be filtered out */}
          <NextVideoSection
            videos={this.state.videos}
            featured={this.state.featured}
          />
        </main>
      </div>
    );
  }
}
