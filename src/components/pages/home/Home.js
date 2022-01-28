import React, { Component } from "react";

import SideBar from "../../sidebar/sidebar";

import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="Content">
                <SideBar />
                <div className="Home">
                    <h1>
                        Home
                    </h1>
                </div>
            </div>

        )
    }

}

export default Home;