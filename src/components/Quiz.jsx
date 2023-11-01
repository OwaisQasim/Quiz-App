import React, { useState } from 'react'
import QUESTIONS from '../question.js'


export default function Quiz() {
    const [answers, setAnswers] = useState([])
    const questionIndex = answers.length

    // const shuffledAnswer = QUESTIONS[questionIndex].answers.slice()
    const shuffledAnswer = [...QUESTIONS[questionIndex].answers]
    shuffledAnswer.sort(() => Math.random() - 0.5)

    function handleClick(selectedAnswer) {
        setAnswers((prevAnswer) => {
            return [
                ...prevAnswer, selectedAnswer
            ]
        })
    }
    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{QUESTIONS[questionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswer.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={handleClick}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


// import React, { useState } from 'react'
// import QUESTIONS from '../question.js'

// export default function Quiz() {
//     const [userAnswers, setUserAnswers] = useState([])
//     const activeQuestionIndex = userAnswers.length

//     function handleSelectAnswer(selectedAnswer) {
//         setUserAnswers((prevUserAnswers) => {
//             return [
//                 ...prevUserAnswers, selectedAnswer
//             ]
//         })
//     }
//     return (
//         <div id='quiz'>
//             <div id='question'>
//                 <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
//                 <ul id='answers'>
//                     {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
//                         <li key={answer} className='answer'>
//                             <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

