import React, {useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "../styles/MapComponent.css";

// Default Marker Icon
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Search Control Component
const SearchControl = ({ setPosition }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const { center } = e.geocode;
        setPosition([center.lat, center.lng]);
        map.setView([center.lat, center.lng], 13);
      })
      .addTo(map);

    return () => map.removeControl(geocoder); // Clean up when unmounting
  }, [map, setPosition]);

  return null; // Does not render any visible JSX
};

// Map Component
const MapComponent = ({ position, setPosition }) => {
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  };

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position || [51.505, -0.09]}
        zoom={10}
        onClick={handleMapClick}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && (
          <Marker position={position}>
            <Popup>Selected Location</Popup>
          </Marker>
        )}
        <SearchControl setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;