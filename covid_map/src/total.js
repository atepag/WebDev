import React, { useState, useEffect } from "react";

function Total() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "1d4a63eb5dmshedfd7c1ab6075cep1a20bfjsnee48c2d9b899",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => setInfo(responseJson))
      .catch((err) => {
        console.log(err);
      });
  }, [setInfo]);
  return (
    <div>
      {info && (
        <div
          style={{
            textAlign: "center",
            paddingTop: "1vmin",
            backgroundColor: "white",
            width: "35vmin",
            height: "25vmin",
            borderRadius: "5vmin",
          }}
        >
          <h2>WORLD COUNT</h2>
          <h3 style={{ color: "green" }}>
            Confirmed: {new Intl.NumberFormat().format(info[0].confirmed)}
          </h3>
          <h3 style={{ color: "orange" }}>
            recovered: {new Intl.NumberFormat().format(info[0].recovered)}
          </h3>
          <h3 style={{ color: "red" }}>
            Deaths: {new Intl.NumberFormat().format(info[0].deaths)}
          </h3>
        </div>
      )}
    </div>
  );
}
export default Total;
