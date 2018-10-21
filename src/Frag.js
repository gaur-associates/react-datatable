
import React, { Component } from 'react'

export class Frag extends Component {

    render() {
        if (this.props.err === "true"){
            // throw new Error( "this is a simulated error")
        }

        return <React.Fragment>
            <tr>
                <td> {this.props.first} </td>
                <td> {this.props.second} </td>
            </tr>
        </React.Fragment>
    }
}
export var junk;