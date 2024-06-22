import React from 'react'
import '../sass/Def.scss'
import Wontcon from "../images/close_ring_duotone-1.svg"
import Image from 'next/image'

export default function Wont() {
  return (
    <div className="wont-main">
      <div className="wont-cont">
        <div className="p-3 ml-3 bg-white rounded-xl wont-icon-container">
          <h1>☕</h1>
        </div>
        <div className="wont-progress">
        <h1>Task Wont Do</h1>
        </div>
      </div>
      <div className="flex justify-end p-2 mr-3 rounded-xl wont">
        <Image src={Wontcon} alt="Wont Icon" width={30} quality={100} />
      </div>
        
    </div>
  )
}
