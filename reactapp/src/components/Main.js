import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './extras/Navbar';
import InfoTrip from './tabs/InfoTrip';
import ListTrips from './tabs/ListTrips';
import MapView from './tabs/MapView';
import NewTrip from './tabs/NewTrip';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Routes> 
                <Route path="/info/:id" element={<InfoTrip />} />
                <Route path="/list" element={<ListTrips />} />
                <Route path="/new" element={<NewTrip />} />
                <Route path="/" element={<MapView />} />
            </Routes>
        </div>
    );
};

export default Main;