"use client";

import { useState, useEffect } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeRemaining = (targetDate: Date): TimeRemaining => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function CountdownTimer() {
  // Set the target date to August 9th, 2025, at 00:00:00 (midnight)
  const targetDate = new Date("2025-08-09T00:00:00");
  const [time, setTime] = useState<TimeRemaining>(
    calculateTimeRemaining(targetDate)
  );
  const [registrationEnded, setRegistrationEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeRemaining(targetDate);
      setTime(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        setRegistrationEnded(true);
        clearInterval(timer);
      }
    }, 1000);

    // Initial check in case the date has already passed when component mounts
    if (targetDate.getTime() < new Date().getTime()) {
      setRegistrationEnded(true);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [targetDate]);

  if (registrationEnded) {
    return (
      <div className="text-xl md:text-2xl font-bold text-red-600 bg-white/80 backdrop-blur-sm p-4 rounded-lg mb-8 animate-fade-in-up animation-delay-700">
        Registration has ended!
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl mb-8 transform transition-all duration-1000 ease-out animate-fade-in-up animation-delay-700">
      {" "}
      {/* Removed bg-white/20 and backdrop-blur-sm and shadow-lg */}
      <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
        Registration Ends In:
      </h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-800">
            {time.days}
          </span>
          <span className="text-sm md:text-base text-blue-700">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-800">
            {time.hours}
          </span>
          <span className="text-sm md:text-base text-blue-700">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-800">
            {time.minutes}
          </span>
          <span className="text-sm md:text-base text-blue-700">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-800">
            {time.seconds}
          </span>
          <span className="text-sm md:text-base text-blue-700">Seconds</span>
        </div>
      </div>
    </div>
  );
}
