const uniqid = require("uniqid");
const express = require("express");
const app = express();
const fs = require("fs");

const port = 8080;
const vidViews = 9001;
const vidLikes = 7373;
const vidDuration = "6:30";
const vidComments = [
  {
    id: uniqid(),
    name: "Mattie Casarez",
    comment:
      "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
    likes: 0,
    timestamp: 1625250720000,
  },
  {
    id: uniqid(),
    name: "Mattie Casarez",
    comment:
      "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
    likes: 0,
    timestamp: 1625250720000,
  },
  {
    id: uniqid(),
    name: "Anne Weston",
    comment:
      "So glad I came across this. The way you have presented these techniques is perfectly clear. Even doing a couple of these things is sure to make me a happy camper!",
    likes: 0,
    timestamp: 1630678260000,
  },
];

app.use(express.json());

let videoData = [];

const getVideoData = () => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    videoData = JSON.parse(data);
  });
};

const postVideoData = (videos) => {
  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

getVideoData();

app.get("/videos", (req, res) => {
  res.json(videoData);
});

app.get("/videos/:id", (req, res) => {
  let video = videoData.find((video) => {
    return video.id === req.params.id;
  });
  if (video) {
    res.json(video);
  } else {
    res.status(404).send("Video not found");
  }
});

app.post("/videos", (req, res) => {
  console.log(req.body);
  let videos = videoData;
  const { image, title, description } = req.body;
  if (image && title && description) {
    const newVideo = {
      image,
      title,
      description,
      id: uniqid(),
      views: vidViews,
      likes: vidLikes,
      duration: vidDuration,
      timestamp: Date.now(),
      comments: vidComments,
    };
    videos.push(newVideo);
    videoData = videos;
    postVideoData(videos);
    res.status(201).json(newVideo);
  } else {
    res.status(500).send("Video not created.");
  }
});

app.post("/videos/:id/comments", (req, res) => {
  console.log(req.params);
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.id;
  });
  if (videoIndex < 0) {
    res.status(500).send("Video not found");
  }

  const { name, comment } = req.body;
  if (name && comment) {
    const newComment = { name, comment, id: uniqid(), timestamp: Date.now() };
    videoData[videoIndex].comments.push(newComment);
    postVideoData(videoData);
    res.status(201).json(newComment);
  } else {
    res.status(500).send("Comment not created");
  }
});

app.delete("/videos/:videoId/comments/:commentId", (req, res) => {
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.videoId;
  });
  if (videoIndex >= 0) {
    let commentIndex = videoData[videoIndex].comments.findIndex((comment) => {
      return comment.id === req.params.commentId;
    });
    if (commentIndex >= 0) {
      const deletedComment = videoData[videoIndex].comments.splice(
        commentIndex,
        1
      );
      postVideoData(videoData);
      res.json(deletedComment);
    } else {
      res.status(404).send("Comment not found");
    }
  } else {
    res.status(404).send("Video not found");
  }
});

app.put("/videos/:videoId/likes", (req, res) => {
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.videoId;
  });
  if (videoIndex >= 0) {
    videoData[videoIndex].likes = videoData[videoIndex].likes + 1;
    postVideoData(videoData);
    res.json(videoData[videoIndex]);
  } else {
    res.status(404).send("Video not found");
  }
});

app.listen(port, function () {
  console.log("Hello World");
});
