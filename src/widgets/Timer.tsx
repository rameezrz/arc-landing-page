import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="text-center">
        <div className="bg-white p-4 rounded-lg shadow-md text-3xl font-mono">
          {timeLeft[interval].toString().padStart(2, "0")}
        </div>
        <div className="mt-2 text-gray-500">
          {interval.charAt(0).toUpperCase() + interval.slice(1)}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-between">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Timer;
