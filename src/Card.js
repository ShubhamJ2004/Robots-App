import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                <img alt='robot' src='https://robohash.org/test?200x200' />
                <div>
                    <h2>Jane Doe</h2>
                    <p>janedoe@gmail.com</p>
                </div>
            </div>
        );
    }    
}

export default Card;
