import React from 'react'
import { Typography, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedPersonIds } from 'store/slices/stickers';
import { getRandomItemsInArray } from 'helpers';

const DailyStickerItem = ({ onOpen }) => {

  const
    dispatch = useDispatch(),

    { openedPersonIds, personIdList } = useSelector(({ teams, stickers }) => ({

      openedPersonIds: stickers.openedPersonIds,
      personIdList: (() => {
        const idList = [];
        teams.list.forEach(team => {
          idList.push(...[team.teamLead.id, team.productOwner.id, ...team.people.map(x => x.id)])
        })
        return idList;
      })(),
    })),

    onOpenSticker = () => {
      const personIds = getRandomItemsInArray({ count: 6, array: personIdList.filter(x => !openedPersonIds.includes(x)) });
      onOpen(personIds);
      dispatch(setOpenedPersonIds(personIds))
    };


  return (
    <div className='daily-sticker-item'>

      <div className="sticker-cover">
        <img src="assets/trendyol-tech.jpeg" alt="trendyol-tech" />
        <Typography.Title level={3}>Sticker Set</Typography.Title>
      </div>

      <Button onClick={onOpenSticker}>Open</Button>
    </div>
  )
}

export default DailyStickerItem;