import React from 'react'
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Person } from 'components';

const RightPage = () => {

  const team = useSelector(({ teams }) => teams.current);

  return (
    <div className="teams-page right">
      <Row gutter={40}>
        {
          team?.people.slice(3).map(person =>
            <Col key={person.id} xs={24} sm={8} className="tile">
              <Person data={person} />
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export default RightPage;