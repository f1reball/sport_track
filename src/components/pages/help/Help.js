import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Help.css';

class Help extends Component {

    render() {
        return (
            <div className="Content">
                <SideBar />
                <div className="Help">
                    <h1>
                        Help
                    </h1>
                </div>
            </div>

        )
    }

}

export default Help;