

import React, {Component} from 'react';

class R009_Es6 extends Component{

    constructor(props) {
        super(props);
        
    }
    

    componentDidMount(){
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다. '
        console.log(jsString1+'문자열'+ jsString2+'~');

        var Es6String1='Es6'
        var Es6String2='입니다. \n다음줄입니다. '
        console.log(`${Es6String2}문자열 ${Es6String2}!! 다음줄입니다. `);
        
        var LongString ="ES6에 추가된 String 함수들입니다. ";
        console.log('startWith : ' +LongString.startsWith("ES6에 추가된 "));
        console.log('endwith : '+LongString.endsWith("함수들입니다. "));
        console.log('include : '+LongString.includes("추가된 String"));


    }

    render(){
        return (
            <h2>[This is Es6 String]</h2>
        )
    }
}


export default R009_Es6;