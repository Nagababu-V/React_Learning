import React from 'react'
//List rendering
function NameList() {
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
    const names1=names.map(x=><div><h1>{x.name}</h1><h2>{x.age}</h2></div>)
    return (
        <div>
        {names1}
        </div>
    )
}

export default NameList
