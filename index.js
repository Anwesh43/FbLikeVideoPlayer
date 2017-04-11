import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import VideoPlayerComponent from './components/video_player_component'
import LikeButtonComponent from './components/LikeButtonComponent'
class FbLikeVpComponent extends Component {
    render() {
        const w = window.innerWidth,h = window.innerHeight
        const transformStr = `translateX(${w/4}px)translateY(${h/4}px)`
        const fbVideoStyle = {background:'#BDBDBD',transform:transformStr,WebkitTransform:transformStr,MozTransform:transformStr,OTransform:transformStr,width:`${w/2+w/6}px`,height:`${h/2+h/6}px`}
        return (<div style={fbVideoStyle}>
                <VideoPlayerComponent/>
                <LikeButtonComponent/>
            </div>)
    }

}
ReactDOM.render(<FbLikeVpComponent/>,document.getElementById('comp'))
