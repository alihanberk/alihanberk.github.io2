import React from 'react';
import { Typography, Row, Col } from 'antd';
import DailyStickers from '.';
import { useSelector } from 'react-redux';

const DailyStickersOpenableStickers = ({ onOpen }) => {

  const dailyAvailableStickerCount = useSelector(({ stickers }) => stickers.dailyAvailableStickerCount);

  return (
    <>
      <Typography.Title level={3}>Daily Sticker Sets</Typography.Title>
      <Typography.Title level={3}>You Have {dailyAvailableStickerCount} Sticker Sets To Open</Typography.Title>

      <Row gutter={30} justify="center">
        {
          [...Array(dailyAvailableStickerCount)].map((x, i) =>
            <Col xs={24} sm={24 / dailyAvailableStickerCount} key={i}>
              <DailyStickers.Item onOpen={onOpen} />
            </Col>
          )
        }
      </Row>
    </>
  )
}

export default DailyStickersOpenableStickers