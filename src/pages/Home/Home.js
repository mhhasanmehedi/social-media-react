import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
