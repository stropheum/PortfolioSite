import React, {Component} from 'react';
import LogoGrid from "./LogoGrid";
import GithubCalendar from "./GithubCalendar";
import Typewriter from "./Typewriter";
import './Samples.css';

export class Home extends Component {
    static displayName = "Home";

    render() {
        return (
            <div className="home-layout">
                <div className="home-main-col">
                    <div style={{ marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', margin: '0', lineHeight: '1' }}>DALE DIAZ</h1>
                        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: '0', lineHeight: '1', color: 'var(--accent-color)' }}>
                            COMBINING EXPRESSION AND SYNTAX
                        </h1>
                        <div className="repl-window">
                            <div className="repl-header">
                                <span>capabilities</span>
                                <span style={{ opacity: 0.5 }}>exe</span>
                            </div>
                            <div className="repl-body">
                                <span className="repl-prompt">></span>
                                <Typewriter elements={["SENIOR PROGRAMMER", "GAMEPLAY PROGRAMMING", "AI SYSTEMS", "PROCEDURAL GENERATION", "NETWORK PROGRAMMING", "AUTOMATION", "TOOLING", "UNITY EXPERTISE", "MUSIC PRODUCTION", "POLYMATH", "LIFETIME LEARNER"]} />
                            </div>
                        </div>
                    </div>

                    <div id="about" className="sample-table-container">
                        <table className="sample-table">
                            <tbody>
                                <tr className="header-row">
                                    <td className="line-number">01</td>
                                    <td className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>ABOUT ME</td>
                                </tr>
                                <tr>
                                    <td className="line-number">02</td>
                                    <td className="value-cell">
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="github-activity" className="sample-table-container">
                        <table className="sample-table">
                            <tbody>
                                <tr className="header-row">
                                    <td className="line-number">01</td>
                                    <td className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>GITHUB ACTIVITY</td>
                                </tr>
                                <tr>
                                    <td className="line-number">02</td>
                                    <td className="value-cell">
                                        <GithubCalendar username="Stropheum" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="home-side-col">
                    <div className="side-sticky">
                        <div id="credited-titles" className="side-nav-section">
                            <div className="side-nav-title">CREDITED TITLES</div>
                            <LogoGrid />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
