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
import { useWeatherContext } from "../hooks/useWeatherContext";

const Map = () => {
  const { coords } = useWeatherContext();
  const wejherowoCenter: [number, number] = [54.605, 18.2355];
  const [markerPosition, setMarkerPosition] =
    useState<[number, number]>(wejherowoCenter);
  const [lat, setLat] = useState(wejherowoCenter[0]);
  const [lng, setLng] = useState(wejherowoCenter[1]);

  // when coords are changing update marker on the map
  useEffect(() => {
    if (coords) {
      const { lat, lon } = coords;
      setMarkerPosition([lat, lon]);
      setLat(lat);
      setLng(lon);
    }
  }, [coords]);

  // get user position when first render
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMarkerPosition([latitude, longitude]);
          setLat(latitude);
          setLng(longitude);
        },
        (error) => console.error(error)
      );
    }
  }, []);

  // click on Map
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

    useEffect(() => {
      map.flyTo(markerPosition, map.getZoom(), { duration: 0.5 });
    }, [map]);

    return null;
  };

  return (
    <>
      <MapContainer
        center={markerPosition}
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
