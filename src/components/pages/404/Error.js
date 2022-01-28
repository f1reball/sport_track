import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

import './Error.css';

class Error extends Component {

    render() {
        return (
            <div className="Error">
                <FontAwesomeIcon icon={faExclamation} size="5x" />
                <h1>404 - Page Not Found</h1>
            </div>
        )
    }

}

export default Error;