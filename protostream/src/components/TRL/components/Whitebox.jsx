import React from 'react'
import "../css/Whitebox.css"


function Whitebox(props) {
    return (
        <div className="Whitebox">
            {props.children}
        </div>
    )
}

export default Whitebox
