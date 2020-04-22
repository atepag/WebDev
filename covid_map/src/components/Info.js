import React from "react";
import { InfoWindow } from "react-google-maps";

const Info = (props) => {
  return (
    <InfoWindow
      position={{
        lat: props.lat,
        lng: props.lng,
      }}
    >
      <div>city details</div>
    </InfoWindow>
  );
};

export default Info;
