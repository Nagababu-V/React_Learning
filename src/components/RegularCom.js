import React, { Component } from 'react'

class RegularCom extends Component {
    render() {
        console.log("Regulaaaaar c")
        return (
            <div>
               RegularCom  {this.props.name}
            </div>
        )
    }
}

export default RegularCom
