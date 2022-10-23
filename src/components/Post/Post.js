import { MoreVert } from "@mui/icons-material";
import "./Post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`/assets/person/${img}.jpeg`}
              alt="Person"
            />
            <span className="postUserName">Mehedi Hasan</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post :)</span>

          <img
            className="postImg"
            src={`/assets/person/${img}.jpeg`}
            alt="Person"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="Like" />
            <img className="likeIcon" src="/assets/heart.png" alt="Heart" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
