import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Card color="red">
                    <p className="bigtext whitetext">MIRTH</p>
                </Card>
                <Thumb text="PORTFOLIO"/>
            </div>
        )
    }
}
