import "../../Style/animate.scss"
import React, { Component } from 'react'
let bgnum = 44;
export default class animate extends Component {
    constructor(){
        super();
        this.bgnum = this.bgnum.bind(this);
    }
    bgnum(){
        let item = []
        for(var i = 0;i<bgnum;i++){
            item.push(<div className="stripe-element-container">
                        <div className="stripe-element"/>
                        <div className="stripe-element green"/>
                      </div>)
        }
        return item;
    }
    render() {
        return (
            <div className="animate-box">
                <div className="element-box">
                    {this.bgnum()}
                </div>
            </div>
        )
    }
}
