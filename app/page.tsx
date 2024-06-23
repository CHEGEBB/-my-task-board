import Image from "next/image";
import Progress from "./components/Progress";
import Completed from "./components/Completed";
import Wont from "./components/Wont";
import Do from "./components/Do";
import AddTask from "./components/AddTask";
import Logo from "./images/logo.svg";
import Edit from "./images/Edit_duotone.svg";
import CreateTask from "./components/CreateTask";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="container">
      <div className=" main-content">
        <div className="header">
          <div className="logo">
            <Image
              src={Logo}
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div className="content-app">
          <h1>My Task Board</h1>
          <h2><small>Tasks to keep organised</small></h2>
          </div>
          <div className="edit">
            <Image
              src={Edit}
              alt="edit"
              width={50}
              height={50}
            />
          </div>
       
      
        </div>
     
      <div className="actions">

      <div className="progress">
        <Progress />
      </div>
      <div className="completed">
        <Completed />
      </div>

      <div className="deffered">
        <Wont />
      </div>
      <div className="do">
        <Do />
      </div>
      <div className="add">
        <AddTask />
      </div>
      </div>
      </div>
      <div className="create-task">
        <CreateTask />
      </div>
      </div>

    </main>
  );
}
