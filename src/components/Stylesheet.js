import React from 'react'
import './mystyle.css'
//INline Styling and other
function Stylesheet(props) {
    let classN=props.cond? 'primary': ''
    const head={
        fontSize:'72px',color:'blue'
    }
    return (
        <div>
            <h1 className={`${classN} font-s`}>Style Sheet</h1>

            <h3 style={head}>haii</h3>
        </div>
    )
}

export default Stylesheet
