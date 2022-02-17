import React from 'react';
import '../../App.css';

export default class Holder extends React.Component {
    render() {
        return (
            <div className='holder'>
                {this.props.children}
            </div>);
    }
}