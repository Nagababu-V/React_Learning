import React, { Component } from 'react'

class ClickCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    render() {
    
        return (
            <div>
               <button onClick={this.incrementCount}>click {this.state.count} times</button> 
            </div>
        )
    }
}

export default ClickCounter2
