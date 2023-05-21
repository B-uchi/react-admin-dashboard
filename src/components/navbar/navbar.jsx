import "./navbar.css";
import React from "react";
import pic from "../../assets/pic.jpg";
import {
  LanguageOutlined,
  Settings,
  NotificationsNone,
  Menu,
} from "@mui/icons-material";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="hamburger">
          <h2>TMT Admin</h2>
        </div>
        <div className="nav-items-container">
          <div className="badge-container">
            <LanguageOutlined className="badge-container" />
          </div>
          <div className="badge-container">
            <Settings />
            <div className="badge">3</div>
          </div>
          <div className="badge-container">
            <NotificationsNone />
            <div className="badge">3</div>
          </div>
          <img src={pic} alt="" />
        </div>
      </div>
    </nav>
  );
};
