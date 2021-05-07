import React from "react";
import "./AlertCard.css";
function AlertCard(props) {
  console.log(props, "yo");
  return (
    <div className="alertCard">
      <h3>{props.title}</h3>
      <p>Description: {props.desc}</p>
      {props.url ? (
        <p>
          <a href={props.url} target="blank">
            {props.url}
          </a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default AlertCard;
