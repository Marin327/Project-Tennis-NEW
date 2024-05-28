import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TrainingSection = () => {
  return (
    <div>
      <div className="training-content">
        <div className="training-item">
          <h3>Video Tutorials</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=x3LJfVsxnQM">Tennis Lessons for Beginners by TennisUnleashed</a></li>
            <li><a href="https://www.youtube.com/watch?v=Euu8h6NB9dw">Tennis Lessons: Basic Strokes by Top Tennis Training</a></li>
            <li><a href="https://www.youtube.com/watch?v=ULyRGEmulOA">Tennis Lessons for Improving Mobility by Essential Tennis</a></li>
            <li><a href="https://www.youtube.com/watch?v=Ax6_eKjeWLA">Tennis Lessons: How to Play at the Net by Tennis Evolution</a></li>
            <li><a href="https://www.youtube.com/watch?v=6po9TXzd2-A">Tennis Lessons: Basic Tactics and Strategies by Feel Tennis Lessons</a></li>
          </ul>
        </div>
        <div className="training-item">
          <h3>Training Tips</h3>
          <ul>
            <li>Develop a regular training program and stick to it.</li>
            <li>Work on improving your physical fitness, including strength, endurance, and flexibility.</li>
            <li>Practice the fundamental strokes - serve, forehand, backhand, and volley.</li>
            <li>Use various exercises to develop hand-eye coordination and footwork.</li>
            <li>Play matches with partners of different skill levels to improve your game under real conditions.</li>
            <li>Focus on your technique and constantly improve it using video analysis and coaching tips.</li>
            <li>Practice your serve regularly and work on its accuracy and power.</li>
            <li>Learn tactics and strategies for playing in different situations - at the net, from the baseline, and on serve.</li>
            <li>Don't forget to practice the mental aspect of the game - concentration, handling stress, and managing emotions.</li>
            <li>Never stop learning and improving your game by exploring new techniques and strategies.</li>
          </ul>
        </div>
      </div>
      <div>
        <Link to="/" className="back-button">Back</Link>
      </div>
    </div>
  );
}

export default TrainingSection;