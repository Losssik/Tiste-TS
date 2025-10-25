import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import FetchWeather from "./FetchWeather";

const Map = () => {
  const wejherowoCenter: [number, number] = [54.605, 18.2355];
  const [markerPosition, setMarkerPosition] = useState(wejherowoCenter);
  const [lat, setLat] = useState(54.605);
  const [lng, setLng] = useState(18.2355);

  useEffect(() => {}, []);

  const ClickHandler = () => {
    const map = useMap();
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        map.flyTo([lat, lng], map.getZoom(), { duration: 0.5 });
        setLat(lat);
        setLng(lng);
      },
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={wejherowoCenter}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={markerPosition} />
        <ClickHandler />
      </MapContainer>
      <FetchWeather lat={lat} lng={lng} />
    </>
  );
};

export default Map;
