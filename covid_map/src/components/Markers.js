import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import Info from "./Info.js";

class Markers extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      clicked: false,
    };
  }

  componentDidMount() {
    this.data();
  }

  data() {
    fetch(
      "https://opendata.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac_1.geojson"
    )
      .then((response) => response.json())
      .then(
        (responseJson) => this.setState({ cases: responseJson.features })
        // jsonData is parsed json object received from url
      );
    console.log(this.state);
  }

  render() {
    const { selectedMarker, setSelectedMarker } = useState(null);
    return this.state.cases.map(function (cases) {
      return (
        <Marker
          key={cases.properties.OBJECTID}
          position={{
            lat: cases.properties.Lat,
            lng: cases.properties.Long_,
          }}
          onClick={setSelectedMarker(cases)}
        >
          {selectedMarker && (
            <Info
              lat={selectedMarker.properties.Lat}
              lng={selectedMarker.properties.Long_}
            />
          )}
        </Marker>
      );
    });
  }
}

export default Markers;
