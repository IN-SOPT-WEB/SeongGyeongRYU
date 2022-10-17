import React from "react";
import { useState } from "react";

export default function ClockExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      지금 시간은 몇시?
      <p>{time}</p>
    </div>
  );
}
