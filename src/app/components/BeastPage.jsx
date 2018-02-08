'use strict';

import React from 'react';
import {Redirect} from "react-router-dom";
import getBeast from "../client/getBeast";

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
                <div>
                    {this.state.beast.description}
                </div>
            );
        }
    }
}

export default BeastPage;