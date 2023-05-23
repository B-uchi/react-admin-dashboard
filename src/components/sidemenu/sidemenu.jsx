import React from "react";
import {
  Analytics,
  TrendingUp,
  Timeline,
  Error,
  Mail,
  Message,
  Person,
  Store,
  Cases,
  BarChart,
  Money,
  Home,
  Close,
} from "@mui/icons-material";
import "./sidemenu.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const SideMenu = () => {
  // const ref = useRef(null);
  // const handleClose = () => {
  //   const sidemenu = ref.current;
  //   sidemenu.style.display = "none";
  // };
  return (
    <aside className="side-menu">
      <div className="side-container">
        {/* <div className="close-btn-wrapper">
          <button onClick={() => handleClose()} id="close-btn">
            <Close style={{ color: "red" }} />
          </button>
        </div> */}
        <div className="menu-category">
          <h3>Dashboard</h3>
          <ul>
            <Link className="navlink" to={"/"}>
              <li id="home">
                <Home /> Home
              </li>
            </Link>
            <li>
              <Timeline /> Analytics
            </li>
            <li>
              <TrendingUp /> Sales
            </li>
          </ul>
        </div>
        <div className="menu-category">
          <h3>Quick Menu</h3>
          <ul>
            {/* <Link className="navlink" to={"/users"}> */}
            <li>
              <Person /> Users
            </li>
            {/* </Link> */}
            <Link className="navlink" to={"/products"}>
              <li>
                <Store /> Products
              </li>
            </Link>
            <li>
              <Money /> Transactions
            </li>
            <li>
              <BarChart /> Report
            </li>
          </ul>
        </div>
        <div className="menu-category">
          <h3>Notifications</h3>
          <ul>
            <li>
              <Mail /> Mail
            </li>
            <li>
              <Person /> Feedback
            </li>
            <li>
              <Message /> Messages
            </li>
          </ul>
        </div>
        <div className="menu-category">
          <h3>Staff</h3>
          <ul>
            <li>
              <Cases /> Manage
            </li>
            <li>
              <Timeline /> Analytics
            </li>
            <li>
              <Error /> Reports
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
