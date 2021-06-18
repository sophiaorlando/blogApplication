import "./header.css";
import flowers from "../images/flowers.jpg";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={flowers} alt=""></img>
    </div>
  );
}
