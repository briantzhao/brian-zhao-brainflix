import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "../Button/Button";
import icon from "../../assets/icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header__style">
          <SearchBar />
          <ProfilePic />
          <Link to="/upload">
            <Button icon={icon} text="UPLOAD" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
