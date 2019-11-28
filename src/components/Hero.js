import React from 'react'

function Hero(props) {
    if(props.name=='Jocker')
    {
        throw new Error('Not a Hero')
    }
    return (
        <div>
            {props.name}
        </div>
    )
}

export default Hero
