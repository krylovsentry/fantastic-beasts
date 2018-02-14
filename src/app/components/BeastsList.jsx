'use strict';

import React from 'react';
import BeastCard from './card/BeastCard.jsx';
import getBeasts from "../client/getBeasts";
import '../../assets/stylesheets/search-input.scss';

class BeastsList extends React.Component {

    constructor() {
        super();
        this.state = {
            beasts: [],
            initialBeasts: [],
            searchOpen: false
        };
        this.filterList = this.filterList.bind(this);
        this.toggleSearchOpen = this.toggleSearchOpen.bind(this);
    }

    componentDidMount() {
        getBeasts().then((response) => {
            this.setState({
                beasts: response.body.beasts,
                initialBeasts: response.body.beasts
            });
        })
    }

    filterList(event) {
        let updatedList = this.state.initialBeasts;
        updatedList = updatedList.filter((beast) => {
            return ~beast.name.toLowerCase().search(event.target.value.toLowerCase());
        });
        this.setState({
            beasts: updatedList
        })
    }

    toggleSearchOpen(event) {
        this.setState({
           searchOpen: !this.state.searchOpen
        });
    }

    render() {
        return (
            <div>
                <div className={`search ${this.state.searchOpen ? 'open' : ''}`}>
                    <input type="text" className='search-box' placeholder="Search" onChange={this.filterList}/>
                    <span className="search-button" onClick={this.toggleSearchOpen}>
                        <span className="search-icon"/>
                    </span>
                </div>
                <div style={styles.listDiv}>
                    {this.state.beasts.map((beast) => <BeastCard beast={beast}/>)}
                </div>
            </div>
        );
    }

}

const styles = {
    listDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
};

export default BeastsList;