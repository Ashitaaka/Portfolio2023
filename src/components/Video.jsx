import React from 'react'

const Video = ({ videoURL }) => {
    
  return (
    <video className="project_video " controls >
        <source src={videoURL} type="video/mp4"/>
    </video>
  )
}

export default Video