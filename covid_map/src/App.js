//Icon author: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";
import mapStyle from "./mapStyle.js";

function Map() {
  const [selectedCity, setSelectedCity] = useState({
    lat: null,
    lng: null,
    cty: null,
    cnt: null,
    cnf: null,
    rcv: null,
    dth: null,
  });

  function pass(lt, ln, ct, cn, cf, rv, dt) {
    if (!isNaN(lt) || lt != null) {
      if (!isNaN(ln) || ln != null) {
        setSelectedCity({
          lat: lt,
          lng: ln,
          cty: ct,
          cnt: cn,
          cnf: cf,
          rcv: rv,
          dth: dt,
        });
      }
    }
  }
  const [ccases, setCCases] = useState(null);
  //var obtain = false;
  //const [data, setData] = useState({ cases: null });
  useEffect(() => {
    fetch(
      "https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_1.geojson"
    )
      .then((response) => response.json())
      .then(
        (responseJson) => setCCases(responseJson)
        // jsonData is parsed json object received from url
      );
  }, [setCCases]);
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
      defaultOptions={{ styles: mapStyle }}
    >
      {ccases &&
        ccases.features.map((place) => (
          <Marker
            key={place.properties.OBJECTID}
            position={{
              lat: place.properties.Lat,
              lng: place.properties.Long_,
            }}
            onClick={() =>
              pass(
                place.properties.Lat,
                place.properties.Long_,
                place.properties.Province_State,
                place.properties.Country_Region,
                place.properties.Confirmed,
                place.properties.Recovered,
                place.properties.Deaths
              )
            }
            icon={{
              url: "/coronavirus.svg",
              scaledSize: new window.google.maps.Size(
                Math.log(place.properties.Confirmed) * 5,
                Math.log(place.properties.Confirmed) * 5
              ),
            }}
          />
        ))}
      {selectedCity.lat != null && selectedCity.lng != null && (
        <InfoWindow
          position={{
            lat: selectedCity.lat,
            lng: selectedCity.lng,
          }}
          onCloseClick={() => {
            setSelectedCity({
              lat: null,
              lng: null,
              cty: null,
              cnt: null,
              cnf: null,
              rcv: null,
              dth: null,
            });
          }}
        >
          <div>
            <h2>{selectedCity.cty}</h2>
            <h3>{selectedCity.cnt}</h3>
            <p>
              Confirmed: {selectedCity.cnf}
              <br />
            </p>
            <p>
              Recovered: {selectedCity.rcv}
              <br />
            </p>
            <p>
              Deaths: {selectedCity.dth}
              <br />
            </p>
          </div>
        </InfoWindow>
      )}
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
