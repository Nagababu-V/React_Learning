import React from 'react'

function Fclick() {
    function clickHandler()
    {
        alert("clicked u")
    }
    return (
        <div>
            <button onClick={clickHandler}>haii</button>
        </div>
    )
}

export default Fclick
