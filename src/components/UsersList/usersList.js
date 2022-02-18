import React from "react";
import { v4 } from 'uuid';

export default class UsersList extends React.Component{

    render(){
        return(
            <div>
                  {this.props.users.map(item => {
                    return <p key={v4()}>{item}</p>
                })}
            </div>
        );
    }
}