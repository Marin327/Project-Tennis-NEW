import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const newsData = [
  {
    id: 1,
    title: 'New Method for Improving Shots',
    content: 'A tennis expert has introduced a new training method that promises to improve players’ shots. This innovative approach combines new technologies and movement analysis, which can lead to significant improvements in players’ technique and efficiency.'
  },
  {
    id: 2,
    title: 'New Coach at Tennis Club "Champion"',
    content: 'Tennis Club "Champion" has announced a new addition to their coaching staff. Famous coach Janko Tipsarević will be available to the players, and is expected to contribute with his experience and knowledge to the development of talented tennis players.'
  },
  {
    id: 3,
    title: 'Tennis Tournament in Paris Starts Next Week',
    content: 'One of the most anticipated tennis tournaments of the season starts next week in Paris. The world’s tennis stars are already preparing for this major sports event, where they will compete for the prestigious title and large prizes.'
  },
  {
    id: 4,
    title: 'Famous Player Withdraws from Upcoming Major Tournament',
    content: 'One of the leading players in the world of tennis has announced that they are withdrawing from the upcoming major tournament due to health issues. This will leave a significant gap in the competition, but also opens the door for new challenges for other players.'
  },
  {
    id: 5,
    title: 'New Club Competitive Season Starts with Many Challenges',
    content: 'The club competitive season starts with many challenges for tennis clubs worldwide. This season promises many exciting matches and competitions that will attract the attention of fans and test the skills of the players.'
  },
  {
    id: 6,
    title: 'Tennis Star Appointed as Face of New Advertising Campaign',
    content: 'One of the most popular tennis stars has been appointed as the face of a new advertising campaign for a world-renowned brand. This partnership promises to be mutually beneficial and introduce the player to a new audience.'
  },
  {
    id: 7,
    title: 'New Coaching Team at "Tennis Academy"',
    content: 'Tennis Academy has announced their new coaching team, which will work with young tennis players at the club. This team includes experienced coaches and mentors who will assist talented players in their preparation and development.'
  },
  {
    id: 8,
    title: 'Young Talent Discovered at International Junior Tournament',
    content: 'A young talent in the world of tennis was discovered at the latest international junior tournament. This player showed impressive skills and potential for development, making him one of the leading candidates for future tennis stars.'
  },
  {
    id: 9,
    title: 'Tennis Legend Back on Court After Health Issues',
    content: 'One of the greatest tennis legends has announced that they are ready to return to the court after a prolonged period of recovery from health issues. Fans are eagerly awaiting to see this great player return to the game and continue to impress with their skills.'
  },
  {
    id: 10,
    title: 'Surprising Results at Professional Tournament',
    content: 'The latest professional tennis tournament was full of surprises and unexpected results. Many favorites failed to reach the final, giving new and unexpected names the opportunity to rise to the top.'
  }
];

const NewsDetails = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News not found.</div>;
  }

  return (
    <div className="news-details-container">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content}</p>
      <div>
        <Link to="/news" className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default NewsDetails;