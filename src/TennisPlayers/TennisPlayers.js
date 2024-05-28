import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TennisPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    { id: 1, name: 'Rafael Nadal', country: 'Spain', age: 35, rank: 2, cups: 20, tournaments: 70, lastTournamentPrize: '100,000$', isInjured: false, totalTournamentWinnings: '5,000,000$' },
    { id: 2, name: 'Novak Djokovic', country: 'Serbia', age: 34, rank: 1, cups: 18, tournaments: 75, lastTournamentPrize: '150,000$', isInjured: true, totalTournamentWinnings: '6,500,000$' },
    { id: 3, name: 'Daniil Medvedev', country: 'Russia', age: 25, rank: 3, cups: 10, tournaments: 60, lastTournamentPrize: '80,000$', isInjured: false, totalTournamentWinnings: '3,200,000$' },
    { id: 4, name: 'Alexander Zverev', country: 'Germany', age: 24, rank: 6, cups: 5, tournaments: 55, lastTournamentPrize: '70,000$', isInjured: false, totalTournamentWinnings: '2,800,000$' },
    { id: 5, name: 'Dominic Thiem', country: 'Austria', age: 27, rank: 4, cups: 15, tournaments: 65, lastTournamentPrize: '90,000$', isInjured: true, totalTournamentWinnings: '4,500,000$' },
    { id: 6, name: 'Stefanos Tsitsipas', country: 'Greece', age: 23, rank: 5, cups: 8, tournaments: 50, lastTournamentPrize: '110,000$', isInjured: false, totalTournamentWinnings: '3,000,000$' },
    { id: 7, name: 'Andrey Rublev', country: 'Russia', age: 23, rank: 8, cups: 7, tournaments: 45, lastTournamentPrize: '75,000$', isInjured: false, totalTournamentWinnings: '2,600,000$' },
    { id: 8, name: 'Matteo Berrettini', country: 'Italy', age: 25, rank: 10, cups: 4, tournaments: 40, lastTournamentPrize: '60,000$', isInjured: false, totalTournamentWinnings: '2,000,000$' },
    { id: 9, name: 'Diego Schwartzman', country: 'Argentina', age: 28, rank: 9, cups: 6, tournaments: 48, lastTournamentPrize: '85,000$', isInjured: true, totalTournamentWinnings: '2,400,000$' },
    { id: 10, name: 'Andre Agassi', country: 'USA', age: 51, rank: 50, cups: 60, tournaments: 120, lastTournamentPrize: '200,000$', isInjured: false, totalTournamentWinnings: '7,000,000$' },
    { id: 11, name: 'Pete Sampras', country: 'USA', age: 50, rank: 55, cups: 40, tournaments: 110, lastTournamentPrize: '180,000$', isInjured: false, totalTournamentWinnings: '6,500,000$' },
    { id: 12, name: 'Bjorn Borg', country: 'Sweden', age: 65, rank: 70, cups: 30, tournaments: 90, lastTournamentPrize: '150,000$', isInjured: true, totalTournamentWinnings: '5,000,000$' },
    { id: 13, name: 'Jimmy Connors', country: 'USA', age: 68, rank: 80, cups: 25, tournaments: 80, lastTournamentPrize: '140,000$', isInjured: false, totalTournamentWinnings: '4,800,000$' },
    { id: 14, name: 'Stefan Edberg', country: 'Sweden', age: 55, rank: 85, cups: 20, tournaments: 70, lastTournamentPrize: '120,000$', isInjured: false, totalTournamentWinnings: '4,300,000$' },
    { id: 15, name: 'Andy Murray', country: 'United Kingdom', age: 34, rank: 95, cups: 15, tournaments: 60, lastTournamentPrize: '110,000$', isInjured: true, totalTournamentWinnings: '3,700,000$' },
    { id: 16, name: 'Roger Federer', country: 'Switzerland', age: 40, rank: 20, cups: 103, tournaments: 180, lastTournamentPrize: '200,000$', isInjured: false, totalTournamentWinnings: '9,000,000$' },
    { id: 17, name: 'Andy Roddick', country: 'USA', age: 39, rank: 120, cups: 32, tournaments: 80, lastTournamentPrize: '80,000$', isInjured: true, totalTournamentWinnings: '3,700,000$' },
    { id: 18, name: 'Serena Williams', country: 'USA', age: 39, rank: 10, cups: 73, tournaments: 100, lastTournamentPrize: '150,000$', isInjured: false, totalTournamentWinnings: '8,000,000$' },
    { id: 19, name: 'Venus Williams', country: 'USA', age: 41, rank: 50, cups: 49, tournaments: 90, lastTournamentPrize: '120,000$', isInjured: true, totalTournamentWinnings: '5,600,000$' },
    { id: 20, name: 'Maria Sharapova', country: 'Russia', age: 34, rank: 80, cups: 36, tournaments: 70, lastTournamentPrize: '100,000$', isInjured: false, totalTournamentWinnings: '4,300,000$' },
    { id: 21, name: 'Naomi Osaka', country: 'Japan', age: 24, rank: 3, cups: 9, tournaments: 30, lastTournamentPrize: '250,000$', isInjured: false, totalTournamentWinnings: '2,000,000$' },
    { id: 22, name: 'Ashleigh Barty', country: 'Australia', age: 25, rank: 1, cups: 15, tournaments: 40, lastTournamentPrize: '300,000$', isInjured: true, totalTournamentWinnings: '6,500,000$' },
    { id: 23, name: 'Bianca Andreescu', country: 'Canada', age: 21, rank: 5, cups: 7, tournaments: 20, lastTournamentPrize: '200,000$', isInjured: false, totalTournamentWinnings: '3,000,000$' },
    { id: 24, name: 'Simona Halep', country: 'Romania', age: 30, rank: 2, cups: 22, tournaments: 60, lastTournamentPrize: '180,000$', isInjured: false, totalTournamentWinnings: '7,200,000$' },
    { id: 25, name: 'Garbiñe Muguruza', country: 'Spain', age: 28, rank: 6, cups: 14, tournaments: 50, lastTournamentPrize: '150,000$', isInjured: true, totalTournamentWinnings: '4,500,000$' },
    { id: 26, name: 'Aryna Sabalenka', country: 'Belarus', age: 23, rank: 4, cups: 11, tournaments: 40, lastTournamentPrize: '170,000$', isInjured: false, totalTournamentWinnings: '3,800,000$' },
    { id: 27, name: 'Daniil Medvedev', country: 'Russia', age: 25, rank: 3, cups: 12, tournaments: 50, lastTournamentPrize: '190,000$', isInjured: false, totalTournamentWinnings: '4,000,000$' },
    { id: 28, name: 'Dominic Thiem', country: 'Austria', age: 27, rank: 7, cups: 18, tournaments: 60, lastTournamentPrize: '210,000$', isInjured: true, totalTournamentWinnings: '5,700,000$' },
    { id: 29, name: 'Alexander Zverev', country: 'Germany', age: 24, rank: 8, cups: 10, tournaments: 55, lastTournamentPrize: '160,000$', isInjured: false, totalTournamentWinnings: '4,200,000$' },
    { id: 30, name: 'Stefanos Tsitsipas', country: 'Greece', age: 23, rank: 9, cups: 9, tournaments: 45, lastTournamentPrize: '175,000$', isInjured: false, totalTournamentWinnings: '4,100,000$' },
  ];

  const handlePlayerClick = (playerId) => {
    setSelectedPlayer(selectedPlayer === playerId ? null : playerId);
  };

  return (
    <div className="tennis-players-container">
      <h2>Tennis Tournament Players</h2>
      <div className="players-list">
        {players.map(player => (
          <div key={player.id} className="player-card" onClick={() => handlePlayerClick(player.id)}>
            <h3>{player.name}</h3>
            {selectedPlayer === player.id && (
              <div className="player-info active">
                <p><strong>Country:</strong> {player.country}</p>
                <p><strong>Age:</strong> {player.age}</p>
                <p><strong>Rank:</strong> {player.rank}</p>
                <p><strong>Cups:</strong> {player.cups}</p>
                <p><strong>Tournaments:</strong> {player.tournaments}</p>
                <p><strong>Last Tournament Prize:</strong> {player.lastTournamentPrize}</p>
                <p><strong>Currently Injured:</strong> {player.isInjured ? 'Yes' : 'No'}</p>
                <p><strong>Total Tournament Winnings:</strong> {player.totalTournamentWinnings}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/" className='back-button'>Back</Link>
    </div>
  );
}

export default TennisPlayers;