import React from 'react'

const DevStamp = () => {
  return (
    <div className='dev-stamp'>
        <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="circlePath"
                fill="none"
                d="
                M 10, 50
                a 40,40 0 1,1 80,0
                40,40 0 1,1 -80,0
                "
            />
            <text id="stamp-text" fill="#e26b6b" font-size="10">
                <textPath 
                    href="#circlePath"
                    textLength={Math.floor(Math.PI * 2 * 40)}
                >
                    DEVELOPPEUR WEB - DEVELOPPEUR WEB -
                </textPath>
            </text>
        </svg>
    </div>
  )
}

export default DevStamp