import React, { Component } from 'react'
//Conditional Rendring of React
class Usergreet extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedin:false
        }
    }
    render() {
        let message
        if(this.state.isLoggedin){
            message=<div>HEllo nani</div>
        }
        else{
            message=<div>Hello guest</div>
        }
        return <div>{message}</div>
        /*if(this.state.isLoggedin)
        {
            return (
                <div>Welcome Nani</div>
            )
        }
        else{
            return  (
                <div>Welcome guest</div>
            )
        }
        //return (
          //  <div>
            //    <div>Welcome nagababu</div>  
              //  <div>Welcome Guest</div>
        //)*/
    }
}

export default Usergreet
