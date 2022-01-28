import React, { Component } from "react";
import './sidebar.css';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="sidebarSpacer">
                    <h1>Orienteering</h1>
                </div>
                <ul className="nav-links">

                    <NavLink activeClassName='active' to="/">
                        <li>
                            <div className="iconContainer">
                                <div className="iconAlign"><FontAwesomeIcon icon={faChartPie} /></div>
                                <p>Home</p>
                            </div>
                        </li>
                    </NavLink>

                    <NavLink activeClassName='active' to="/students">
                        <li>
                            <div className="iconContainer">
                                <div className="iconAlign"><FontAwesomeIcon icon={faUserGraduate} /></div>
                                <p>Students</p>
                            </div>
                        </li>
                    </NavLink>

                    <NavLink activeClassName='active' to="/events">
                        <li>
                            <div className="iconContainer">
                                <div className="iconAlign"><FontAwesomeIcon icon={faCalendar} /></div>
                                <p>Events</p>
                            </div>
                        </li>
                    </NavLink>

                    <NavLink activeClassName='active' to="/rankings">
                        <li>
                            <div className="iconContainer">
                                <div className="iconAlign"><FontAwesomeIcon icon={faTrophy} /></div>
                                <p>Rankings</p>
                            </div>
                        </li>
                    </NavLink>

                    <NavLink activeClassName='active' to="/help">
                        <li>
                            <div className="iconContainer">
                                <div className="iconAlign"><FontAwesomeIcon icon={faQuestionCircle} /></div>
                                <p>Help</p>
                            </div>
                        </li> 
                    </NavLink>
                    
                </ul>
            </div>
        )
    }

}

export default Sidebar;