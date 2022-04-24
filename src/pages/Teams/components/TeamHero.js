
import { Typography } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';

const TeamHero = () => {

  const teamInfo = useSelector(({ teams }) => teams.current)

  return (
    <div className="team-hero">

      <div className="team-image">
        {
          teamInfo.logoPath
            ? <img src={teamInfo.logoPath} alt="team-logo" />
            : <span>Team Logo</span>

        }
      </div>

      <div className="texts">
        <Typography.Title level={2}>{teamInfo.name}</Typography.Title>
        <Typography.Title level={3}>{teamInfo.slogan}</Typography.Title>
        <p>{teamInfo.description}</p>
        <p>
          <span>#{teamInfo.slack?.channel} is our slack channel</span>
          <span>{teamInfo.slack?.mail} is our email address</span>
        </p>
      </div>

    </div>
  )
}

export default TeamHero;