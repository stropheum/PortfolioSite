import React, {Component} from 'react';
import LogoGrid from "./LogoGrid";
import GithubCalendar from "./GithubCalendar";

export class Home extends Component {
    static displayName = this.name;

    render() {
        return (
            <div>
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '900', margin: '0', lineHeight: '1' }}>DALE DIAZ</h1>
                    <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: '0', lineHeight: '1', color: 'var(--accent-color)' }}>CODE IS MY BRUSH</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '2rem', maxWidth: '600px' }}>
                        Senior Game Programmer | Unity Expert | Polymath | Lifetime Learner
                    </p>
                </div>

                <div className="card">
                    <h1>About Me</h1>
                    <p>
                        I’m a game programmer who thrives at the intersection of art, science, and problem-solving.
                        My academic journey began in sound recording technology, where I explored the rich interplay between
                        mathematics and music.
                        My fascination with sound processing and data visualization led me to shift gears, pursuing a dual
                        major in computer science and mathematics.
                        This blend of creativity and logic has shaped how I approach every challenge.
                    </p>

                    <p>
                        At Florida Interactive Entertainment Academy, I was privileged to be one of 20 programmers in Cohort
                        13.
                        The competitive and collaborative environment forced us all to grow in ways I couldn’t have
                        imagined, exchanging ideas and pushing one another to achieve excellence.
                        That mindset continues to drive me as I explore areas like machine learning, AI, UI/UX, procedural
                        programming, and signal processing.
                    </p>

                    <p>
                        With a deep mastery of Unity and proficiency in C# and C++, I’m comfortable tackling complex
                        technical problems, often stepping into roles others find daunting.
                        Whether refining legacy systems or building innovative tools, I strive to deliver solutions that
                        elevate projects and empower my team to grow and succeed.
                        I bring curiosity, adaptability, and a passion for creating games that marry technical precision
                        with creative vision.
                    </p>
                </div>
                <div className="card">
                    <h1>Github Activity</h1>
                    <GithubCalendar username="Stropheum" />
                </div>
                <div className="card">
                    <h1>Credited Titles</h1>
                    <LogoGrid/>
                </div>
            </div>
        );
    }
}
