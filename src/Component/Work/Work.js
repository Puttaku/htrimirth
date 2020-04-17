import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Work extends Component {
    render() {
        return (
            <div className="Card-container work">
                <Card color="green" workmenu>
                    <p className="workmenutext whitetext">POSTER DESIGN</p>
                    <p className="workmenutext whitetext">DRAWING</p>
                    <p className="workmenutext whitetext">PAINTING</p>
                    <p className="workmenutext whitetext">ILLUSTRAION</p>
                    <p className="workmenutext whitetext">PHOTOGRAPHY</p>
                    <p className="workmenutext whitetext">VIDEO PRODUCTION</p>
                    <p className="workmenutext whitetext">TYPEFACE DESIGN</p>
                    <p className="workmenutext whitetext">LOGO DESIGN</p>
                    <p className="workmenutext whitetext">PACKAGE DESIGN</p>
                    <p className="workmenutext whitetext">VISUAL LITERACY</p>
                </Card>
                <Card color="red" picture>
                    <p className="nav-arrow">&#60;</p>
                    <p className="nav-arrow right">&#62;</p>
                </Card>
                <Thumb text="WORK"/>
            </div>
        )
    }
}
