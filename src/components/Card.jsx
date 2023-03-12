import React from 'react'
import image from "../assets/react.png"

const Card = ({name, topic, repoName}) => {
  return (
    <div className='card w-4/12 shadow-lg p-3 hover:scale-105 transition-all duration-75'>
        <a href={`https://github.com/alan-thomas-shaji/${repoName}`} target="_blank">
          <div className="card flex justify-center bg-transparent">
            <div className="card-image">
                <img src={image} className='rounded-full' alt={name} width="300px" />
            </div>
            <div className="card-details m-4 text-left">
                <div className="card-name text-lg font-bold"> 
                  <span className='text-xl text-white'>Project:</span> 
                  <span className='text-purple px-1'>{name}</span>
                </div>
                <div className="card-role text-lg-bold text-white"> <span>Things included:</span> {topic}</div>
            </div>
          </div>
        </a>
    </div>
  )
}

export default Card