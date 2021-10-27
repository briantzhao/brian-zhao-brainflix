import "./App.scss";
import Header from "./components/Header/Header";
import VideoDesc from "./components/VideoDesc/VideoDesc";
import VideoViewer from "./components/VideoViewer/VideoViewer";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import NextVideoSection from "./components/NextVideoSection/NextVideoSection";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoViewer />
      <VideoDesc />
      <CommentsForm />
      <CommentsSection />
      <NextVideoSection />
    </div>
  );
}

export default App;
