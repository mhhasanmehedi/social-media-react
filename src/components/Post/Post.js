import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import "./Post.css";

const Post = ({ post }) => {
  const [react, setReact] = useState(post.like);
  const [isReact, setIsReact] = useState(false);
  const { date, comment, photo, userId, desc } = post;
  const user = Users.filter((usr) => usr.id === userId);
  const { profilePicture, username } = user[0];

  const handleReact = () => {
    setIsReact(!isReact);
    setReact(isReact ? react - 1 : react + 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profilePicture} alt="Person" />
            <span className="postUserName">{username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc && desc}</span>

          <img className="postImg" src={photo} alt="Person" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft" onClick={handleReact}>
            <img className="likeIcon" src="/assets/like.png" alt="Like" />
            <img className="likeIcon" src="/assets/heart.png" alt="Heart" />
            <span className="postLikeCounter">{react} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
