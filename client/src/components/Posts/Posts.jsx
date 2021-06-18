import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        // sending information of posts to post
        <Post post={p} />
      ))}
    </div>
  );
}
