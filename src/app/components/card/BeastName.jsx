'use strict';

import React from 'react';

function BeastName(props) {
    return (
        <div style={styles}>
            {props.name}
        </div>
    );
}

const styles = {
    textAlign: 'center',
    fontSize: '2em'
};

export default BeastName;