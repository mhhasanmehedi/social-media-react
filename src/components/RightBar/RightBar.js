import { Users } from "../../dummyData";
import Ads from "../Ads/Ads";
import "./RightBar.css";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="Gift png" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <Ads />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => {
            const { id, profilePicture, username } = user;
            return (
              <li className="rightBarFriend" key={id}>
                <div className="rightBarProfileImgContainer">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="rightBarProfileImg"
                  />
                  <span className="rightBarOnline"></span>
                </div>
                <span className="rightBarUsername">{username}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User information </h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue">Single </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="Person"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
        </div>
        <Ads />
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default RightBar;
