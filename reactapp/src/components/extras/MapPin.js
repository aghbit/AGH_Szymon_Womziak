import React, {useEffect, useState} from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import { Link } from "react-router-dom"

const MapPin = ({position, index, trip, ...props}) => {
    const [activated, setActivated] = useState(false)

    return (<MarkerF 
        onClick={() => {
            setActivated((oldActivated) => !oldActivated)
        }}
        position={position}>
        {activated && (<InfoWindowF
            onCloseClick={() => {
                setActivated(false)
            }}
            position={position}
        >
            <div className="outerInsidePin">
                <div>
                    <img src={trip.mainPhoto.url} />
                </div>
                <div className="insidePin">
                    <div>
                        <DriveFileRenameOutlineIcon /> 
                        <span>Name: <b>{trip.name}</b></span>
                    </div>
                    <div>
                        <DateRangeIcon /> 
                        <span>Date from: <b>{trip.datestarted}</b></span>
                    </div>
                    <div>
                        <CalendarMonthIcon /> 
                        <span>Date to: <b>{trip.dateended}</b></span>
                    </div>
                    <div>
                        <InsertPhotoIcon /> 
                        <span>Photos: <b>{trip.photos.length}</b></span>
                    </div>
                    <div>
                        <Link to={`/info/${index}`}>
                            <button className="pinBt">More information</button>
                        </Link>
                    </div>
                </div>
            </div>
        </InfoWindowF>)}
    </MarkerF>)
};

export default MapPin;