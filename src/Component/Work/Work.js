import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
import Image from '../../Asset/photo'
export default class Work extends Component {
    constructor(props){
        super(props)
        this.state = {
            album : Image.Drawing,
            img : 0,
            type : 'photo'
        }
        this.ChangeAlbum = this.ChangeAlbum.bind(this)
    }

    componentDidMount(){
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
    // ${Image.Drawing}
    ChangeImg = (mode) => {
        const {img, album} = this.state
        if(img == Object.keys(album).length != 1){
            if(mode == 'left'){
                if(img == 0){
                    this.setState({
                        img : Object.keys(album).length - 1
                    })
                }
                else{
                    this.setState({
                        img : img - 1
                    })
                }
            }
            else{
                if(img == Object.keys(album).length - 1){
                    this.setState({
                        img : 0
                    })
                }
                else{
                    this.setState({
                        img : img + 1
                    })
                }
            }
        }
    }

    ChangeAlbum = (album) => {
        this.setState({
            album : album,
            type : 'photo',
            img: 0
        })
    }

    ChangeVideo = video => {
        this.setState({
            album : video,
            type : 'video',
            img: 0
        })
    }
    render() {
        const {img, album, type} = this.state
        return (
            <div className="Card-container work">
                <Card color="green" workmenu>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.PosterDesign)}}>POSTER DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Drawing)}}>DRAWING</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Painting)}}>PAINTING</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Illustration)}}>ILLUSTRAION</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Photography)}}>PHOTOGRAPHY</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeVideo(Image.MotionGraphic)}}>VIDEO PRODUCTION</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.TypefaceDesign)}}>TYPEFACE DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.LogoDesign)}}>LOGO DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.PackageDesign)}}>PACKAGE DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.VisualLiteacy)}}>VISUAL LITERACY</p>
                </Card>
                <Card color="red" picture>
                    { type == 'photo' ?
                        <img src={album[`img${img}`]} className="image"/> :
                        <video autoPlay controls muted className="image">
                            <source src={album[`vid${img}`]} type="video/mp4"/>
                        </video>
                    }
                    <p className="nav-arrow" onClick={() => this.ChangeImg("left")}>&#60;</p>
                    <p className="nav-arrow right" onClick={() => this.ChangeImg("right")}>&#62;</p>
                </Card>
                <Thumb text="WORK"/>
            </div>
        )
    }
}
