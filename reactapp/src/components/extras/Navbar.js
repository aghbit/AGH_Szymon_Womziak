import React from 'react';
import "../../styles/navbar.css";
import MapIcon from '@mui/icons-material/Map';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="navigation">
            <Link to="/" className="navLink">
                <div className="navIcon"><MapIcon /></div>
                <div className="navText">Home</div>
            </Link>
            <Link to="/new" className="navLink">
                <div className="navIcon"><AddLocationIcon /></div>
                <div className="navText">New Trip</div>
            </Link>
            <Link to="/list" className="navLink">
                <div className="navIcon"><ListAltIcon /></div>
                <div className="navText">List</div>
            </Link>
        </div>
    );
};

export default Navbar;