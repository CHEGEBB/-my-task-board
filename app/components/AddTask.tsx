import React from "react";
import Addcon from "../images/Add_round_duotone.svg";
import Image from "next/image";
import "../sass/Add.scss";

export default function AddTask() {
  return (
    <div className="add-main">
      <div className="add-cont">
        <div className="p-3 ml-3 rounded-xl add-icon-container">
          <Image src={Addcon} alt="Add Icon" width={30} quality={100} />
        </div>
        <div className="add-progress">
          <h1>Add new task</h1>
        </div>
      </div>
    </div>
  );
}
