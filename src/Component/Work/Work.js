import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Work extends Component {
    render() {
        return (
            <div className="Card-container work">
                <Card color="green">
                    <p className="contentText whitetext">POSTER DESIGN</p>
                    <p className="contentText whitetext">DRAWING</p>
                    <p className="contentText whitetext">PAINTING</p>
                    <p className="contentText whitetext">ILLUSTRAION</p>
                    <p className="contentText whitetext">PHOTOGRAPHY</p>
                    <p className="contentText whitetext">VIDEO PRODUCTION</p>
                    <p className="contentText whitetext">TYPEFACE DESIGN</p>
                    <p className="contentText whitetext">LOGO DESIGN</p>
                    <p className="contentText whitetext">PACKAGE DESIGN</p>
                    <p className="contentText whitetext">VISUAL LITERACY</p>
                </Card>
                <Card color="red" picture>
                    <p className="bigtext whitetext">WORK</p>
                </Card>
                <Thumb text="WORK"/>
            </div>
        )
    }
}
