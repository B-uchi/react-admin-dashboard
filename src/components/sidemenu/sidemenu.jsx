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
} from "@mui/icons-material";
import "./sidemenu.css";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <aside>
      <div className="side-container">
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
            <Link className="navlink" to={"/users"}>
              <li>
                <Person /> Users
              </li>
            </Link>
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
