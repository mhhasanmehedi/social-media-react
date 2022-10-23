import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post img="1" />
        <Post img="2" />
        <Post img="3" />
        <Post img="4" />
        <Post img="5" />
        <Post img="6" />
        <Post img="7" />
        <Post img="8" />
        <Post img="9" />
      </div>
    </div>
  );
};

export default Feed;
