import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Profile extends Component {
    render() {
        return (
            <div>
                <Card color="red">
                    <p className="bigtext whitetext">PROFILE</p>
                </Card>
                <Thumb text="PROFILE"/>
            </div>
        )
    }
}
