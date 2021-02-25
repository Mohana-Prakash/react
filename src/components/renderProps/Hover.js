import React, { Component } from 'react'

class Hover extends Component {

    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>clicked {count} times</h1>
            </div>
        )
    }
}

export default Hover
