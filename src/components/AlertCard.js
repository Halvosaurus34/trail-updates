import React from "react";
import "./AlertCard.css";
function AlertCard(props) {
  console.log(props, "yo");
  return (
    <div className="alertCard">
      <p>{props.title}</p>
      <p>Description: {props.desc}</p>
      {props.url ? (
        <p>
          URL: <a href={props.url}>{props.url}</a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertCard;
