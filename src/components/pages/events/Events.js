import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Events.css';

class Events extends Component {

    render() {
        return (
            <div className="Content">
                <SideBar />
                <div className="Events">
                    <h1>
                        Events
                    </h1>
                </div>
            </div>

        )
    }

}

export default Events;