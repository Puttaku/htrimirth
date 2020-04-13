import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Skill extends Component {
    render() {
        return (
            <div className="Card-container content">
                <Card color="red">
                    <p className="subheadtext whitetext">COMPUTER <br />PROGRAM</p>
                    <p className="contentText whitetext">Adobe Illustrator</p>
                    <p className="contentText whitetext">Adobe Photoshop</p>
                    <p className="contentText whitetext">Adobe Premiere Pro</p>
                    <p className="contentText whitetext">Adobe After Effect</p>
                    <p className="contentText whitetext">Adobe Lightroom</p>
                    <p className="contentText whitetext">Adobe XD</p>
                    <p className="contentText whitetext">Procreate</p>
                    <p className="contentText whitetext">Pro tool</p>
                    <p className="contentText whitetext">Fontlab Studio</p>
                </Card>
                <Card color="red">
                    <p className="subheadtext whitetext">SKILL</p>
                    <p className="contentText whitetext">Graphic Design</p>
                    <p className="contentText whitetext">Photography</p>
                    <p className="contentText whitetext">Videography</p>
                    <p className="contentText whitetext">Video Editing</p>
                    <p className="contentText whitetext">Sound Mixing</p>
                    <p className="contentText whitetext">Drawing</p>
                    <p className="contentText whitetext">Painting</p>
                </Card>
                <Thumb text="SKILL"/>
            </div>
        )
    }
}
