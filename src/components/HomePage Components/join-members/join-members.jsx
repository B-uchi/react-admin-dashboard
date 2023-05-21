import React from "react";
import { Person } from "./personItem/person";
import "./joinmembers.css";

export const JoinMembers = () => {
  let people = [
    { id: 0, name: "Anna Keller", title: "Product Designer" },
    { id: 1, name: "Umeano Buchi", title: "ML Engineer" },
    { id: 2, name: "Nebo Ikechukwu", title: "Graphics Designer" },
    { id: 2, name: "Cambrizzy Nzube", title: "Fullstack Developer" },
    { id: 3, name: "John Snow", title: "UI/UX" },
  ];
  return (
    <div className="join-container">
      <h3 id="join">New Join Members</h3>
      {people.map((person) => (
        <Person data={person} key={person.key} />
      ))}
    </div>
  );
};
