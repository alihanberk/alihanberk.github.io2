import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { Person } from 'components';
import { useSelector } from 'react-redux';

const DailyStickersOpenedStickers = ({ pasteAlbumCallback, openedPersonIdsFromSticker }) => {

  const
    openedPersons = useSelector(({ teams }) => {
      const people = [];

      for (const personId of openedPersonIdsFromSticker) {
        teams.list.forEach(team => {

          const teamName = team.name;

          if (team.teamLead.id === personId)
            people.push({ ...team.teamLead, teamName });

          else if (team.productOwner.id === personId)
            people.push({ ...team.productOwner, teamName });

          else {
            const person = team.people.find(x => x.id === personId)
            person && people.push({ ...person, teamName });
          }

        });
      }
      return people;
    }),

    onPasteAlbum = () => {
      pasteAlbumCallback();
    };


  return (
    <div className="daily-sticker__opened">
      <Typography.Title level={3}>Sticker set has opened you have 6 new stickers</Typography.Title>

      <Row gutter={30} justify="center">
        {
          openedPersons.map(person =>
            <Col xs={24} sm={4} key={person.id}>
              <Person data={person} teamName={person.teamName} />
            </Col>
          )
        }
      </Row>

      <Button onClick={onPasteAlbum}>Paste to your album</Button>
    </div>
  )
}

export default DailyStickersOpenedStickers