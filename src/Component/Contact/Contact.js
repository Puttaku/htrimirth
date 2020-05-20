import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Contact extends Component {
    render() {
        return (
            <div className="Card-container contact">
                <Card color="red" padding>
                    <p className="contentText whitetext">Instagram : htrimirth</p>
                    <p className="contentText whitetext">Facebook : mirth</p>
                    <div className="emailTextContainer">
                        <p className="contentText whitetext bigmarginBottom">Email : htrimirth</p>
                        <p className="contentText whitetext bigmarginBottom attext">@</p>
                        <p className="contentText whitetext bigmarginBottom">gmail.com</p>
                    </div>
                </Card>
                <Thumb text="CONTACT"/>
            </div>
        )
    }
}
