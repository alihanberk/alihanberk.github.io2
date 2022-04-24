import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import DailyStickers from '.';
import { useSelector } from 'react-redux';

const DailyStickerOpener = () => {

  const
    [visible, setVisible] = useState(false),
    [isOpenSticker, setIsOpenSticker] = useState(false),
    [openedPersonIdsFromSticker, setOpenedPersonIdsFromSticker] = useState([]),
    stickersInfo = useSelector(({ stickers }) => stickers),
    hasOpenableSticker = stickersInfo.dailyAvailableStickerCount > 0 && (stickersInfo.lastOpenedDate === null || stickersInfo.lastOpenedDate === new Date().toDateString()),

    onOpenSticker = (currentOpenedPersonIdsFromSticker) => {
      setOpenedPersonIdsFromSticker(currentOpenedPersonIdsFromSticker)
      setIsOpenSticker(true)
    },

    onCloseModal = () => {
      setVisible(false);
      setIsOpenSticker(false);
    },

    pasteAlbumCallback = () => {
      if (hasOpenableSticker)
        setIsOpenSticker(false);
      else
        onCloseModal()
    };



  return (
    <div className="daily-sticker-sets">

      {
        hasOpenableSticker &&
        <Button onClick={() => setVisible(true)} className="open-modal-trigger" >Get Your Daily Stickers</Button>
      }

      <Modal
        title={null}
        footer={null}
        visible={visible}
        onCancel={onCloseModal}
        closeIcon={<></>}
        width={isOpenSticker ? "90%" : "55%"}
        maskClosable={!isOpenSticker}
      >
        <div className="daily-sticker-sets modal-content">
          {
            isOpenSticker
              ? <DailyStickers.OpenedStickers pasteAlbumCallback={pasteAlbumCallback} openedPersonIdsFromSticker={openedPersonIdsFromSticker} />
              : <DailyStickers.OpenableStickers onOpen={onOpenSticker} />
          }
        </div>
      </Modal>
    </div>
  )
}

export default DailyStickerOpener;