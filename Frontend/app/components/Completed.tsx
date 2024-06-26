import React from 'react'
import '../sass/Completed.scss'
import Completedcon from '../images/Done_round_duotone.svg'
import Image from 'next/image'

export default function Completed() {
  return (
    <div className="completed-main">
      <div className="comp">
      <div className="p-3 ml-3 bg-white rounded-xl completed-icon-container">
          <h1>🏋️‍♂️</h1>
        </div>
        <div className="completed-progress">
        <h1>Task Completed</h1>
        </div>
     
        </div>
        <div className="flex justify-end p-2 mr-3 rounded-xl completed">
          <Image src={Completedcon} alt="Completed Icon" width={30} quality={100} />
        </div>
    </div>
  )
}
