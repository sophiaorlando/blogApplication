import "./sideBar.css";
import myImg from "../images/prof.JPG";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sideBarImg" src={myImg} alt="" />
        <p>
          Hello fellow Inter-web friends! I'm Sophia Orlando, the Software
          Engineer who built this beautiful MERN Blog Application. Roam around,
          check out all the features, write a blog post, share your thoughts, go
          crazy :P
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`?cats=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Social</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook-square"></i>
          <i className=" sidebarIcon fab fa-twitter-square"></i>
          <i className=" sidebarIcon fab fa-pinterest-square"></i>
          <i className=" sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
