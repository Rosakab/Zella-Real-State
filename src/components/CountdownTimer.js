import { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 1 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className=" flex flex-col max-w-[900px] m-auto  pt-6">
      <div>
        <p className=" text-center xs:text-xs text-gray-600 font-bold md:text-4xl animate-pulse">
          Don't Miss Out
        </p>
        <p className=" text-center xs:text-xs text-gray-600 font-bold md:text-2xl  ">
          Limited-Time Offer
        </p>
      </div>

      <div className=" flex sm:w-[240px] md:w-full h-full justify-center">
        <div className="w-20 h-20 flex flex-col justify-around border-b-4 border-l-4  border-gray-400 shadow-lg px-3 py-2 m-4 rounded-lg bg-gray-600 text-gray-200">
          <span className="p-2 m-2 text-center font-bold text-md">
            {timerDays}
          </span>
          <span className="p-2 text-center font-bold text-[10px]">DAYS</span>
        </div>

        <div className=" w-20 h-20 flex flex-col border-b-4 border-l-4 justify-around border-gray-400 shadow-lg px-3 py-2 m-4 rounded-lg bg-gray-600 text-gray-200 ">
          <span className="p-2 m-2 text-center font-bold text-md">
            {timerHours}
          </span>
          <span className="p-2 text-center font-bold text-[10px]">HOURS</span>
        </div>

        <div className=" w-20 h-20 flex flex-col justify-around border-b-4 border-l-4 border-gray-400 shadow-lg px-3 py-2 m-4 rounded-lg bg-gray-600 text-gray-200 ">
          <span className="p-2  m-2 text-center font-bold text-md">
            {timerMinutes}
          </span>
          <span className="p-2 text-center font-bold text-[10px]">MINUTES</span>
        </div>

        <div className=" w-20 h-20 flex flex-col justify-around border-b-4 border-l-4 border-gray-400 shadow-lg px-3 py-2 m-4 rounded-lg bg-gray-600 text-gray-200 ">
          <span className="p-2 m-2 text-center font-bold text-md">
            {timerSeconds}
          </span>
          <span className="p-2 text-center font-bold text-[10px]">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;