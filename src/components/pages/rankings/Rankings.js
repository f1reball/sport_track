import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Rankings.css';

class Rankings extends Component {

    render() {
        return (
            <div className="Content">
                <SideBar />
                <div className="Rankings">
                    <h1>
                        Rankings
                    </h1>
                </div>
            </div>

        )
    }

}

export default Rankings;