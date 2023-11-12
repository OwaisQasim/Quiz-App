import React, { useCallback, useState } from 'react'
import QUESTIONS from '../question.js'
import IMAGE from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx'


export default function Quiz() {
    const [userAnswers, setAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length

    // const shuffledAnswer = QUESTIONS[questionIndex].answers.slice()

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswers((prevAnswer) => {
            return [
                ...prevAnswer, selectedAnswer
            ]
        })
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsCompleted) {
        return (
            <div id='summary'>
                <img src={IMAGE} alt="" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }


    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer
                    key={activeQuestionIndex}
                    onTimeOut={handleSkipAnswer}
                    timeOut={10000}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={handleSelectAnswer}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

