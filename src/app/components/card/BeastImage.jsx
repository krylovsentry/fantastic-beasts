'use strict';

import React from 'react';

class BeastImage extends React.Component {
    render() {
        return (
            <div style={styles}>
                <img role="presentation" src={this.props.image}/>
            </div>
        );
    }
}

const styles = {
    textAlign: 'center'
};

export default BeastImage;