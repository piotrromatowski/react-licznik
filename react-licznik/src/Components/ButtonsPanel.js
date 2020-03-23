import React, {Component} from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {

    ResetOrReInit = (reset)=>{
        this.props.resetCounterValue(reset)
    }

    inValue = ()=>{
        this.props.stepStart()
    }
    

    render(){
        return(
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Add 1</button>
                <button onClick={()=>this.ResetOrReInit(false)}>ReInit</button>
                <button onClick={()=>this.ResetOrReInit(true)}>Reset</button>
                <button onClick={()=>this.inValue()}>Zwiększ o: {this.props.stepValue}</button>
            
            </div>
        )
    }

}

export default ButtonsPanel;