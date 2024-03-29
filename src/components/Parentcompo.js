import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class Parentcompo extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            parentName:"parent"
                }
        this.greetParent=this.greetParent.bind(this)
        
    }
    greetParent(childname)
    {
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default Parentcompo
