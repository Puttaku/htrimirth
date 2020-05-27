import React, { Component } from 'react'
import "../../Style/Navbar.scss"
import logo from "../../Asset/Icon/logo.png"
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar-Container">
                <Link to="/" className=""><img className="icon-logo" src={logo} alt="logo"/></Link>
                <div className="menu">
                    <Link to="/" className="menu-list nomarginLeft">HOME</Link>
                    <Link to="/profile" className="menu-list">PROFILE</Link>
                    <Link to="/work" className="menu-list">WORKS</Link>
                    <Link to="/skill" className="menu-list">SKILLS</Link>
                    <Link to="/contact" className="menu-list">CONTACT</Link>
                </div>
            </div>
        )
    }
}
