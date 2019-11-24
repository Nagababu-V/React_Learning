import React, { Component } from 'react'
import RegularCom from './RegularCom'
import Purecomp from './Purecomp'
import MemoComp from './MemoComp'

class Parentcom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'nani',
             count:0
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
        if(this.state.count==0)
        {
        this.setState(
            {
            name:'Nagababu',
            count:1
            })
        }
        else{

            this.setState(
                {
                name:'Nani',
                count:1
                })
        }
    },2000)
    
    }
    render() {
        console.log("Parent c")
        return (
            <div>
                <MemoComp name={this.state.name}>s</MemoComp>
              { /* <RegularCom name={this.state.name}></RegularCom>*/}
                {/*<Purecomp name={this.state.name}></Purecomp>*/}
            </div>
        )
    }
}

export default Parentcom
