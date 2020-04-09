import React, { Component } from 'react'
import "../../Style/card.scss"
import "../../Style/misc.scss"
export default class Card extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
        <div class={"Card " + this.props.color}>{this.props.children}</div>
        )
    }
}
