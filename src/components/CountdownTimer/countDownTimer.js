import React, { useState, useEffect } from 'react';
import styles from './CountDownTimer.module.css'

export default function CountdownTimer({ minutes }) {
  const [time, setTime] = useState({
    minutes: minutes,
    seconds: 0,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(timerInterval); 
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return {
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              minutes: prevTime.minutes,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [time]);

  return (
    <div className={styles.timer} id='countdown_timer'>
        {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
    </div>
  );
}