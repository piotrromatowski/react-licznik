import React, {Component} from 'react';

class Step extends Component {
    Value = () => {
        this.props.changeInputValue()
    }

    render() {
        return (
        <div>
        <label>Krok:</label>
        <input type='number' min='1' onChange={this.Value}></input>
        </div>
        )
    };
}

export default Step;