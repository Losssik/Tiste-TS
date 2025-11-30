import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import FetchWeather from "./FetchWeather";
import { useWeatherContext } from "../hooks/useWeatherContext";
import FetchMoon from "./FetchMoon";
import FetchForecastWeather from "./FetchForecastWeather";

type Position = [lat: number, lon: number];

const RiverMap = () => {
  const { river } = useWeatherContext();
  const position: Position = [river?.coords?.lat ?? 0, river?.coords?.lon ?? 0];
  // marker position from leaflet expects array
  const [markerPosition, setMarkerPosition] = useState<Position>(position);
  const [lat, setLat] = useState(position[0]);
  const [lon, setLon] = useState(position[1]);

  // when coords are changing then update marker on the map
  useEffect(() => {
    if (river) {
      const { lat, lon } = river.coords;
      setMarkerPosition([lat, lon]);
      setLat(lat);
      setLon(lon);
    }
  }, [river]);

  //  fly to
  const FlyTo = () => {
    const map = useMap();

    useEffect(() => {
      map.flyTo(markerPosition, map.getZoom(), { duration: 0.5 });
    }, [map]);

    return null;
  };

  return (
    <div>
      <MapContainer
        center={markerPosition}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          filter: "brightness(0.7) contrast(1.5)",
        }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri — Source: Esri, USGS, NOAA"
        />
        <Marker position={markerPosition}>
          <Popup minWidth={200} closeButton={false}>
            test
          </Popup>
        </Marker>

        <FlyTo />
      </MapContainer>
      <FetchWeather lat={lat} lng={lon} />
      <FetchForecastWeather lat={lat} lng={lon} />
      <FetchMoon lat={lat} lon={lon} />
    </div>
  );
};

export default RiverMap;
