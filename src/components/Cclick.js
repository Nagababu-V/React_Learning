import React, { Component } from 'react'

export class Cclick extends Component {
    clickHandler()
    {
        console.log("hai-->haii")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> HEllo click if u can</button>
            </div>
        )
    }
}

export default Cclick
