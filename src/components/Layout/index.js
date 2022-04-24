import React from 'react'
import Pagination from './Pagination';
import StickerAlbum from './StickerAlbum';

const Layout = ({ children }) => (
  <div className="layout">
    <Pagination>
      <StickerAlbum>
        {children}
      </StickerAlbum>
    </Pagination>
  </div>
);

export default Layout;