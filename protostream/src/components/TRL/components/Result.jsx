import React from 'react'
import '../css/Result.css'
import arrow from '../../../assets/images/arrow.svg'

function Result({heading, quote, image, suggestion, btn, link}) {
    return (
      <div className="Result-trl">
        <div className="container">
          <img src={image} alt="" className="image" />
          <div className="text-area">
            <h2 className="heading">{heading}</h2>
            <h1 className="quote">{quote}</h1>
            <h4 className="suggestion">{suggestion}</h4>
          </div>
          <a href={link}>
            <button className="btn">{btn} <img src={arrow} alt="" /></button>
          </a>
        </div>
      </div>
    );
}

export default Result
