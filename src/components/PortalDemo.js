import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return  ReactDom.createPortal(
        <div>
            Portals Demo
        </div>,document.getElementById('portalroot')
    )
}

export default PortalDemo
