import React from "react";
import "../sass/Progress.scss";
import Alarmcon from "../images/Time_atack_duotone.svg";
import Image from "next/image";

export default function Progress() {
  return (
    <div className="progress-main">
      <div className="prog">
      <div className="progress-icon-container">
        <h1>⏰</h1>
      </div>
      <div className="content-progress">
        <h1>Task in Progress</h1>
      </div>
      </div>
      <div className="progress">
        <Image src={Alarmcon} alt="Alarm Icon" width={30} quality={100} />
      </div>
    </div>
  );
}
