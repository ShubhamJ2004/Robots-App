import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
class Application extends Component{
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filterdRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox serachChange={this.onSearchChange}/>
                <Cardlist robots = {filterdRobots}/>
            </div>
        );
    }
}

export default Application;
