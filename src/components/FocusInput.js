import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props)
    {
        super(props)
        this.compRef=React.createRef()
    }
    clickhandler=()=>{
        this.compRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickhandler}>Focus INput</button>
            </div>
        )
    }
}

export default FocusInput
