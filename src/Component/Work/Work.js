import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Work extends Component {
    render() {
        return (
            <div className="Card-container">
                <Card color="red">
                    <p className="bigtext whitetext">WORK</p>
                </Card>
                <Thumb text="WORK"/>
            </div>
        )
    }
}
