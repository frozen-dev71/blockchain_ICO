import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const AnimatedProgressBar = ({ startTime, endTime }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const elapsedTime = now.getTime() - startTime.getTime();
      const totalTime = endTime.getTime() - startTime.getTime();
      const percentage = (elapsedTime / totalTime) * 100;
      setPercentage(percentage);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return <ProgressBar percentage={percentage} />;
};

export default AnimatedProgressBar;