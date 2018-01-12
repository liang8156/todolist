import React, { Component } from 'react'

class HelloMessage extends Component {

    render() {
        return (
            <div>
                Good morning!! {this.props.name}
                <input onChange={this.props.delegate} />
            </div>
        );
    }
}
export default HelloMessage;
