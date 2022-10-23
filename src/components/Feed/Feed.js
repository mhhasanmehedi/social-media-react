import { Posts } from "../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
