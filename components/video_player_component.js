import React,{Component} from 'react'
class Emoji {
    constructor(x,y,w,src) {
        this.x = x
        this.y = y
        this.w = w
        this.ux = -x/40
        this.uy = -2*w/10
        this.limit = y-2*w
        this.image = new Image()
        this.image.src = `img/${src}.png`
        this.loaded = false
        this.image.onload = () => {
            this.loaded = true
        }
      }
      stop() {
          return this.ux == 0 && this.uy == 0
      }
      render(ctx) {
          if(this.loaded) {
              ctx.drawImage(this.image,this.x,this.y,this.w,this.w)
              this.x+=this.ux
              this.y+=this.uy
              if(this.y<=this.limit) {
                  this.uy = Math.abs(this.uy)
              }
              if(this.y>=this.limit+2*this.w) {
                  this.uy = -Math.abs(this.uy)
              }
              if(this.x<0) {
                  this.ux = 0
                  this.uy = 0
              }
          }

      }
  }

export default class VideoPlayerComponent extends Component {
    constructor(props) {
        super(props)
        this.emojis = []
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
            this.emojis.forEach((emoji,index)=>{
                emoji.render(context)
                console.log(emoji.x)
                if(emoji.stop()) {
                    this.emojis.splice(index,1)
                }
            })
        },100)
    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        if(this.props.newEmoji!=undefined) {
            this.emojis.push(new Emoji(w/2,6*h/20,w/40,this.props.newEmoji))
        }

        const transformStr = `translateX(${w/12}px)translateY(${-h/2+h/12}px)`
        const videoStyle={visibility:'hidden'}
        const canvasStyle = {transform:transformStr,WebkitTransform:transformStr,OTransform:transformStr,MozTransform:transformStr}
        return (<div>
                  <video  ref="v1" width={`${w/2}px`} height={`${h/2}px`} style={videoStyle}>
                  </video>
                  <canvas ref="c1" width={`${w/2}px`} height={`${h/2}px`} style={canvasStyle}>
                  </canvas>
               </div>)
    }
}
