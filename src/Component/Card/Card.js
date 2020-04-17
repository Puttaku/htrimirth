import React, { Component } from 'react'
import "../../Style/card.scss"
import "../../Style/misc.scss"
export default class Card extends Component {
    constructor(props){
        super(props);
        this.paddingSet = this.paddingSet.bind(this);
        this.state = {
            padding: "",
            picture : "",
            skill : ""
        }
    }
    paddingSet(){
        this.setState({
            padding: this.props.padding ? " Card-padding" : "",
            picture: this.props.picture ? " picture" : "",
            skill : this.props.skill ? " skill" : ""
        })
    }
    componentWillMount(){
        this.paddingSet()
    }

    render() {
        return (
        <div class={"Card " + this.props.color + this.state.padding + this.state.picture + this.state.skill}>{this.props.children}</div>
        )
    }
}
