import React, {useState} from 'react'
import Whitebox from './Whitebox'
import Card from './Card'


function QuestionSlide({question, changeSlide}) {
  // const [current, setCurrent] = useState(0)
  // const [i, seti] = useState(0)
  // const [score, setScore] = useState(0)

  // const ChangeSlide = (e) => {
  //   if(current < 7){
  //     setCurrent(current + 1);
  //     console.log(questions[current])
  //   }
  //   seti(i+1)
  //   console.log("i :",i)
  //   if(i < 8)
  //     setScore(score + e);

  //   console.log(score)
  // }
    return (
      <Whitebox>
        <div className="main-container">
          {/* <div className="question">
            <h1 className="Question">{questions[current].Question}</h1>
            <p className="sub-head">{questions[current].info}</p>
            <h1 className="Question">{score}</h1>
          </div>
          <div className="Answers-section">
            {questions[current].Answers.map((ans) => (
              <Card
                heading={ans.answer}
                text={ans.info}
                value={ans.value}
                change={ChangeSlide}
              />
            ))}
          </div> */}
          <div className="question">
            <h1 className="Question">{question.Question}</h1>
            <p className="sub-head">{question.info}</p>
            {/* <h1 className="Question">{score}</h1> */}
          </div>
          <div className="Answers-section">
            {question.Answers.map((ans) => (
              <Card
                heading={ans.answer}
                text={ans.info}
                value={ans.value}
                change={changeSlide}
              />
            ))}
          </div>
        </div>
      </Whitebox>
    );
}

export default QuestionSlide
