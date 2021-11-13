const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const http = require("http");

//default settings for new videos being uploaded
const vidViews = "9,001";
const vidLikes = "7,373";
const vidDuration = "6:30";
const vidChannel = "WildMudkip";
const vidVideo = "https://project-2-api.herokuapp.com/stream";
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
    name: "Mattice Casarez",
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

//array to hold data read from videos.json
let videoData = [];

//function to populate videoData with data from videos.json
const getVideoData = () => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    videoData = JSON.parse(data);
  });
};

//function to update videos.json
const postVideoData = (videos) => {
  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

//invoke getVideoData to initialize videoData array
getVideoData();

//base get route that provides full array of videos
router.get("/", (_req, res) => {
  getVideoData();
  //remove extra data to mimic Sprint 2 API
  const strippedData = videoData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel,
    };
  });
  res.json(strippedData);
});

//get route that provides hero video information
router.get("/:id", (req, res) => {
  let video = videoData.find((video) => {
    return video.id === req.params.id;
  });
  if (video) {
    res.json(video);
  } else {
    res.status(404).send("Video not found");
  }
});

//post route that adds new video to videoData array, and then writes to videos.json
router.post("/", (req, res) => {
  let videos = videoData;
  const { image, title, description } = req.body;

  //check that req body is properly filled out and create new video object if so
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
      channel: vidChannel,
      video: vidVideo,
    };
    videos.push(newVideo);
    videoData = videos;
    postVideoData(videoData);
    res.status(201).json(newVideo);
  } else {
    res.status(500).send("Video not created.");
  }
});

//post route that adds new comment to specified video
router.post("/:id/comments", (req, res) => {
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.id;
  });

  //check that video with given id exists
  if (videoIndex < 0) {
    res.status(500).send("Video not found");
  }

  //if name and comment exist, then create new comment and add to videoData array
  const { name, comment } = req.body;
  if (name && comment) {
    const newComment = {
      name,
      comment,
      id: uniqid(),
      timestamp: Date.now(),
      likes: 0,
    };
    videoData[videoIndex].comments.push(newComment);
    postVideoData(videoData);
    res.status(201).json(newComment);
  } else {
    res.status(500).send("Comment not created");
  }
});

//delete route that removes comment from specified video
router.delete("/:videoId/comments/:commentId", (req, res) => {
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.videoId;
  });

  //check that video was found - if so, find comment to be deleted
  if (videoIndex >= 0) {
    let commentIndex = videoData[videoIndex].comments.findIndex((comment) => {
      return comment.id === req.params.commentId;
    });

    //check that comment was found - if so, splice comment from videoData array and write to file
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

//put route that increases video likes value by one
router.put("/:videoId/likes", (req, res) => {
  let videoIndex = videoData.findIndex((video) => {
    return video.id === req.params.videoId;
  });

  //if video was found, convert likes from string to int, increase by 1, then
  //convert back to string using toLocaleString to include commas,
  //then write to file
  if (videoIndex >= 0) {
    let newLikes =
      parseInt(videoData[videoIndex].likes.split(",").join("")) + 1;
    newLikes = newLikes.toLocaleString("en-US");
    videoData[videoIndex].likes = newLikes;
    postVideoData(videoData);
    res.json(videoData[videoIndex]);
  } else {
    res.status(404).send("Video not found");
  }
});

module.exports = router;
