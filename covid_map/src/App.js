import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
} from "react-google-maps";
import Markers from "./components/Markers.js";

function Map() {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <GoogleMap defaultZoom={3} defaultCenter={{ lat: 0, lng: 0 }}>
      <Markers />;
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
