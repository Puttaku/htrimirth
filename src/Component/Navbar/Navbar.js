import React, { Component } from 'react'
import "../../Style/Navbar.scss"
import logo from "../../Asset/Icon/logo.png"
import Menuicon from "../../Asset/Icon/menu-icon"
import {Link} from "react-router-dom"
import NavbarMenu from './NavbarMenu'
export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            menu: false,
            isShow: false,
            mode: ''
        }
        this.removeAltMenu = this.removeAltMenu.bind(this)
    }
    removeAltMenu(){
        const {menu, isShow, mode} = this.state
        this.setState({
            menu: !menu,
            mode: mode != 'cross' ? 'cross' : 'normal'
        })
        if(isShow){
            setTimeout(() => this.setState({
                isShow: false,
                mode: ''
            }),500)
        }else{
            this.setState({
                isShow: true
            })
        }
    }
    render() {
        const {menu, isShow, mode} = this.state
        return (
            <div>
                <div className="Navbar-Container">
                <div className={`menu-alternative ${mode}`} onClick={()=> this.removeAltMenu()}>
                    <Menuicon/>
                    <Menuicon/>
                </div>
                <Link to="/" className=""><img className="icon-logo" src={logo} alt="logo"/></Link>
                <div className="menu">
                    <Link to="/" className="menu-list nomarginLeft">HOME</Link>
                    <Link to="/profile" className="menu-list">PROFILE</Link>
                    <Link to="/work" className="menu-list">WORKS</Link>
                    <Link to="/skill" className="menu-list">SKILLS</Link>
                    <Link to="/contact" className="menu-list">CONTACT</Link>
                </div>
            </div>
                {isShow &&
                    <NavbarMenu isShow={menu}/>
                }
            </div>
        )
    }
}
