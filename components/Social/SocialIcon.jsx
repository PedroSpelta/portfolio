import React from 'react'

function SocialIcon({children}) {
  return (
    <div>
      <a className="w-14 h-14 hover:!pb-2 flex justify-center items-center" href="https://google.com">
        {children}
      </a>
    </div>
  )
}

export default SocialIcon
