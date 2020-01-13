import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const cities = [
  {
    name: "Quai EP",
    latitude: 32.305572,
    longitude: -9.247014,
    color: "red"
  },
  {
    name: "Zone engrai/phosphate",
    latitude: 32.308801,
    longitude: -9.245253,
    color: "red"
  },
  {
    name: "USINE",
    latitude: 32.22344,
    longitude: -9.248077,
    color: "blue"
  }
];

const CitiInfo = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const bounds = [
  [32.269543, -9.2893051],
  [32, -9]
];

export default class ReactLeaflet extends Component {
  render() {
    return (
      <Map
        bounds={bounds}
        boundsOptions={{
          padding: [40, 40]
        }}
        style={{
          height: 800,
          width: "100%"
        }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map(city => (
          <Marker
            key={city.name}
            position={[city.latitude, city.longitude]}
            onClick={() => console.log("onClick")}
          >
            <Popup closeButton={false}>
              <CitiInfo color={city.color}>{city.name} tcha ra</CitiInfo>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}
