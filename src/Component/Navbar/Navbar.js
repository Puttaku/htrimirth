import React, { Component } from 'react'
import "../../Style/Navbar.scss"
import logo from "../../Asset/Icon/logo.png"
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar-Container">
                <img className="icon-logo" src={logo} alt="logo"/>
                <div className="menu">
                    <Link to="/" className="menu-list nomarginLeft">Home</Link>
                    <Link to="/" className="menu-list">Profile</Link>
                    <Link to="/" className="menu-list">Works</Link>
                    <Link to="/" className="menu-list">Skills</Link>
                    <Link to="/" className="menu-list">Contact</Link>
                </div>
            </div>
        )
    }
}
