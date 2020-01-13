import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import ChartPieMap from "./components/Chart/ChartPieMap";

const zones = [
  {
    name: "Quai EP",
    latitude: 32.305572,
    longitude: -9.247014,
    tentative_intrusion: 42,
    immobilisation: 159,
    tentative_vol: 0,
    sit_in: 2,
    intrusion: 5,
    vol: 0
  },
  {
    name: "Zone engrai/phosphate",
    latitude: 32.308801,
    longitude: -9.245253,
    tentative_intrusion: 28,
    immobilisation: 119,
    tentative_vol: 0,
    sit_in: 0,
    intrusion: 5,
    vol: 0
  },

  {
    name: "Zone soufre",
    latitude: 32.313709,
    longitude: -9.249675,
    tentative_intrusion: 47,
    immobilisation: 125,
    tentative_vol: 0,
    sit_in: 0,
    intrusion: 0,
    vol: 0
  },
  {
    name: "ANP",
    latitude: 32.311859,
    longitude: -9.248345,
    tentative_intrusion: 9,
    immobilisation: 74,
    tentative_vol: 0,
    sit_in: 0,
    intrusion: 0,
    vol: 0
  },
  {
    name: "Zone amoniac",
    latitude: 32.306873,
    longitude: -9.244943,
    tentative_intrusion: 0,
    immobilisation: 32,
    tentative_vol: 0,
    sit_in: 0,
    intrusion: 0,
    vol: 0
  },
  // Usine
  {
    name: "BAB SOUIRA",
    latitude: 32.223966,
    longitude: -9.251118,
    tentative_intrusion: 0,
    Agression: 11,
    tentative_vol: 16,
    sit_in: 5,
    intrusion: 0,
    vol: 0
  },
  {
    name: "OIS/C",
    latitude: 32.232092,
    longitude: -9.252476,
    tentative_intrusion: 6,
    Agression: 11,
    tentative_vol: 9,
    sit_in: 31,
    intrusion: 0,
    vol: 1
  },
  {
    name: "OIS/M",
    latitude: 32.223798,
    longitude: -9.248551,
    tentative_intrusion: 0,
    Agression: 2,
    tentative_vol: 1,
    sit_in: 3,
    intrusion: 0,
    vol: 3
  },
  {
    name: "OIS/D",
    latitude: 32.218983,
    longitude: -9.240848,
    tentative_intrusion: 9,
    Agression: 1,
    tentative_vol: 2,
    sit_in: 1,
    intrusion: 0,
    vol: 0
  }
  // {
  //   name: "BAB SOUIRA",
  //   latitude: 32.223966,
  //   longitude: -9.251118,
  //   tentative_intrusion: 0,
  //   Agression: 11,
  //   tentative_vol: 16,
  //   sit_in: 5,
  //   intrusion: 0,
  //   vol: 0
  // }
];

// const bounds = [
//   [32.1, -12],
//   [30, -4]
// ];

const position = [32.261012, -9.2549132];

export default class SimpleExample extends Component {
  render() {
    return (
      <Map
        center={position}
        zoom={13.21}
        // bounds={bounds}
        // // boundsOptions={{
        // //   padding: [40, 40]
        // // }}
        style={{
          height: 800,
          width: "100%"
        }}
        // zoom={30}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {zones.map(zone => (
          <Marker key={zone.name} position={[zone.latitude, zone.longitude]}>
            <Popup closeButton={true}>
              <ChartPieMap
                name={zone.name}
                tentative_intrusion={zone.tentative_intrusion}
                immobilisation={zone.immobilisation}
                tentative_vol={zone.tentative_vol}
                sit_in={zone.sit_in}
                intrusion={zone.intrusion}
                vol={zone.vol}
              />
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}
