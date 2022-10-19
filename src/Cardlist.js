import React, { Component } from 'react';
import Card from './Card';
import { robots } from './robots';
class Cardlist extends Component{
    render(){
        const CardArray = robots.map((user, i) => { 
            return <Card key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            username={robots[i].username} 
            email={robots[i].email}
            />
            })
        return(
            <div>
               {CardArray};
            </div>
        );
    }
}

export default Cardlist; 