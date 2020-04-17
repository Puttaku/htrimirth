import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
export default class Profile extends Component {
    render() {
        return (
            <div className="Card-container profile">
                <Card color="red" padding>
                    <p className="contentText whitetext">Nonnapoj Wongvisuthirat [Mirth]</p>
                    <p className="contentText whitetext">26 Oct 1998</p>
                    <p/>
                    <p className="contentText whitetext">Assumption University of Thailand</p>
                    <p className="contentText whitetext">Communication Arts</p>
                    <p className="contentText whitetext">[2017-Present]</p>
                    <p/>
                    <p className="contentText whitetext">Triam Udom Suksa Pattanakarn School</p>
                    <p className="contentText whitetext">Science and Mathematics Program</p>
                    <p className="contentText whitetext hugemarginBottom">[2011-2017]</p>
                </Card>
                <Thumb text="PROFILE"/>
            </div>
        )
    }
}
