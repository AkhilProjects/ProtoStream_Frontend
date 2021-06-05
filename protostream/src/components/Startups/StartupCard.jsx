import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import '../../css/Startups/startupcard.css';
import {NavLink} from 'react-router-dom'

function StartupCard({heading, para, subhead, btntext, link}) {
    return (
        <div className="card-startups">
            <h1 className="head">{heading}</h1>
            <p className="para">{para}</p>
            <h3 className="sub-head">{subhead}</h3>
            <NavLink to={`/startups/${link}`} className="link">
                <button className="btn">{btntext} <span>{'>'}</span></button>
            </NavLink>
        </div>
    )
}

export default StartupCard 
