import { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import "../../styles/index.css";
import TripService from "../../services/TripService";
import MapPin from "../extras/MapPin";

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWpg3IpwX7iAEPO0DbLQwXtmNL1NG11Rw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
  
const Map = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        setTrips(TripService.list())
    }, []);

    let center = { lat: 50.05, lng: 19.94 };

    return (
        <div className="outer-map">
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {trips.map((trip, index) => {
                    if(trip.mainPhoto && (trip.mainPhoto.lat != 0 || trip.mainPhoto.long != 0)) {
                        return (<MapPin key={index} index={index} trip={trips[index]}
                            position={{lat: trip.mainPhoto.lat, lng: trip.mainPhoto.long}} />);
                    }
                })}
            </GoogleMap>
        </div>
    );
}

export default MapView;