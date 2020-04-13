import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Contact extends Component {
    render() {
        return (
            <div className="Card-container">
                <Card color="red">
                    <p className="contentText whitetext">Instagram : htrimirth</p>
                    <p className="contentText whitetext">Facebook : mirth</p>
                    <p className="contentText whitetext">Email : htrimirth@gmail.com</p>
                </Card>
                <Thumb text="CONTACT"/>
            </div>
        )
    }
}
