"use client";

import moment from "moment-timezone";
import { FC, useEffect, useState } from "react";
interface LiveClockProps {
  timeZone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH-mm-ss");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className="text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span> {timeZone.split("/")[1]}</span> :<span> {time}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center">Loading....</div>
      )}
    </div>
  );
};

export default LiveClock;
