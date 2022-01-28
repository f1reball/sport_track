import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Students.css';

class Students extends Component {

    render() {
        return (
            <div className="Content">
                <SideBar />
                <div className="Students">
                    <h1>Students</h1>


                </div>
            </div>

        )
    }

}

export default Students;