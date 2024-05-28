import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TournamentDetails from '../TournamentDetails/TournamentDetails';

const formatDate = (dateString) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const TournamentCalendar = () => {
  const tournaments = [
    { id: 1, date: '2024-01-10', name: 'Mutua Madrid Open', description: 'The Mutua Madrid Open is a professional tennis tournament held in Madrid, Spain. It is part of the ATP Tour Masters 1000 category and is one of the most prestigious competitions on clay courts.' },
    { id: 2, date: '2024-02-15', name: 'Open Parc Auvergne-Rhône-Alpes Lyon', description: 'The Open Parc Auvergne-Rhône-Alpes Lyon is a tennis tournament held in Lyon, France. It is a professional competition on clay courts that attracts high-quality players from around the world.' },
    { id: 3, date: '2024-03-06', name: 'Estoril Open', description: 'The Estoril Open is a tennis tournament held in Estoril, Portugal. It is part of the ATP Tour 250 category and attracts many top players competing for the title.' },
    { id: 4, date: '2024-04-08', name: 'Madrid Open', description: 'The Madrid Open is a professional tennis tournament held in Madrid, Spain. It is one of the most prestigious tournaments on clay courts and is part of the ATP Tour Masters 1000 category.' },
    // Add the remaining tournaments with their English translations
  ];

  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleTournamentClick = (tournament) => {
    setSelectedTournament(tournament);
  };

  return (
    <div className="tournament-calendar">
      <h2>Tennis Tournaments Calendar 2024</h2>
      <ul className='calendar-list'>
        {tournaments.map((tournament) => (
          <li key={tournament.id} onClick={() => handleTournamentClick(tournament)}>
            <div>
              <span className="tournament-date">{formatDate(tournament.date)}</span>
              <span className="tournament-name">{tournament.name}</span>
            </div>
            {selectedTournament && selectedTournament.id === tournament.id && (
              <TournamentDetails tournament={selectedTournament} />
            )}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <Link to='/' className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default TournamentCalendar;