'use strict';

import React from 'react';
import BeastImage from './BeastImage.jsx';
import getBeasts from "../client/getBeasts";
import get from 'lodash.get';

class Book extends React.Component {
    constructor() {
        super();
        this.state = {
            beasts: []
        }
    }

    componentDidMount() {
        getBeasts().then((response) => {
            this.setState({
                beasts: response.body.beasts
            });
        })
    }

    render() {
        return (
            <div>
                {this.state.beasts.map((beast, index) => <BeastImage image={beast.image}/>)}
            </div>
        );
    }
}

export default Book;