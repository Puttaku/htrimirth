import React, { Component } from 'react'
import "../../Style/NavbarMenu.scss"
import {Link} from "react-router-dom"
export default class NavbarMenu extends Component {
    render() {
        const { isShow } = this.props
        return (
            <div className={`alt-menu-container ${isShow ? '' : 'hide'}`}>
                <div className="alt-menu-item">
                    <a href="/">HOME</a>
                </div>
                <div className="alt-menu-item">
                    <a href="/profile">PROFILE</a>
                </div>
                <div className="alt-menu-item">
                    <a href="/work">WORKS</a>
                </div>
                <div className="alt-menu-item">
                    <a href="/skill">SKILLS</a>
                </div>
                <div className="alt-menu-item">
                    <a href="/contact">CONTACT</a>
                </div>
            </div>
        )
    }
}
