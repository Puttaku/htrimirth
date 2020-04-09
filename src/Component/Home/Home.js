import React, { Component } from 'react'
import "../../Style/Home.scss"
import Card from "../Card/Card"
export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Card color="red">
                    <p className="bigtext whitetext">MIRTH</p>
                </Card>
            </div>
        )
    }
}
