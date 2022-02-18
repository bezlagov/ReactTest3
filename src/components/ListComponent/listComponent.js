import React from "react";
import { v4 } from 'uuid';

//const arr = [1, 2, 33, 56, 88, 44,1]


export default class ListComponent extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(obj => {
                    return <li key={v4()}>{obj.value}</li>
                })}
            </ul>
        );
    }
}