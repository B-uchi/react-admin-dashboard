import React from "react";
import profile1 from "../../../../assets/profile-1.jpg";
import profile2 from "../../../../assets/profile-2.jpg";
import profile3 from "../../../../assets/profile-3.jpg";
import profile4 from "../../../../assets/profile-4.jpg";

export const Transaction = (props) => {
  const { id, name, date, amount, status } = props.data;
  return (
    <tr>
      <td>
        <div className="transaction-name">
          <img src={profile2} alt="" />
          <strong>{name}</strong>
        </div>
      </td>
      <td>{date}</td>
      <td style={{ fontWeight: "bold" }}>${amount}</td>
      <td>
        <div
          id="transaction-status"
          style={
            status == "Approved"
              ? { backgroundColor: "rgba(0,255,0,0.7)" }
              : status === "Pending"
              ? { backgroundColor: "rgba(0,0,255,0.5)" }
              : { backgroundColor: "rgba(255,0,0,0.5)" }
          }
        >
          {status}
        </div>
      </td>
    </tr>
  );
};
