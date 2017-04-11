import React,{Component} from 'react'
const imgSources = ["angry","laughing","like","love","sad"]
export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {btnVisibility:'hidden'}
    }
    componentDidMount() {
        this.refs.likeBtn.onclick = ()=>{
            const btnVisibility = this.state.btnVisibility == 'hidden'?'visible':'hidden'
            this.setState({btnVisibility})
        }
    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const x = w/20,y = -h/2+h/80
        const emojiStyle = {float:'left'}
        const emojiGroupStyle = {visibility:this.state.btnVisibility,WebkitTransform:`translateX(${-(Math.min(w,h)/60)*imgSources.length}px)translateY(${-Math.min(w,h)/30}px)`,transform:`translateX(${-(Math.min(w,h)/60)*imgSources.length}px)translateY(${-Math.min(w,h)/30}px)`}
        const aStyle = {color:'black',background:'white'}
        const aDivStyle={transform:`translateX(-${w/5}px)translateY(${h/20}px)`,WebkitTransform:`translateX(-${w/5}px)translateY(${h/20}px)`,MozTransform:`translateX(-${w/10}px)translateY(${h/20}px)`,OTransform:`translateX(-${w/10}px)translateY(${h/20}px)`}
        const divStyle = {WebkitTransform:`translateX(${x}px)translateY(${y}px)`,transform:`translateX(${x}px)translateY(${y}px)`,OTransform:`translateX(${x}px)translateY(${y}px)`,MozTransform:`translateX(${x}px)translateY(${y}px)`}
        const imgs = imgSources.map((imgSource)=><img src={`img/${imgSource}.png`} key= {`button_${imgSource}`} ref={`ref_${imgSource}`} width={`${Math.min(w,h)/15}px`} height={`${Math.min(w,h)/15}px`} style={emojiStyle}/>)
        console.log(imgs)
        return <div style={divStyle}>
                  <div style={emojiGroupStyle}>
                      {imgs}
                  </div>
                  <div style={aDivStyle}>
                      <a style={aStyle} href="javascript:void(0)" ref="likeBtn">Like</a>
                  </div>
               </div>
    }
}
