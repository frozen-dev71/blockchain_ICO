import React from "react";
import { useNavigate } from "react-router-dom";

import Circle from "../components/Circle";
import AnimatedProgressBar from "../components/AnimatedProgressBar";

const startTime = new Date("2023-05-09T14:00:00");
// const startTimeYear = startTime.getFullYear();
// const startTimeMonth = startTime.getMonth();
// const startTimeDate = startTime.getDate();
// const startTimeHours = startTime.getHours();
// const startMinutes = startTime.getMinutes();
const endTime = new Date("2023-05-19T20:00:00");
// const endTimeYear = endTime.getFullYear();
// const endTimeMonth = endTime.getMonth();
// const endTimeDate = endTime.getDate();
// const endTimeHours = endTime.getHours();
// const endMinutes = endTime.getMinutes();

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="md:ml-6 md:flex md:h-[80vh] md:items-center">
      <div className="flex justify-center items-center w-full">
        {/* <div className="startTime" style = {{marginTop: "50px", width: "230px"}}>start: {startTimeYear}/{startTimeMonth + 1}/{startTimeDate} {startTimeHours}:{startMinutes}</div> */}
        <AnimatedProgressBar  
          startTime={startTime} 
          endTime={endTime} 
        />
        {/* <div className="endTime" style = {{marginTop: "50px", width: "230px"}}>end: {endTimeYear}/{endTimeMonth + 1}/{endTimeDate} {endTimeHours}:{endMinutes}</div> */}
      </div>

      <div className="flex justify-center items-center w-full">
        {/* ICO Details */}

        <div className="flex flex-col w-full items-center md:mr-5">
          <div className="card mt-4">
            <div className="text-2xl text-center p-4">ICO Details</div>
          </div>
          <Circle />
          <div className="btn m-4" onClick={() => navigate("/token")}>
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
