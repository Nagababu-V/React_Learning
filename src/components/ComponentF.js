import React, { Component } from 'react'
import {UserConsumer} from './UserContext'
class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username,pwd)=>{
                        return <div>Hello {username} and {pwd}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
