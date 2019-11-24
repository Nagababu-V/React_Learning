import React from 'react'

//function ForwdRef() {
//    return (
//        <div>
//            <input type="text"/>
 //       </div>
  //  )
//}

const ForwdRef=React.forwardRef((props,ref)=>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default ForwdRef
