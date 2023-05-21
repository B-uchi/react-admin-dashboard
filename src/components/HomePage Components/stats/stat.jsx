import React from "react";
import "./stat.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export const Stat = (props) => {
  const { name, price, percent, arrow } = props.data;
  return (
    <div className="stat-card">
      <div className="top">{name}</div>
      <div className="middle">
        <div className="left">
          <h4>${price}</h4>
        </div>
        <div className="right">
          <p>{percent}</p>
          {arrow == "up" ? (
            <ArrowUpward style={{ color: "green" }} />
          ) : (
            <ArrowDownward style={{ color: "red" }} />
          )}
        </div>
      </div>
      <div className="bottom">Compared to last month</div>
    </div>
  );
};
