import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col p-4 text-left bg-gray-200 main-content">
      <h1>My Task Board</h1>
      <h2><small>Tasks to keep organised</small></h2>
      </div>

    </main>
  );
}
