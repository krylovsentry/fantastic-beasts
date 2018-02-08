'use strict';

import React from 'react';

class BeastPage extends React.Component {
    constructor() {
        super();
        this.state = {
            beast: {}
        };
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default BeastPage;