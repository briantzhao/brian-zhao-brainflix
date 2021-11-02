import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Component } from "react";
import data from "./data/video-details.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  //videos holds array of video objects, featured holds the video displayed in the hero video section
  state = {
    videos: data,
    featured: data[0],
  };

  //passed to side video elements, updates featured video when a side video element is clicked
  handleClick = (videoObj) => {
    const videosCopy = [...this.state.videos];
    const index = videosCopy.findIndex((video) => {
      return video.id === videoObj.id;
    });
    this.setState({ featured: videosCopy[index] });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage
                featured={this.state.featured}
                videos={this.state.videos}
                handleClick={this.handleClick}
              />
            </Route>
            <Route path="/upload" component={UploadPage} />
            <Redirect from="/upload-video" to="/upload" />
            {/* route to return to homepage, but with the video id as url (when clicking on next videos) */}
            <Route path={`/:id`}>
              <HomePage
                featured={this.state.featured}
                videos={this.state.videos}
                handleClick={this.handleClick}
              />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
