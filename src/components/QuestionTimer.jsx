import React, { useEffect, useState } from 'react'

export default function ({ onTimeOut, timeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOut)

    useEffect(() => {
        setTimeout(onTimeOut, timeOut);
    }, [onTimeOut, timeOut])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
    }, [])

    return (
        <progress
            id='question-time'
            value={remainingTime}
            max={timeOut}
        />
    )
}
