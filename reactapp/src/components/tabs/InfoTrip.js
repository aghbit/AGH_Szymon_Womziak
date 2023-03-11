import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DescriptionIcon from '@mui/icons-material/Description';
import TripService from '../../services/TripService';
import Photos from '../extras/Photos';
import MapInfo from '../extras/MapInfo';

const InfoTrip = () => {
    const [trip, setTrip] = useState({});
    const [state, setState] = useState({mainPhoto: 0})
    let { id } = useParams();

    useEffect(() => {
        setTrip(TripService.list()[id])
    }, [])

    if(!trip || !trip.photos || trip.photos.length == 0) return (<></>)

    return (
        <div className="container">
            <div className="tripDetails">
                <div>
                    <DriveFileRenameOutlineIcon /> 
                    <span>Name: <b>{trip.name}</b></span>
                </div>
                <div>
                    <DateRangeIcon /> 
                    <span><b>{trip.datestarted}</b> - <b>{trip.dateended}</b></span>
                </div>
                <div>
                    <DescriptionIcon /> 
                    <span>Description: <b>{trip.description}</b></span>
                </div>
                <div>
                    <InsertPhotoIcon /> 
                    <span>Photos: <b>{trip.photos.length}</b></span>
                </div>
            </div>
            <div className="smallerPhotos">
                <Photos state={state} setState={setState} photos={trip.photos} />
            </div>
            <MapInfo 
                photos={trip.photos}
                state={state.mainPhoto}
            />
        </div>
    );
};

export default InfoTrip;