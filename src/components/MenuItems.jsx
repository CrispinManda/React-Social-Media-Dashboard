import './MenuItems.scss'
import trash from '../assets/trash.png'
import Inbox from '../assets/inbox.png'
import Mail from '../assets/send.png'
import Favorites from '../assets/trash.png'
import Drafts from '../assets/draft.png'
// import Spam from '../assets/spam.png'

function MenuItems() {
    const menuItems = [
      { title: "Timeline", icon: Inbox,
    //    value: 150 
    },
      {
        title: "Friends",
        icon: Mail,
        // value: 200,
      },
      {
        title: "Groups",
        icon: Favorites,
      },
      {
        title: "Videos",
        icon: Drafts,
      },
      {
        title: "Photos",
        icon: Inbox,
      },
      {
        title: "Events",
        icon: trash,
        value: 10,
      },
    ];
    return (
      <div className="menuitems">
        <h5 style={{ marginLeft: "20px", opacity: 0.4 }}>MENU</h5>

        {menuItems &&
          menuItems.map((item, index) => {
            return (
              <div className="menuitem" key={index}>
                <div className="menuItemLeft">
                  <img src={item.icon} alt={item.title} />
                  {item.value ? (
                    <span style={{ color: "#2563EB" }}> {item.title}</span>
                  ) : (
                    <span className="noNotificationStyle">{item.title}</span>
                  )}
                </div>
                <div className="menuItemRight">
                  {item.value ? (
                    <>
                      {item.value && (
                        <span
                          style={{
                            color: "#FFFF",
                            backgroundColor: "#F646AA",
                            borderRadius: "5px",
                            padding: "3px 5px",
                          }}
                        >
                          {item.value}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {item.value && (
                        <span className="value">{item.value}</span>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        <hr style={{ marginLeft: "10px", marginRight: "20px", opacity: 0.3 }} />
      </div>
    );
}

export default MenuItems