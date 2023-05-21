import React from "react";

import "./home.css";
import { Stat } from "../../components/HomePage Components/stats/stat";
import { JoinMembers } from "../../components/HomePage Components/join-members/join-members";
import { Transactions } from "../../components/HomePage Components/transactions/transactions";
import { HomeChart } from "../../components/HomePage Components/homechart/homeChart";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <Stat
          data={{
            name: "Revenue",
            price: "10,000",
            percent: "-1.2",
            arrow: "down",
          }}
        />
        <Stat
          data={{
            name: "Sales",
            price: "31,095",
            percent: "+2.0",
            arrow: "up",
          }}
        />
        <Stat
          data={{
            name: "Cost",
            price: "25,400",
            percent: "+5.2",
            arrow: "up",
          }}
        />
      </div>
      <div className="home-middle">
        <HomeChart />
      </div>
      <div className="home-bottom">
        <JoinMembers />
        <Transactions />
      </div>
    </div>
  );
};
