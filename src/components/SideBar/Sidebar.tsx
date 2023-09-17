import { Menu } from "@mui/material";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(true);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <>
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "500px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
      </div>
    </div>
    <Menu open={isOpen}  />
    </>
  );
};

export default Sidebar;
