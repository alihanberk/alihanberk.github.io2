import React from 'react'
import { Row, Col } from 'antd';
import TeamHero from '../TeamHero';
import { useSelector } from 'react-redux';
import { Person } from 'components';

const LeftPage = () => {

  const team = useSelector(({ teams }) => teams.current);

  return (
    <div className="teams-page left">

      <TeamHero />

      <Row gutter={40} justify="center">

        <Col xs={24} sm={12} className="tile">
          <Person data={team?.teamLead} />
        </Col>

        <Col xs={24} sm={12} className="tile">
          <Person data={team?.productOwner} />
        </Col>

        {
          team?.people.slice(0, 3).map(person =>
            <Col key={person.id} xs={24} sm={8} className="tile">
              <Person data={person} />
            </Col>
          )
        }
        
      </Row>
    </div>
  )
}

export default LeftPage;