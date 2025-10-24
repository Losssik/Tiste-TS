import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const Map = () => {
  const PositionHandler = () => {
    useMapEvents({
      click(e) {
        console.log("pozycja", e);
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };
  const wejherowoCenter = [54.605, 18.2355];
  const [markerPosition, setMarkerPosition] = useState(wejherowoCenter);

  return (
    <div>
      <h2>moja mapa idzie tu</h2>
      <MapContainer
        center={wejherowoCenter}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={markerPosition}></Marker>
        <PositionHandler />
      </MapContainer>
    </div>
  );
};

export default Map;
