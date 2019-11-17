import React, { Component } from 'react'

 class Eventbind extends Component {
     constructor(props)
     {
         super(props)
         this.state={
             message:"hello"
         }
         this.clickHandler=this.clickHandler.bind(this) //binding in class constructor this is efficienr as it binds only once
     }
     clickHandler()
     {
this.setState({
    message:"good byeeeeeee"
}
)
     }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default Eventbind
