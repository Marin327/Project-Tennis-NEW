import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MatchResults = () => {
  const [results, setResults] = useState([
    { id: 1, team1: 'Team A', team2: 'Team B', score: '2 - 1', time: '45\'' },
    { id: 2, team1: 'Team C', team2: 'Team D', score: '0 - 0', time: '30\'' },
    { id: 3, team1: 'Team E', team2: 'Team F', score: '1 - 2', time: '60\'' },
    { id: 4, team1: 'Team G', team2: 'Team H', score: '3 - 2', time: '75\'' },
    { id: 5, team1: 'Team I', team2: 'Team J', score: '1 - 1', time: '50\'' },
    { id: 6, team1: 'Team K', team2: 'Team L', score: '0 - 3', time: '80\'' },
    { id: 7, team1: 'Team M', team2: 'Team N', score: '4 - 1', time: '65\'' },
    { id: 8, team1: 'Team O', team2: 'Team P', score: '2 - 0', time: '85\'' },
  ]);

  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedResults = results.map(result => ({
        ...result,
        score: `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
        time: `${Math.floor(Math.random() * 90)}'`,
      }));
      setResults(updatedResults);
    }, 10000);

    return () => clearInterval(interval);
  }, [results]);

  const handleResultClick = id => {
    const result = results.find(result => result.id === id);
    setSelectedResult(result);
  };

  return (
    <div className="match-results-container">
      <h2>Match Results</h2>
      <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.id} onClick={() => handleResultClick(result.id)}>
              <td>{result.team1}</td>
              <td>{result.team2}</td>
              <td>{result.score}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedResult && (
        <div className="selected-result">
          <h3>Additional Information:</h3>
          <p>Team 1: {selectedResult.team1}</p>
          <p>Team 2: {selectedResult.team2}</p>
          <p>Score: {selectedResult.score}</p>
          <p>Time: {selectedResult.time}</p>
        </div>
      )}
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
}

export default MatchResults;