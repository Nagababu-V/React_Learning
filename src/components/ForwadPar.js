import React, { Component } from 'react'
import ForwdRef from './ForwdRef'

class ForwadPar extends Component {
    constructor(props) {
        super(props)
    this.inputref=React.createRef()
    this.chandler=this.chandler.bind(this)
    }
    chandler()
    {
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <ForwdRef ref={this.inputref}></ForwdRef>
                <button onClick={this.chandler}> Focus Input</button>
            </div>
        )
    }
}

export default ForwadPar
