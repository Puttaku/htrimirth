import React, { Component } from 'react'
import Card from "../Card/Card"
import Thumb from "../Thumbnail/Thumbnail"
import Image from '../../Asset/photo'
export default class Work extends Component {
    constructor(props){
        super(props)
        this.state = {
            album : Image.PosterDesign,
            img : 0,
            type : 'photo',
            multiple : true,
            finished : false
        }
        this.ChangeAlbum = this.ChangeAlbum.bind(this)
    }

    componentDidMount(){
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        if(Object.keys(this.state.album).length != 1){
            this.setState({
                multiple : false
            })
        }
        else{
            this.setState({
                multiple : true
            })
        }
    }
    // ${Image.Drawing}
    ChangeImg = (mode) => {
        const {img, album, type} = this.state
        if(Object.keys(album).length != 1){
            if(mode == 'left'){
                if(img == 0){
                    this.setState({
                        img : Object.keys(album).length - 1,
                        finished : type == 'video' ? true : false
                    })
                }
                else{
                    this.setState({
                        img : img - 1,
                        finished : type == 'video' ? true : false
                    })
                }
            }
            else{
                console.log("Right")
                if(img == Object.keys(album).length - 1){
                    this.setState({
                        img : 0,
                        finished : type == 'video' ? true : false
                    })
                }
                else{
                    this.setState({
                        img : img + 1,
                        finished : type == 'video' ? true : false
                    })
                }
            }
        }
    }

    ChangeAlbum = (album) => {
        this.setState({
            album : album,
            type : 'photo',
            img: 0,
            multiple : Object.keys(album).length == 1 ? true : false,
            finished : false
        })
    }

    ChangeVideo = video => {
        console.log(video)
        this.setState({
            album : video,
            type : 'video',
            img: 0,
            multiple : Object.keys(video).length == 1 ? true : false,
            finished : true
        })
    }
    render() {
        const {img, album, type, multiple, finished} = this.state
        console.log(img)
        return (
            <div className="Card-container work">
                <Card color="green" workmenu>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.PosterDesign)}}>POSTER DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Infographic)}}>INFOGRAPHIC</p>
                    {/* <p className="workmenutext whitetext" onClick={() => {this.ChangeVideo(Image.Gif)}}>GIFS</p> */}
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Drawing)}}>DRAWING</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Painting)}}>PAINTING</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Illustration)}}>ILLUSTRAION</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Photography)}}>PHOTOGRAPHY</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeVideo(Image.MotionGraphic)}}>MOTION GRAPHIC</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeVideo(Image.VideoProduction)}}>VIDEO PRODUCTION</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.TypefaceDesign)}}>TYPEFACE DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.LogoDesign)}}>LOGO DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.PackageDesign)}}>PACKAGE DESIGN</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.VisualLiteacy)}}>VISUAL LITERACY</p>
                    <p className="workmenutext whitetext" onClick={() => {this.ChangeAlbum(Image.Misc)}}>MISC</p>
                </Card>
                <Card color="red" picture>
                <div className="image-container" style={{filter: !finished ? "blur(5px)" : ""}}>
                    { type == 'photo' ?
                        
                            <img src={album[`img${img}`]} className="image" onLoad={() => this.setState({finished : true})}/> :
                            <video autoPlay controls muted className="image" key={img} onLoad={() => this.setState({finished : true})}>
                                <source src={album[`vid${img}`]} type="video/mp4"/>
                            </video>   
                    }
                </div>
                    <p className="nav-arrow" style={{color : multiple ? "#ffffff40" : "white"}} onClick={() => this.ChangeImg("left")}>&#60;</p>
                    <p className="nav-arrow right" style={{color : multiple ? "#ffffff40" : "white"}} onClick={() => this.ChangeImg("right")}>&#62;</p>
                </Card>
                <Thumb text="WORK"/>
            </div>
        )
    }
}
