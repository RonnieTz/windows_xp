import { useEffect, useState } from 'react';

export const useDateTime = () => {
  const getDate = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const fullTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    const date = new Date().toDateString();
    return { fullTime, date };
  };

  const newDate = getDate();

  const [time, setTime] = useState(newDate.fullTime);
  const [date, setDate] = useState(newDate.date);
  useEffect(() => {
    const interval = setInterval(() => {
      const { fullTime, date } = getDate();
      setTime(fullTime);
      setDate(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, date };
};
