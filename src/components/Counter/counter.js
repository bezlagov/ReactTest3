import React from 'react';
import '../../App.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment(e) {
        console.log();
        this.setState({ count: this.state.count + 1 });
    }

    decrement(e) {
        if (this.state.count - 1 >= 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div className='counterBox'>
                <h1>{this.state.count}</h1>
                <button onClick={(e) => this.increment(e)}>+</button>
                <button onClick={(e) => this.decrement(e)}>-</button>
            </div>);
    }
}