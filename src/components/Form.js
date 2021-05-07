import React, { useState } from "react";
import axios from "axios";
import AlertCard from "./AlertCard";

const Form = (props) => {
  const [endpoint, setEndpoint] = useState("alerts");
  const [parkCode, setParkCode] = useState("");
  const [alertData, setAlertData] = useState("");
  const handleEndpointChange = (event) => {
    setEndpoint(event.target.value);
  };
  const handleParamsChange = (event) => {
    setParkCode(event.target.value);
  };

  const request = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://developer.nps.gov/api/v1/alerts/?parkCode=acad,dena&api_key=dtVNDWFBwVoKGYcsGmzzHprM10HDhBT2vyjgCZ0F"
      )
      .then(function (response) {
        // handle success
        setAlertData(response.data.data);
      });
  };

  return (
    <div>
      <form onSubmit={request}>
        <label>
          Endpoint:
          <select value={endpoint} onChange={handleEndpointChange}>
            <option value="alerts">Alerts</option>
          </select>
        </label>
        <label>
          Park Code:
          <input type="text" value={parkCode} onChange={handleParamsChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {alertData
        ? alertData.map((el) => (
            <AlertCard
              id={el.id}
              title={el.title}
              desc={el.description}
              url={el.url}
            />
          ))
        : ""}
    </div>
  );
};

export default Form;
