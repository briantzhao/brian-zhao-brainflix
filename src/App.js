import "./App.css";
import Header from "./components/Header";
import VideoDesc from "./components/VideoDesc";
import VideoViewer from "./components/VideoViewer";
import CommentsForm from "./components/CommentsForm";
import CommentsSection from "./components/CommentsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoViewer />
      <VideoDesc />
      <CommentsForm />
      <CommentsSection />
    </div>
  );
}

export default App;
