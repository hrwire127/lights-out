import React, { Component } from 'react'
import './Block.css'

class Block extends Component {
    render() {
        const color = this.props.color;
        return (
            <div className = {`block ${color === "a" ? "lit" : ""}`}></div>
        )
    }
}
export default Block;