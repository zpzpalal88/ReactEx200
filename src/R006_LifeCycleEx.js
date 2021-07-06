import React, {
    Component
} from 'react';

class R006_LifeCycleEX extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2.getDerivedStateFromPropsCall:' +props.prop_value);
        console.log(props);
        console.log(state);
        return{};
    }



    constructor(props) {
        super(props);
        this.state = {};
        console.log('1.constructor call');

    }

    render() {
        console.log('3.render call');
        return(
            <h2> [this is COnstrutor call] </h2>
        )
    }
}

export default R006_LifeCycleEX;
