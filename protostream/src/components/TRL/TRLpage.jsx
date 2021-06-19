import React, {useState, useEffect} from 'react'
import QuestionSlide from './components/QuestionSlide'
import Results1 from "./Results1";
import Results2 from "./Results2";
import Results3 from "./Results3";
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
    console.log("current", current)
    seti(i + 1);
    if (i < 8) setScore(score + e);
    console.log(score);
  };

  const showResult = () => {
    if(percentage <= 40)
      return <Results1 />
    else if( percentage > 40 && percentage < 70 )
      return <Results2 />
    else
      return <Results3 />
  }

  useEffect(() => {
    setHeight(score*2)
    setPercentage(score*100/240)
    console.log(percentage)
  }, [score])

  console.log("Question is", Questions.Questions[current])

    return (
      <div className="trl-page">
        {i == 8 ? (
          showResult()
        ) : (
          <>
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
          </>
        )}
      </div>
    );
}

export default TRLpage;
