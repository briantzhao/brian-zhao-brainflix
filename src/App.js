import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={UploadPage} />
          <Redirect from="/upload-video" to="/upload" />
          {/* route to return to homepage, but with the video id as url (when clicking on next videos) */}
          <Route path="/videos/:id" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
