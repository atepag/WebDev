import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

async function getData() {
  return fetch(
    "https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_1.geojson"
  )
    .then((response) => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url
      return jsonData;
    })
    .catch((error) => {
      // handle your errors here
      console.error(error);
    });
}

async function Map() {
  var data = await getData().then(function (result) {
    return result;
  });
  console.log(data);
  return (
    <GoogleMap defaultZoom={3} defaultCenter={{ lat: 0, lng: 0 }}>
      {data.features.map((cases) => (
        <Marker
          key={cases.properties.OBJECTID}
          position={{
            lat: cases.properties.Lat,
            lng: cases.properties.Long_,
          }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDnwT8wbcgGl3mz0qhqb4dJpdHl6k-D--4"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
export default App;
