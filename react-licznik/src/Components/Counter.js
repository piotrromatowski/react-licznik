
import React, {Component} from "react";
import './Counter.css'
import Step from './Step';
import ButtonsPanel from './ButtonsPanel';



class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counterValue: parseInt(this.props.initValue),
            stepValue: 4,
        }
    }

    //Add Number
    changeValue=()=>{
        this.setState((prevState)=>{
            return ({
                counterValue: prevState.counterValue +1
            })
        })
    }

    // Reset & ReInit Number
    resetCounter = (flag)=>{
        if(flag){
            this.setState(()=>{
                return({
                    counterValue: 0
                })
            })
        }else {
            this.setState(()=>{
                return({
                    counterValue: parseInt(this.props.initValue)
                })
            })
        }
    }

    stepCounter = ()=>{
        this.setState((prevState)=>{
            return({
                counterValue: prevState.counterValue + this.state.stepValue
            })
        })
    }

    setStepValue=()=>{
        let input = [...document.querySelectorAll('input')]
        input.forEach((item)=>{
            item.addEventListener('click', ()=>{
                this.setState({
                    stepValue: parseInt(item.value)
                })
            })
        })
    }






render() {
return(<div className="counter">
    <span className='value' onChange={this.changeValue}>
        Licznik: {this.state.counterValue}
    </span>
    <ButtonsPanel stepValue={this.state.stepValue} stepStart={this.stepCounter} changeCounterValue={this.changeValue}
    resetCounterValue={this.resetCounter}></ButtonsPanel>
    <Step changeInputValue={this.setStepValue}></Step>


</div>)
}
}
export default Counter;
