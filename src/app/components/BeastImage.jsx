'use strict';

import React from 'react';

class BeastImage extends React.Component {
    render() {
        return (
            <div>
                <img role="presentation" src={this.props.image} />
            </div>
        );
    }
}

export default BeastImage;