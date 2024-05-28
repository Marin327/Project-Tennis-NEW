import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Home from './Home/Home';
import MatchResults from './MatchResults/MatchResults';
import News from './News/News';
import NewsDetails from './NewsDetails/NewsDetails';
import ReservationForm from './ReservationForm/ReservationForm';
import TennisCourt from './TennisCourt/TennisCourt';
import TennisCourtList from './TennisCourtList/TennisCourtList';
import TennisPlayers from './TennisPlayers/TennisPlayers';
import TournamentDetails from './TournamentDetails/TournamentDetails';
import TournamentsCalendar from './TournamentsCalendar/TournamentsCalendar';
import TrainingSection from './TrainingSection/TrainingSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/tournamentscalendar" element={<TournamentsCalendar />} />
          <Route path="/tournament/:id" element={<TournamentDetails />} />
          <Route path="/matchresults" element={<MatchResults />} />
          <Route path="/players" element={<TennisPlayers />} />
          <Route path="/tenniscourt" element={<TennisCourt />} />
          <Route path="/tenniscourtlist" element={<TennisCourtList />} />
          <Route path="/training" element={<TrainingSection />} />
          <Route path="/reservation" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;