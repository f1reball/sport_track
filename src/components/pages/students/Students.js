import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Students.css';

class Students extends Component {


    render() {

        console.log(this.props.studentList);

        const nameList = this.props.studentList;

        return (
            <div className="Content">
                <SideBar />
                <div className="Students">
                    <h1>Students</h1>
                    <div className="dataTest">
                        {nameList.map(({ FirstName, LastName, ID}) => (
                            <p>{ID}, {FirstName}, {LastName}</p>
                        ))}
                    </div>
                </div>

            </div>

        )
    }

}

export default Students;