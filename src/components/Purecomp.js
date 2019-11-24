import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
    render() {
        console.log("Puuuure c")
        return (
            <div>
                my pure Component {this.props.name}
            </div>
        )
    }
}
export default Purecomp
