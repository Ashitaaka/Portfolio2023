import React, { useEffect } from 'react'

const Video = ({ videoURL }) => {
    
  useEffect(() => {
    // Update video source when the videoURL prop changes
    const videoElement = document.getElementById('video-player');
    videoElement.src = videoURL;
  }, [videoURL]);
  
  return <video id="video-player" className="project_video " autoPlay controls />

  
}

export default Video