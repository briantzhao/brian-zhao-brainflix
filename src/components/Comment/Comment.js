import "./Comment.scss";
import { deepDive } from "../../utils/FormatDate";
import axios from "axios";
import ProfilePic from "../ProfilePic/ProfilePic";

const API_KEY = "?api_key=b8bd0af8-a965-46bf-b7eb-0e912afcac3d";
const API_URL = "https://project-2-api.herokuapp.com/";

//passed individual comment objects as props
export default function Comment({
  comment,
  vidId,
  update,
  updateComm,
  newComms,
}) {
  const deleteComment = () => {
    axios
      .delete(`${API_URL}videos/${vidId}/comments/${comment.id}/${API_KEY}`)
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
