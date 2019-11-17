import React from 'react'

/*function Greet(props)
{
    return (
      <div>
        <h1>
            Hello {props.name} 
        </h1>
        {props.childern}
      </div>
    )
}*/
const Greet =({name,hname})=>{

  //console.log(props)
  return (
    <div>
      <h1>Haii {name}-- {hname}</h1>
    </div>
  )
}
export default Greet