

import React, {Component} from 'react';

class R011_SpreadOperator extends Component{

    constructor(props) {
        super(props);
        this.state={};

        
    }
    

    componentDidMount(){
        var varName = 'react';
        console.log('varName01 : '+varName);
        var varName = '200'; // var name already defined no redeclare
        console.log('varName02 : '+varName);


        let letName = 'react';
        console.log('letName1 : '+letName);
        // let letName = 200
        //parsing error : Identifire 'let Name' has already declare

        letName= 'react200';
        console.log('letName2' +letName);


        const constName = 'react';
        console.log('constName : '+constName);
        //const constName =200
        //parsing error CostNAMe is already declare



    }

    render(){
        return (
            <h2>[This is variable]</h2>
        )
    }
}


export default R011_SpreadOperator;