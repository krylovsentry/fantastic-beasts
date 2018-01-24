'use strict';

import React from 'react';
import getBeast from "../client/getBeast";

class BeastCard extends React.Component {
    constructor() {
        super();
        this.state = {id: 0};
    }

    makeRequest(id) {
        return getBeast(id).then((data) => {
            this.setState({
                id
            });
        });
    }

    render() {
        return (
            <div>Some beast!</div>
        );
    }
}

export default BeastCard;