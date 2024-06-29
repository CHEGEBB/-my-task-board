import React from 'react'
import '../sass/Do.scss'
import Docon from "../images/Done_round.svg"
import Image from 'next/image'

export default function Do() {
  return (
    <div className="do-main">
      <div className="done">
        <div className="p-3 ml-3 bg-white do-icon-container rounded-xl">
          <h1>📚</h1>
        </div>
        <div className="do-progress">
        <h1>Task To Do</h1>
        </div>
      </div>
      <div className="flex justify-end p-2 mr-3 rounded-xl do">
        <Image src={Docon} alt="Do Icon" width={30} quality={100} />
      </div>
    </div>
  )
}
