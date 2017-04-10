import React,{Component} from 'react'
export default class VideoPlayerComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const canvas = this.refs.c1
        const video = this.refs.v1
        const context = canvas.getContext('2d')
        navigator.getUserMedia = navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.oGetUserMedia
        const successCb = (stream)=>{
            video.src = window.URL.createObjectURL(stream)
        }
        const errorCb = ()=>{
            alert("error getting access to your webcam")
        }
        navigator.getUserMedia({audio:false,video:true},successCb,errorCb)
        const w = canvas.width, h = canvas.height
        setInterval(()=>{
            context.clearRect(0,0,w,h)
            context.drawImage(video,0,0,w,h)
        },100)
    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const videoStyle={visibility:'hidden',position:'absolute',left:`${w/4}px`,top:`${h/4}px`}
        const canvasStyle = {position:'absolute',left:`${w/4}px`,top:`${h/4}px`}
        return (<div>
                  <video  ref="v1" width={`${w/2}px`} height={`${h/2}px`} style={videoStyle}>
                  </video>
                  <canvas ref="c1" width={`${w/2}px`} height={`${h/2}px`} style={canvasStyle}>
                  </canvas>
               </div>)
    }
}
