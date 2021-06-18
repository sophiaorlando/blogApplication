import "./Home.css";
import Header from "../../Header/header";
import SideBar from "../../SideBar/SideBar";
import Posts from "../../Posts/Posts";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  //fetch data from database
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="Home">
        {/* passing posts from the database as props to Posts */}
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
