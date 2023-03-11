import { useMemo, useEffect, useState, useReducer } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import "../../styles/index.css";
import TripService from "../../services/TripService";
import MapPin from "../extras/MapPin";

const MapInfo = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWpg3IpwX7iAEPO0DbLQwXtmNL1NG11Rw",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map {...props} />;
}
  
const Map = ({state, photos, ...props}) => {
    let center = { lat: photos[state].lat, lng: photos[state].long };
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        console.log("yes")
        forceUpdate();
    }, [state])

    return (<>
        <div className="outer-map-info">
            <div style={{display: "none"}}>{ignored}</div>
            <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
                {photos.map((photo, index) => {
                    if(index == state) {
                        return (<MarkerF key={index}
                            position={{lat: photos[index].lat, lng: photos[index].long}}
                            icon= {{
                                url: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-pushpin.png"
                            }}
                        />)
                    } else {
                        return (<MarkerF
                            position={{lat: photos[index].lat, lng: photos[index].long}}
                        />)
                    }
                })}
            </GoogleMap>
        </div>
    </>);
}

export default MapInfo;