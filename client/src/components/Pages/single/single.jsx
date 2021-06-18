import "./single.css";
import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../singlePost/SinglePost";

export default function single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
