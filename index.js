import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import VideoPlayerComponent from './components/video_player_component'
import LikeButtonComponent from './components/LikeButtonComponent'
class FbLikeVpComponent extends Component {
    render() {
        return (<div>
                <VideoPlayerComponent/>
                <LikeButtonComponent/>
            </div>)
    }

}
ReactDOM.render(<FbLikeVpComponent/>,document.getElementById('comp'))
