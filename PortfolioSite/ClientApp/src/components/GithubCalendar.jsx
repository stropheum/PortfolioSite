import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import "./GithubCalendar.css";

const GitHubCalendarComponent = ({ username }) => {
    // Custom theme for version 5+
    const theme = {
        dark: [
            '#1a1a1a', // level 0 (background-light)
            'rgba(var(--accent-rgb), 0.2)',
            'rgba(var(--accent-rgb), 0.4)',
            'rgba(var(--accent-rgb), 0.7)',
            'var(--accent-color)', // level 4
        ],
    };

    return (
        <div className="github-calendar-wrapper">
            <GitHubCalendar 
                username={username}
                theme={theme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                showWeekdayLabels
            />
        </div>
    );
};

export default GitHubCalendarComponent;
