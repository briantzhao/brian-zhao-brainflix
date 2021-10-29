import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "../Button/Button";
import icon from "../../assets/icons/upload.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__style">
        <SearchBar />
        <ProfilePic />
        <Button icon={icon} text="UPLOAD" />
      </div>
    </header>
  );
}
