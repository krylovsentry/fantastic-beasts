'use strict';

import React from 'react';
import getBeast from "../client/getBeast";
import BeastImage from './BeastImage.jsx'
import BeastDescription from "./BeastDescription.jsx";

class BeastCard extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            hover: false
        };
    }

    makeRequest(id) {
        return getBeast(id).then((data) => {
            this.setState({
                id
            });
        });
    }

    toggleHover() {
        this.setState({hover: !this.state.hover});
    }

    render() {
        return (
            <div style={styles.beastCard}>
                <BeastImage image={this.props.beast.image}/>
                <BeastDescription description={this.props.beast.description}/>
            </div>
        );
    }
}

const styles = {
    beastCard: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '300px',
        height: '400px'
    }
};

export default BeastCard;