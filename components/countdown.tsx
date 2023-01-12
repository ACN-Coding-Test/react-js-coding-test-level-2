import React, { useState, useEffect } from 'react'

interface CountdownProps {
  time: number
}

const Countdown: React.FC<CountdownProps> = ({ time }) => {
  const [seconds, setSeconds] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)

    if (seconds === 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [seconds])

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className="ml-4 flex items-center justify-center text-white">
      <div className="flex h-9 w-10 items-center justify-center rounded-sm bg-red-600">
        {hours}
      </div>
      <div className="px-2 text-sm text-gray">:</div>
      <div className="flex h-9 w-10 items-center justify-center rounded-sm bg-red-600">
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <div className="px-2 text-sm text-gray">:</div>
      <div className="flex h-9 w-10 items-center justify-center rounded-sm bg-red-600">
        {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
      </div>
    </div>
  )
}

export default Countdown
