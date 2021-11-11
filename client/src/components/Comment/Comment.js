import "./Comment.scss";
import { deepDive } from "../../utils/FormatDate";
import axios from "axios";
import ProfilePic from "../ProfilePic/ProfilePic";

const API_URL = "http://localhost:8080/";

//passed "comment" for comment info, "vidId" for id of featured video, update for axios-get call for video details update,
//updateComm to delete comments, and newComms to find comments that need profile pictures
export default function Comment({
  comment,
  vidId,
  update,
  updateComm,
  newComms,
}) {
  //function to do axios call to delete comment, update newComments state, and update comments list
  const deleteComment = () => {
    // axios
    //   .delete(`${API_URL}videos/${vidId}/comments/${comment.id}/${API_KEY}`)
    //   .then(() => {
    //     update(vidId);
    //     updateComm(vidId, true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .delete(`${API_URL}videos/${vidId}/comments/${comment.id}/`)
      .then(() => {
        update(vidId);
        updateComm(vidId, true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <li className="comment">
      <section className="comment__left">
        {/* check if comment is a user-generated comment: if so, display profilepic, otherwise show gray circle */}
        {newComms.findIndex((id) => id === comment.id) >= 0 ? (
          <ProfilePic />
        ) : (
          <div className="comment__profile-pic"></div>
        )}
      </section>
      <section className="comment__text">
        <div className="comment__header">
          <h3 className="comment__user">{comment.name}</h3>
          <h4 className="comment__timestamp">{deepDive(comment.timestamp)}</h4>
        </div>
        <div className="comment__styling">
          <p className="comment__comment">{comment.comment}</p>
          <button className="comment__delete" onClick={deleteComment}>
            Delete
          </button>
        </div>
      </section>
    </li>
  );
}
