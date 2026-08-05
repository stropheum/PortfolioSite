import React, { useState, useEffect, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import "./GithubCalendar.css";

const GitHubCalendarComponent = ({ username }) => {
    const [animKey, setAnimKey] = useState(0);
    const totalDurationRef = useRef(30000);
    
    const durationFactor = 2; // ms per level of contribution

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

    // Cycle the animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimKey(prev => prev + 1);
        }, 60000); // Recycle interval: once per minute
        
        return () => clearTimeout(timer);
    }, [animKey]);

    // Inject cumulative delays for strictly sequential animation
    const transformData = (data) => {
        let cumulativeDelay = 0;
        const transformed = data.map((day, index) => {
            const duration = (day.level + 1) * durationFactor;
            const delay = cumulativeDelay;
            cumulativeDelay += duration;
            return {
                ...day,
                index,
                calculatedDelay: delay,
                calculatedDuration: duration
            };
        });
        
        if (data.length > 0) {
            totalDurationRef.current = cumulativeDelay;
        }
        
        return transformed;
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
                transformData={transformData}
                renderBlock={(block, activity) => React.cloneElement(block, {
                    key: `${activity.date}-${animKey}`,
                    style: {
                        ...block.props.style,
                        "--target-color": block.props.fill,
                        animationDelay: `${activity.calculatedDelay}ms`,
                        animationDuration: `${activity.calculatedDuration}ms`
                    },
                    className: "calendar-block"
                })}
            />
        </div>
    );
};

export default GitHubCalendarComponent;
