import React, { Component } from 'react'
import "../../Style/thumbnail.scss"
export default class Thumbnail extends Component {
    render() {
        return (
            <div class="thumb-container">
                <p className="whitetext thumbtext first-order">ORTFOLIO</p>
                <p className="redtext thumbtext second-order">:PORTFOLIO</p>
            </div>
        )
    }
}
