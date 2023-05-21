import React from "react";
import "./transactions.css";
import { Transaction } from "./tracsaction-item/transaction";

export const Transactions = () => {
  let data = [
    {
      id: 1,
      name: "John Cena",
      date: "21/05/2022",
      amount: 342.0,
      status: "Approved",
    },
    {
      id: 2,
      name: "Richard David",
      date: "21/05/2022",
      amount: 193.0,
      status: "Pending",
    },
    {
      id: 3,
      name: "John Doe",
      date: "21/05/2022",
      amount: 200.5,
      status: "Rejected",
    },
    {
      id: 4,
      name: "Elon Musk",
      date: "21/05/2022",
      amount: 3124.0,
      status: "Approved",
    },
  ];
  return (
    <div className="transaction-container">
      <h3>Latest Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <Transaction key={transaction.id} data={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
