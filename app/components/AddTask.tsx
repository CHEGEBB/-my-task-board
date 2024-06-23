// components/AddTask.tsx
import React from "react";
import Addcon from "../images/Add_round_duotone.svg";
import Image from "next/image";
import "../sass/Add.scss";

type AddTaskProps = {
  onClick: () => void; // Define onClick prop as a function that takes no arguments and returns void
};

const AddTask: React.FC<AddTaskProps> = ({ onClick }) => {
  return (
    <div className="add-main">
      <div className="add-cont" onClick={onClick} style={{ cursor: "pointer" }}>
        <div className="p-3 ml-3 rounded-xl add-icon-container">
          <Image src={Addcon} alt="Add Icon" width={30} quality={100} />
        </div>
        <div className="add-progress">
          <h1>Add new task</h1>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
