import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '0',
            operator: null,
            firstValue: null,
            waitingForSecondValue: false
        };
    }

    inputDigit = (digit) => {
        const { displayValue, waitingForSecondValue } = this.state;

        if (waitingForSecondValue) {
            this.setState({
                displayValue: String(digit),
                waitingForSecondValue: false
            });
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            });
        }
    };

    inputDecimal = () => {
        const { displayValue, waitingForSecondValue } = this.state;

        if (waitingForSecondValue) {
            this.setState({
                displayValue: '.',
                waitingForSecondValue: false
            });
        } else if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.',
                waitingForSecondValue: false
            });
        }
    };

    clearDisplay = () => {
        this.setState({
            displayValue: '0',
            operator: null,
            firstValue: null,
            waitingForSecondValue: false
        });
    };

    render() {
        const { displayValue } = this.state;

        return (
            <div>
                <div>{displayValue}</div>
                <button onClick={() => this.inputDigit(7)}>7</button>
                <button onClick={() => this.inputDigit(8)}>8</button>
                <button onClick={() => this.inputDigit(9)}>9</button>
                <button onClick={() => this.inputDigit(4)}>4</button>
                <button onClick={() => this.inputDigit(5)}>5</button>
                <button onClick={() => this.inputDigit(6)}>6</button>
                <button onClick={() => this.inputDigit(1)}>1</button>
                <button onClick={() => this.inputDigit(2)}>2</button>
                <button onClick={() => this.inputDigit(3)}>3</button>
                <button onClick={this.inputDecimal}>.</button>
                <button onClick={this.clearDisplay}>AC</button>
            </div>
        );
    }
}

export default Calculator;