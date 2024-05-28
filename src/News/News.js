import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NewsTraining = () => {
  const news = [
    { id: 1, title: 'New Coaching Team at "Tennis Academy"', content: 'A new coaching team starts work at the Tennis Academy, focusing on the development of young talents.' },
    { id: 2, title: 'Young Talent Discovered at International Junior Tournament', content: 'Bulgarian tennis player Peter Ivanov won the under-16 youth tournament in Vienna.' },
    { id: 3, title: 'Tennis Legend Back on Court After Health Issues', content: 'After a long break due to health issues, Rafael Nadal returns to the tennis courts with new enthusiasm.' },
    { id: 4, title: 'Surprising Results at Professional Tournament', content: 'At the latest Grand Slam tournament in Melbourne, unknown tennis player James Smith managed to reach the quarter-finals, defeating several of the biggest names in the sport.' },
    { id: 5, title: 'French Open Starts Next Week', content: 'One of the most prestigious tennis tournaments begins next week in Paris. Expect incredible matches and surprises.' },
    { id: 6, title: 'New Tennis Club Opens in the Capital', content: 'With the newly opened "Tennis Expert" club, every tennis fan will be able to train and compete on high-quality modern courts.' },
    { id: 7, title: 'Bulgarian Tennis Player Wins First Tournament on Clay', content: 'At the tournament in Monte Carlo, Martin Ivanov won first place, overcoming the competition and surprising everyone.' },
    { id: 8, title: 'New Tennis Club in Germany Hosts International Tournament', content: 'With the opening of the "Tennis Focus" club in Berlin, Germany becomes a center of tennis in Europe.' },
    { id: 9, title: 'Record Number of Spectators at Tennis Match in Madrid', content: 'Over 50,000 spectators attended the final of the tournament in Madrid, the highest number of spectators in the tournament\'s history.' },
    { id: 10, title: 'Tennis Star Returns to Court After Injury', content: 'After months of recovery, Simona Halep is ready to return to the court and continue showcasing her class.' },
  ];

  return (
    <div className="news-training-container">
      <h2>Tennis News</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-button-container">Back</Link>
    </div>
  );
}

export default NewsTraining;