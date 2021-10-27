import "./ProfilePic.scss";
import profile from "../../assets/images/Mohan-muruge.jpg";

export default function ProfilePic() {
  return (
    <img className="profile-pic" src={profile} alt="Mohan Muruge profile" />
  );
}
