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
            noHeadtext : text.substring(1),
            headText : text.substring(0,1)
        })
    }
    componentWillMount(){
        this.editText()
    }
    render() {
        return (
            <div class="thumb-container">
                <div className="first-order">
                    <p className="invitext thumbtext">{this.state.headText}</p>
                    <p className="whitetext thumbtext">{this.state.noHeadtext}</p>
                </div>
                <div className="second-order">
                    <p className="redtext thumbtext colon">:</p>
                    <p className="redtext thumbtext">{this.state.text}</p>
                </div>
                
            </div>
        )
    }
}
