import React, { Component } from 'react'
import "../../Style/dot.scss"
export default class Threedot extends Component {
    render() {
        return (
            <div className="Three-dot-container">
                <div className = "red sqdot"/>
                <div className = "sqdot"/>
                <div className = "darkgreen sqdot"/>
                <div className = "green sqdot"/>
            </div>
        )
    }
}
