import React, { useEffect, useState } from 'react'

export default function ({ onTimeOut, timeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOut)

    useEffect(() => {
        console.log('setTimeOut')
        const timer = setTimeout(onTimeOut, timeOut);

        return () => {
            clearTimeout(timer)
        }

    }, [onTimeOut, timeOut])

    useEffect(() => {
        console.log('setInterval')
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <progress
            id='question-time'
            value={remainingTime}
            max={timeOut}
        />
    )
}
