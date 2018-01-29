'use strict';

import React from 'react';

function BeastDescription(props) {
    return (
        <div style={styles}>
            {props.description}
        </div>
    );
}

const styles = {
    textIndent: '5px',
    padding: '5px'
};

export default BeastDescription;