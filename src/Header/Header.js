import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaFutbol, FaHome, FaNewspaper, FaPhoneAlt, FaUsers } from 'react-icons/fa';
import "../App.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/"><FaHome /> Home</a></li>
                    <li><a href="/News"><FaNewspaper /> News</a></li>
                    <li><a href="/Players"><FaUsers /> Players</a></li>
                    <li><a href="/TennisCourtList"><FaFutbol /> Tennis Courts</a></li>
                    <li><a href="/TournamentsCalendar"><FaCalendarAlt /> Tournament Calendar</a></li>
                    <li><a href="/MatchResults"><FaClipboardList /> Match Results</a></li>
                    <li><a href="/Contact"><FaPhoneAlt /> Contact</a></li>
                    <li><a href="/training"><FaClipboardList /> Training and Coaching</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;