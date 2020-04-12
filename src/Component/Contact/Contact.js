import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Card color="red">
                    <p className="bigtext whitetext">CONTACT</p>
                </Card>
                <Thumb text="CONTACT"/>
            </div>
        )
    }
}