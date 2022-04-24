import React from 'react'
import { useSelector } from 'react-redux';

const Person = ({ data = {}, teamName = null }) => {

  const openedPersonIds = useSelector(({ stickers }) => stickers.openedPersonIds);

  return (
    <div className="person">
      <div className="person-image">
        {
          openedPersonIds.includes(data.id)
            ? <img src={data.imagePath} alt="person" />
            : <span>Blank Image</span>

        }
      </div>
      <div className="person-info">
        <p>{data.name}</p>
        {teamName && <p>{teamName}</p>}
        <p>{data.title}</p>
        <p>{data.experience}</p>
      </div>
    </div>
  )
}

export default Person;