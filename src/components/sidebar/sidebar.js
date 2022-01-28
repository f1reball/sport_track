import React, { Component } from "react";
import './sidebar.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <ul className="nav-links">
                    <Link to="/"> <li>Home</li> </Link>
                    <Link to="/events"> <li>Events</li> </Link>
                </ul>
            </div>
        )
    }

}

export default Sidebar;