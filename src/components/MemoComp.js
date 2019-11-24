import React from 'react'

function MemoComp({name}) {
    console.log("memo comp")
    return (
        <div>
            Memo component {name}
            }
        </div>
    )
}

export default React.memo(MemoComp)
