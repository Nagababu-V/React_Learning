import React from 'react'
//List rendering
function NameList() {
    const person=['bruce','hai','jhsjf']
    const names=[        {
            id:1,
            name:'nagababu',
            age:20
        },
        {
            id:2,
            name:'Avinsah',
            age:21
        },
        {
            id:22,
            name:'Avinsah 025',
            age:221
        },
        {
        id:21,
        name:'Avinsah 024',
        age:212
        }
    ]
    //when using lists we must pass unique key to the list and the passed key cannot be accesed in the child component.
    const names1=person.map((x,index)=><h1 key={x}>{index},{x}</h1>)
    return (
        <div>
        {names1}
        </div>
    )
}

export default NameList
