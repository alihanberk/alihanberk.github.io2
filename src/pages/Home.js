import React from 'react';
import { Typography } from 'antd';
import { DailyStickers } from 'components';

const Home = () => {
  return (
    <>
      <img src="https://cdn-images-1.medium.com/max/1200/1*posh7DaGCQA8Ku-qkxrdyQ.jpeg" alt="trendyol-tech" />
      <Typography.Title level={1}>sticker album</Typography.Title>
      <DailyStickers.Opener />
    </>
  )
}

export default Home;