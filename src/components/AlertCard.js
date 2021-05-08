import React from "react";
import "./AlertCard.css";
function AlertCard(props) {
  return (
    <div className="alertCard">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      {props.url ? (
        <a href={props.url} target="blank">
          READ MORE
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertCard;
