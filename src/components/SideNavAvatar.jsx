// import ' ./SideNavAvatar.scss';
import avator from "../assets/Avatar.png";

import NavIcon from "./NavIcon";

const SideNavAvatar = () => {
  return (
    <>
      <div className="userAvator">
        <NavIcon url={avator} />
      </div>
      <div className="hover" >
        <h6 className="sidenav-username" style={{ marginLeft: "5px" }}>
          John Doe
        </h6>
        <small className="text-muted" style={{ opacity: 0.4 }}>
          @johnnydoe
        </small>
      </div>
    </>
  );
};

export default SideNavAvatar;
