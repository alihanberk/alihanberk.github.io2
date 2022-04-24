import React from 'react'
import { useLocation } from 'react-router-dom'

const StickerAlbum = ({ children }) => {

  const { pathname } = useLocation();

  return (
    <div className="sticker-album">
      <div className={`sticker-album__wrapper ${pathname === "/" ? "home" : "album"}`}>
        {children}
      </div>
    </div>
  )
}

export default StickerAlbum