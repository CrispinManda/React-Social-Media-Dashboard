import './MainContent.scss'
// import SideNavAvatar from '../components/SideNavAvatar'
import ProfileNum from '../components/ProfileNum';
import RightSideBar from '../components/RightSideBar';


const MainContent = () => {
    return (
      <>
      <div className="mainContent">
        <div className="spacing">
          <button className="end">Edit Profile</button>
          <div className="avatar">
            {/* <div>
              <SideNavAvatar />
            </div> */}
           

          </div>
          <ProfileNum />
        </div>
          <div>
            <RightSideBar />
          </div>
      </div>

      </>
    );
}

export default MainContent