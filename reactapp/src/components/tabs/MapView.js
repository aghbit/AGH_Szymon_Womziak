import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../../styles/index.css";

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "hehe you wish",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
  
const Map = () => {
  const center = { lat: 50.05, lng: 19.94 };

  return (
    <div className="outer-map">
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
        </GoogleMap>
    </div>
  );
}

export default MapView;