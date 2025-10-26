import { useMap, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";

const MapClickHandler = () => {
  const wejherowoCenter: [number, number] = [54.605, 18.2355];
  const [markerPosition, setMarkerPosition] =
    useState<[number, number]>(wejherowoCenter);

  const map = useMap();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      map.flyTo([lat, lng], map.getZoom(), { duration: 0.5 });
    },
  });

  useEffect(() => {
    map.flyTo(markerPosition, map.getZoom(), { duration: 0.5 });
  }, [map, markerPosition]);

  return null;
};

export default MapClickHandler;
