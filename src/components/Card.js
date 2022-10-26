import React, { Component } from 'react';
// import React, { Component, Fragment } from 'react';
class Card extends Component{
    render(){
      
            //     <p>Q. What is React?</p>
            //     <p>A. A Ja  return(
            // <Fragment>vaScript library for building user interfaces</p>
            //     <p>Q. How do I render sibling elements?</p>
            //     <p>A. Use Fragments</p>
            // </Fragment>
        return(
            <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                <img alt='robot' src={`https://robohash.org/${this.props.id}?200x200`}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }    
}

export default Card;
