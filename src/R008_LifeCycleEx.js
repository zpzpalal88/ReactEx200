import React, {
    Component
} from 'react';

class R008_LifeCycleEX extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2.getDerivedStateFromPropsCall:' +props.prop_value);
  
        return{tmp_state:props.prop_value};
    }



    constructor(props) {
        super(props);
        this.state = {};
        console.log('1.constructor call');

    }

    componentDidMount(){
        console.log('4.componentDidMOunt call');
        console.log('5.tmp_state: '+this.state.tmp_state);
        this.setState({tmp_state2 :true});
    }

    shouldComponentUpdate(props, state){
        console.log('6. shouldCOmponetUpdate call /tmp_state2='+state.tmp_state2)
        return state.tmp_state2;
    }

    render() {
        console.log('3.render call');
        return(
            <h2> [this is shouldComponentUpdate] </h2>
        )
    }
}

export default R008_LifeCycleEX;
