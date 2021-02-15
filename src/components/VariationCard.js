import React from "react";
import "./VariationCard.css";

export default function VariationCard(props) {
  return (
    <div className="variations-card">
      <h3>{props.title}</h3>
      <figure className="progression-line">
        <img src={props.image} alt="progression line" />
      </figure>
      <div className="percentage-info">
        <div>
          <img src={props.icon} alt="arrow icon" />
        </div>
        <div>{props.percentage}</div>
      </div>
      <h4>See History </h4>
    </div>
  );
}
