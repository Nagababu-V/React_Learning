import React,{ Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome visitor'
        }
    }
    changemessage(){
        this.setState(
            {
                message:"thank u dengey"
            }
        )
    }
    render(){

        return (
            <div>
                <h1>
                    {this.state.message}
                    </h1>
                    <button onClick={()=>this.changemessage()}>Sub</button>
            </div>
        )
    }
}
export default Message