import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import VideoPlayerComponent from './components/video_player_component'
import LikeButtonComponent from './components/LikeButtonComponent'
class FbLikeVpComponent extends Component {
    componentDidMount() {
        const playerComp = this.refs.player
        const emojiGrpComp = this.refs.emojigrp
        const emojiGrpRefs = emojiGrpComp.refs
        const likeBtn = emojiGrpRefs.likeBtn
        const imgButtonRefs = Object.keys(emojiGrpRefs).filter((key)=>key.startsWith("ref"))
        imgButtonRefs.forEach((imgButtonRef)=>{
            const imgButton = emojiGrpRefs[imgButtonRef]
            imgButton.onclick = ()=>{
                likeBtn.click()
                const emoji = imgButtonRef.replace("ref_","")
            }
        })
    }
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const transformStr = `translateX(${w/4}px)translateY(${h/4}px)`
        const fbVideoStyle = {background:'#BDBDBD',transform:transformStr,WebkitTransform:transformStr,MozTransform:transformStr,OTransform:transformStr,width:`${w/2+w/6}px`,height:`${h/2+h/6}px`}
        return (<div style={fbVideoStyle}>
                <VideoPlayerComponent ref="player"/>
                <LikeButtonComponent ref="emojigrp"/>
            </div>)
    }

}
ReactDOM.render(<FbLikeVpComponent/>,document.getElementById('comp'))
