import React, { useState } from "react";
import axios from "axios";
import AlertCard from "./AlertCard";
import "./Form.css";
const Form = () => {
  const endpoint = "alerts";
  const [parkCode, setParkCode] = useState("acad");
  const [alertData, setAlertData] = useState("");
  const [parkName, setParkName] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
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
        setSubmitClicked(true);
        setParkName(response.data.data[0].fullName);
        requestData();
        // setParkName(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        alert(`${parkCode} doesn't seem to be a valid park code!`);
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
      })
      .catch(function (error) {
        console.log(error);
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
      {parkName && alertData.length > 0 ? (
        <h2 className="park-name">{parkName}</h2>
      ) : (
        ""
      )}
      {alertData
        ? alertData.map((el) => (
            <AlertCard
              key={el.id}
              id={el.id}
              title={el.title}
              desc={el.description}
              url={el.url}
            />
          ))
        : ""}
      {submitClicked && alertData.length === 0 ? (
        <h2 className="park-name">No alerts for {parkName}!</h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
