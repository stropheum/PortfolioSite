import React from 'react';
import "./GithubCalendar.css";

const GitHubCalendar = ({ username, backgroundColor = '#282c34', textColor = '#ffffff', titleColor = '#ff6347' }) => {
    const calendarUrl = `https://ghchart.rshah.org/${username}`;
    
    const containerStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
    };
    
    const titleStyle = {
        color: titleColor,
        fontFamily: 'Arial, sans-serif',
    };
    
    const calendarContainer = "github-calendar-container";
    const calendarTitle = "github-calendar-title";
    const calendarImage = "github-calendar-image";

    return (
        <div className={calendarContainer}>
            <h2 className={calendarTitle}></h2>
            <img className={calendarImage} src={calendarUrl} alt="GitHub Contributions Calendar" />
        </div>
    );
};

export default GitHubCalendar;
