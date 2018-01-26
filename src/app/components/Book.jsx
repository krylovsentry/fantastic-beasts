'use strict';

import React from 'react';
import BeastCard from './card/BeastCard.jsx';
import getBeasts from "../client/getBeasts";

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
            <div style={styles.rootDiv}>
                {this.state.beasts.map((beast, index) => <BeastCard beast={beast}/>)}
            </div>
        );
    }
}

const styles = {
    rootDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
};

export default Book;