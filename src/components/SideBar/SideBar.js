import "./SideBar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/2.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/3.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/4.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/5.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/6.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/7.jpeg"
              alt="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
