import React from 'react';
import TennisCourt from '../TennisCourt/TennisCourt';

const courtsData = [
  {
    id: 1,
    name: 'Victory Court',
    price: '20 BGN',
    playTime: '1 hour',
    stadium: 'Stadium A',
    gameHour: '10:00 - 15:00',
    image: '/images/12.jpg',
  },
  {
    id: 2,
    name: 'Ace Court',
    price: '25 BGN',
    playTime: '1 hour and 30 m',
    stadium: 'Stadium B',
    gameHour: '11:00 - 16:30',
    image: '/images/60.jfif',
  },
  {
    id: 3,
    name: 'Elite Court',
    price: '30 BGN',
    playTime: '2 hours',
    stadium: 'Stadium C',
    gameHour: '12:30 - 18:30',
    image: '/images/88.jpg',
  },
  {
    id: 4,
    name: 'Swan Court',
    price: '20 BGN',
    playTime: '1 hour',
    stadium: 'Stadium D',
    gameHour: '10:00 - 18:00',
    image: '/images/17.png',
  },
  {
    id: 5,
    name: 'Australia Court',
    price: '25 BGN',
    playTime: '1 hour and 30 m',
    stadium: 'Stadium E',
    gameHour: '12:00 - 19:30',
    image: '/images/56.jfif',
  },
  {
    id: 6,
    name: 'Sea Court',
    price: '30 BGN',
    playTime: '2 hours',
    stadium: 'Stadium F',
    gameHour: '15:30 - 21:30',
    image: '/images/11.jpg',
  },
];

const TennisCourtsList = () => {
  return (
    <div className="tennis-courts-list">
      <h2>Tennis Courts</h2>
      <div className="courts-container">
        {courtsData.map((court) => (
          <TennisCourt
            key={court.id}
            name={court.name}
            price={court.price}
            playTime={court.playTime}
            stadium={court.stadium}
            gameHour={court.gameHour}
            image={court.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TennisCourtsList;