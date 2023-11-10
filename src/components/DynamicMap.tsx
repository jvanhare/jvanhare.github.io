import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { Icon } from "leaflet";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import coordinates from "./coordinates.json";

const Heart = new Icon({
  iconUrl: "/heart.svg",
  iconRetinaUrl: "/heart.svg",
  popupAnchor: [0, 0],
  iconSize: [32, 45],
});

const Julien = new Icon({
  iconUrl: "/map-pin-julien.svg",
  iconRetinaUrl: "/map-pin-julien.svg",
  popupAnchor: [0, 0],
  iconSize: [32, 45],
});

const Dominika = new Icon({
  iconUrl: "/map-pin-dominika.svg",
  iconRetinaUrl: "/map-pin-dominika.svg",
  popupAnchor: [0, 0],
  iconSize: [32, 45],
});

const DynamicMap = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "75vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {coordinates.julien.map((k, v) => (
        <Marker position={[k.latitude, k.longitude]} icon={Julien} />
      ))}
      {coordinates.dominika.map((k, v) => (
        <Marker position={[k.latitude, k.longitude]} icon={Dominika} />
      ))}
      {coordinates.both.map((k, v) => (
        <Marker position={[k.latitude, k.longitude]} icon={Heart} />
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
