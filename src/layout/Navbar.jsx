import './Navbar.scss'
import NavIcon from '../components/NavIcon'
// import Button from '../components/Button'
import logo from '../assets/logo.png'
// import searchIcon from '../assets/search.png'
import notification from '../assets/notification.png';
import chevrondown from '../assets/chevron-down.png';
import avator from '../assets/Avatar.png';
import Search from '../components/Search'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="no" />
                <h2>Hiphonic</h2>
            </div>
            <div className="nav-body">
               
                <Search/>
                <div className="nav-body_right">
                    {/* <Button msg="New Message" sign={true} /> */}
                    {/* <NavIcon url={searchIcon} /> */}
                    <NavIcon url={notification} />
                    <div className="userAvator">
                        <NavIcon url={avator} />
                        <img className='userAvatorImg' src={chevrondown} alt="nopic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar