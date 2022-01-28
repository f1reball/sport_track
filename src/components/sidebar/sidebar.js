import React, { Component } from "react";
import './sidebar.css';

import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <ul className="nav-links">
                    <Link to="/"> <li>Home</li> </Link>
                    <Link to="/students"> <li>Students</li> </Link>
                    <Link to="/events"> <li>Events</li> </Link>
                    <Link to="/rankings"> <li>Rankings</li> </Link>
                    <Link to="/help"> <li>Help</li> </Link>
                </ul>
            </div>
        )
    }

}

export default Sidebar;