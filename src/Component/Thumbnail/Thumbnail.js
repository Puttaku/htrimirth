import React, { Component } from 'react'
import "../../Style/thumbnail.scss"
export default class Thumbnail extends Component {
    constructor(props){
        super(props);
        this.editText = this.editText.bind(this);
        this.state = {
            text : "",
            noHeadtext : ""
        }
    }
    editText(){
        var text = this.props.text;
        this.setState({
            text : text,
            noHeadtext : text.substring(1)
        })
    }
    componentWillMount(){
        this.editText()
    }
    render() {
        return (
            <div class="thumb-container">
                <p className="whitetext thumbtext first-order" style={{left : this.state.text === "WORK" ? "200px" : "150px"}}>{this.state.noHeadtext}</p>
                <p className="redtext thumbtext second-order">:{this.state.text}</p>
            </div>
        )
    }
}
