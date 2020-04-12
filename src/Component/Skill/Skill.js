import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Skill extends Component {
    render() {
        return (
            <div>
                <Card color="red">
                    <p className="bigtext whitetext">SKILL</p>
                </Card>
                <Thumb text="SKILL"/>
            </div>
        )
    }
}
