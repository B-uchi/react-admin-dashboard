import React from "react";
import pic from "../../../../assets/picc.jpg";
import { Visibility } from "@mui/icons-material";
export const Person = (props) => {
  const { name, title } = props.data;
  return (
    <div className="person-wrapper">
      <div className="img-name">
        <img src={pic} alt="" />
        <div className="person-middle">
          <strong>{name}</strong>
          <p id="title">{title}</p>
        </div>
      </div>
      <button className="visibility">
        <Visibility />
        Display
      </button>
    </div>
  );
};
