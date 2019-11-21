import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto'
//Component Life cylce Binding
//usig the onchange event handler and the set state menthod react can control the 
//form components.
class Form extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            comment:'',
            topic:'react'
        }
    }
    handleChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleComment=(event)=>{this.setState({comment:event.target.value})}
    handletopic=(event)=>{
        this.setState(
            {
                topic:event.target.value
            }
        )
    }
    handleSubmit=event=>{
        alert("submkitted")
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.hangleComment}/><br></br>
                    <select value={this.state.topic} onChange={this.handletopic}>
                        <option value='reactJs'>reactJs</option>
                        <option value='reactJs33'>reactJs33</option>
                        <option value='reactJs44'>reactJs44</option>
                        <option value='reactJs12'>reactJs12</option>
                        <option value='reactJs22'>reactJs22</option>
                    </select>
                </div>
                <button type="submit"/>
            </form>
        )
    }
}

export default Form
