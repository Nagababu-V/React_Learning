import React, { Component } from 'react'
class Login extends Component {
    render() {
        return (
            <form >
                <label id="label">UserName:</label>
                <input type="email"></input><br></br>
                <label id="label">Plassword:</label>
                <input type="password"/>
            </form>
        )
    }
}

export default Login
