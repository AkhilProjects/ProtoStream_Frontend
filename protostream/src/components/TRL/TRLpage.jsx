import React, {useState, useEffect} from 'react'
import QuestionSlide from './components/QuestionSlide'
import Whitebox from './components/Whitebox'
import thermometer from './components/Thermometer.svg'
import './css/trl.css'
import Questions from "./Questions.json";

function TRLpage() {
  const [current, setCurrent] = useState(0);
  const [i, seti] = useState(0);
  const [score, setScore] = useState(0);
  const [height, setHeight] = useState(score)
  const [percentage, setPercentage] = useState();

  const ChangeSlide = (e) => {
    if (current < 7) {
      setCurrent(current + 1);
    }
    seti(i + 1);
    if (i < 8) setScore(score + e);
    console.log(score);
  };

  useEffect(() => {
    setHeight(score*2)
  }, [score])

  console.log("Question is", Questions.Questions[current])

    return (
      <div className="trl-page">
        <div className="thermometer">
          <h1 className="heading">{score}</h1>

          <img src={thermometer} alt="" />
          <div className="line" style={{ height: `${height}px` }}></div>
        </div>

        <div className="questions">
          <QuestionSlide
            question={Questions.Questions[current]}
            changeSlide={ChangeSlide}
          />
        </div>
      </div>
    );
}

export default TRLpage;
