import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import '../../css/Startups/startupcard.css';

function StartupCard({heading, para, subhead, btntext}) {
    return (
        <div className="card-startups">
            <h1 className="head">{heading}</h1>
            <p className="para">{para}</p>
            <h3 className="sub-head">{subhead}</h3>
            <button className="btn">{btntext} <span>></span></button>
        </div>
    )
}

export default StartupCard 
