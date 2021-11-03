import React from "react";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideoSection from "../../components/NextVideoSection/NextVideoSection";
import "./HomePage.scss";
import { Component } from "react";
import axios from "axios";

const API_KEY = "?api_key=b8bd0af8-a965-46bf-b7eb-0e912afcac3d";
const API_URL = "https://project-2-api.herokuapp.com/";

export default class HomePage extends Component {
  //videos holds array of video objects, featured holds the video displayed in the hero video section
  state = {
    videos: [],
    featured: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}videos/${API_KEY}`)
      .then((res) => {
        this.setState({ videos: res.data });
        return axios.get(`${API_URL}videos/${res.data[0].id}/${API_KEY}`);
      })
      .then((res) => {
        this.setState({ featured: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevVidId = prevProps.match.params.id;
    const vidId = this.props.match.params.id;
    if (prevVidId !== vidId) {
      axios
        .get(`${API_URL}videos/${vidId}/${API_KEY}`)
        .then((res) => {
          this.setState({
            featured: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    if (this.state.featured === null) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <VideoViewer video={this.state.featured} />
        <main className="HomePage__main-section">
          <div className="HomePage__video-details">
            <VideoDesc video={this.state.featured} />
            <CommentsForm />
            <CommentsSection comments={this.state.featured.comments} />
          </div>
          <NextVideoSection
            videos={this.state.videos}
            featured={this.state.featured}
          />
        </main>
      </div>
    );
  }
}
