import {ReactComponent as menuIcon} from "./menu-icon.svg"
import React from 'react'
import styled, { keyframes } from "styled-components";



const Menuicon = () => {
    const menuAnimation = keyframes`
    100%{
        transform: rotate(45deg);
        fill: red;
    }`

    const MenuButton = styled(menuIcon)`
        // animation: ${menuAnimation} infinite 0.25s linear;
        fill: #1C9696;
    `
    return(
        <MenuButton/>
    )
}

export default Menuicon