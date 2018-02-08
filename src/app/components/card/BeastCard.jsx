'use strict';

import React from 'react';
import {Redirect} from 'react-router-dom';
import BeastImage from './BeastImage.jsx'
import BeastDescription from "./BeastDescription.jsx";
import BeastName from "./BeastName.jsx";

class BeastCard extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            redirect: false
        }
    }

    handleClick() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/beast/${this.props.beast.id}`}/>
        }
        else {
            return (
                <div style={styles.beastCard} onClick={this.handleClick}>
                    <BeastImage image={this.props.beast.image}/>
                    <BeastName name={this.props.beast.name}/>
                    <BeastDescription description={this.props.beast.description}/>
                </div>
            );
        }
    }
}

const styles = {
    beastCard: {
        boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '250px',
        height: 'auto',
        backgroundColor: '#F9F3E6',
        margin: '5px'
    }
};

export default BeastCard;