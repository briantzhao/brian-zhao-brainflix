import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfilePic from "./ProfilePic";
import Button from "./Button";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <ProfilePic />
      <Button icon="../assets/icons/upload.svg" text="UPLOAD" />
    </div>
  );
}
