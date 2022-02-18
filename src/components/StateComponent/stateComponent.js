import React from 'react';
export default class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, inputValue: '' }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick() {
        //this.setState({ value: this.state.value + 1 });
        this.setState((prevValue, props) => {
            console.log(prevValue, props);
            return { value: this.state.value + 1 };
        })
    }

    handleFocus() {
        console.log("Focus");
    }
    handleBlur() {
        console.log("Blur");
    }
    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Submit");
    }
    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>add</button>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} />
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <h2>{this.state.inputValue}</h2>

            </div>
        );
    }
}