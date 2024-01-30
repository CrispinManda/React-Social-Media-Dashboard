import './SideNav.scss'
// import Button from '../components/Button'
import MenuItems from '../components/MenuItems'
// import DirectMessage from '../components/DirectMessage'
import SideNavAvatar from '../components/SideNavAvatar';
function SideNav() {
    return (
      <div className="sidenav">
        <div className="sidenav-btn">
          {/* <Button msg="New Message" sign={true} /> */}
          <SideNavAvatar />
        </div>
        <div className="sidenav-menu">
          <MenuItems />
        </div>
        <div className="sidenav-sms">
          {/* <DirectMessage /> */}
          <h3>MENU ITEMS</h3>
          
        </div>
      </div>
    );
}

export default SideNav