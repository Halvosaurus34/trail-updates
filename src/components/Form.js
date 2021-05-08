import React, { useState } from "react";
import axios from "axios";
import AlertCard from "./AlertCard";
import "./Form.css";
const Form = () => {
  const endpoint = "alerts";
  const [parkCode, setParkCode] = useState("acad");
  const [alertData, setAlertData] = useState("");
  const [parkName, setParkName] = useState("");
  const handleParamsChange = (event) => {
    setParkCode(event.target.value);
  };

  const requestName = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks/?parkCode=${parkCode}&api_key=dtVNDWFBwVoKGYcsGmzzHprM10HDhBT2vyjgCZ0F`
      )
      .then(function (response) {
        // handle success
        setParkName(response.data.data[0].fullName);
        requestData();
        // setParkName(response.data.data);
      });
  };

  const requestData = (event) => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/${endpoint}/?parkCode=${parkCode}&api_key=dtVNDWFBwVoKGYcsGmzzHprM10HDhBT2vyjgCZ0F`
      )
      .then(function (response) {
        // handle success
        setAlertData(response.data.data);
      });
  };

  return (
    <div className="park-form">
      <form onSubmit={requestName}>
        <label>
          Park Code:
          <input type="text" value={parkCode} onChange={handleParamsChange} />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
      {parkName ? <h2 className="park-name">{parkName}</h2> : ""}
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
