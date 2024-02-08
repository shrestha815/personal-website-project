import React, { useEffect} from "react";
import { Link, useLocation} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import './NavStyle.css';

const Navbar=() => {
    return (
        <div className="flex  flex-col">
            <nav>
                <ul> 
                    <div className="navbar">
                        <Button className="text-wrapper"><a href="/">Home</a></Button>
                        <Button className="div">Contact</Button>
                        <Button className="text-wrapper-2">About</Button>
                        <Button className="text-wrapper-3">Portfolio</Button>
                        <span className="text-wrapper-4">Safal Shrestha</span>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;