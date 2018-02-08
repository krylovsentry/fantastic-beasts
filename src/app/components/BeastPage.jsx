'use strict';

import React from 'react';
import {Redirect} from "react-router-dom";
import getBeast from "../client/getBeast";
import BeastName from "./card/BeastName.jsx";
import BeastDescription from "./card/BeastDescription.jsx";
import BeastImage from "./card/BeastImage.jsx";

class BeastPage extends React.Component {
    constructor() {
        super();
        this.state = {
            beast: {},
            redirect: false
        };
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    componentDidMount() {
        getBeast(this.props.match.params.id).then((response) => {
            this.setState({
                beast: response.body.beast
            });
        })
    }


    handleBackClick() {
        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to='/'/>
        } else {
            return (
                <div style={styles.root}>
                    <button onClick={this.handleBackClick}>Go back</button>
                    <div>
                        <BeastName name={this.state.beast.name}/>
                        <BeastImage image={this.state.beast.image}/>
                        <BeastDescription description={this.state.beast.description}/>
                    </div>
                </div>
            );
        }
    }
}

const styles = {
    backButton: {},
    root: {
        backgroundColor: '#E2DCD5'
    }
};

export default BeastPage;