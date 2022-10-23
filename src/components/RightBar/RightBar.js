import { Users } from "../../dummyData";
import "./RightBar.css";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="Gift png" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="Ad" className="rightBarAd" />
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
      </div>
    </div>
  );
};

export default RightBar;
