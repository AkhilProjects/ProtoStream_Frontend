import React from 'react'
import './css/Main.css'

function Main(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default Main
