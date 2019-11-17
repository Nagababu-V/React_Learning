import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementFive(){
        this.incerement()
        this.incerement()
        this.incerement()
        this.incerement()
        this.incerement()
    }
    incerement(){
        /*this.setState(
            {
                count:this.state.count+1
            },()=>{console.log('Call back value',this.state.count)}*/
            this.setState(prevState=>({
                count:prevState.count+1
            }))
    }
    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Click to +</button>
            </div>
        )
    }
}

export default Counter
