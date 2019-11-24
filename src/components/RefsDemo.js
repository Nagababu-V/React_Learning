import React, { Component } from 'react'

// ** NOTE: Ref cannot be attached to functional components

class RefsDemo extends Component {
    constructor(props)
    {
        super(props)
        this.inputRef=React.createRef()
        this.clickhandler=this.clickhandler.bind(this)
    }
    componentDidMount()
    {
        console.log(this.inputRef)
    }
    clickhandler()
    {
        this.inputRef.current.focus()

        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickhandler}/>
            </div>
        )
    }
}

export default RefsDemo
