import React, {Component} from 'react';

class R005_LifeCycelEX extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1, Constructor Call');

    }



    render(){
        console.log('3, Render Call');

        return (
            <h2> [This is Constructor Call</h2>
        )
    }
}


export default R005_LifeCycelEX;



