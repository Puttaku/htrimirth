import React, { Component } from 'react'
import "../../Style/Home.scss"
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
import Threedot from "../Three-dot/Three-dot"
export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Card color="red">
                    <p className="bigtext whitetext">MIRTH</p>
                </Card>
                <Thumb/>
                <Threedot/>
            </div>
        )
    }
}
