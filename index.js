import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {time:0}
    }
    componentDidMount() {
        const updateTime = ()=>{this.setState({time:this.state.time+1})}
        setInterval(()=>{
            updateTime()
        },1000)
    }
    render() {
        return <div>{this.state.time}</div>
    }
}
ReactDOM.render(<Timer/>,document.getElementById('comp'))
