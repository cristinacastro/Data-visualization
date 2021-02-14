import React from "react";
import "./Dashboard.css";
import Charts from "./Charts";
import VariationCard from "./VariationCard";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <section className="top-menu-container">
        <nav className="top-menu">
          <ul className="top-menu-ul">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </nav>
      </section>
      <Charts />

      <section className="variations-info">
        <div className="variations-container">
          <VariationCard
            title="Temperature Variation"
            image="./img/shrink-icon.png"
            percentage="3.2%"
            icon="./img/up-red.png"
          />
          <VariationCard
            title="Humidity Variation"
            image="./img/grow-icon.png"
            percentage="7%"
            icon="./img/up-green.png"
          />
          <VariationCard
            title="Radiation Variation"
            image="./img/shrink-icon.png"
            percentage="0.6%"
            icon="./img/up-red.png"
          />
        </div>
      </section>
      <div className="illustration">
        <img src="./img/illustration.png"></img>
      </div>
    </div>
  );
}
