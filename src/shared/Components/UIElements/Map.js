import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Import your CSS file

const SmallMapExample = props => {
  const center = [props.center.lat, props.center.lon]; // Coordinates for the initial center of the map

  return (
    <MapContainer center={center} zoom={props.zoom} className="small-map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={center}>
        <Popup>
          A small map with a popup. <br /> Customize as needed.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default SmallMapExample;
