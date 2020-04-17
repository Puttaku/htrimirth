import React, { Component } from 'react'
import "../../Style/card.scss"
export default class Card extends Component {
    constructor(props){
        super(props);
        this.paddingSet = this.paddingSet.bind(this);
        this.state = {
            padding: "",
            picture : "",
            skill : "",
            workmenu : ""
        }
    }
    paddingSet(){
        this.setState({
            padding: this.props.padding ? " Card-padding" : "",
            picture: this.props.picture ? " picture" : "",
            skill : this.props.skill ? " skill" : "",
            workmenu : this.props.workmenu ? " workmenu" : "",
        })
    }
    componentWillMount(){
        this.paddingSet()
    }

    render() {
        return (
        <div class={"Card " + this.props.color + this.state.padding + this.state.picture + this.state.skill + this.state.workmenu}>{this.props.children}</div>
        )
    }
}
