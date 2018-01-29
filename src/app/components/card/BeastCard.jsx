'use strict';

import React from 'react';
import getBeast from "../../client/getBeast";
import BeastImage from './BeastImage.jsx'
import BeastDescription from "./BeastDescription.jsx";
import BeastName from "./BeastName.jsx";

class BeastCard extends React.Component {

    render() {
        return (
            <div style={styles.beastCard}>
                <BeastImage image={this.props.beast.image}/>
                <BeastName name={this.props.beast.name}/>
                <BeastDescription description={this.props.beast.description}/>
            </div>
        );
    }
}

const styles = {
    beastCard: {
        boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '300px',
        height: '400px',
        backgroundColor: '#F9F3E6',
        margin: '5px'
    }
};

export default BeastCard;