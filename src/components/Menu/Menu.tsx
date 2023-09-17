import "./Menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../dummy_data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Menu = () => {
    
    const [isOpen,setIsOpen] = useState(true);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div className="container">
      <div style={{width:isOpen ? "200px" : "500px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display:isOpen ? "block" : "none"}}>Logo</h1>
          <div style={{marginLeft:isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="menu">
          {menu.map((item) => (
            <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
              {item.listItems.map((listItem) => (
                <Link to={listItem.url} key={listItem.id} className="listItem">
                  <img src={listItem.icon} alt="" />
                  <span style={{display:isOpen? "block" : "none"}} className="listItemTitle">{listItem.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
