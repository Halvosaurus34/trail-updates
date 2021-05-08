import React from "react";
import "./AlertCard.css";
function AlertCard(props) {
  console.log(props, "yo");
  return (
    <div className="alertCard">
      <h3>{props.title}</h3>
      <p>Description: {props.desc}</p>
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