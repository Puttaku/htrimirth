import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Home extends Component {
    render() {
        return (
            <div className="Card-container home">
                <Card color="red">
                    <p className="bigtext whitetext marginBottom">MIRTH</p>
                </Card>
                <Thumb text="PORTFOLIO"/>
            </div>
        )
    }
}
