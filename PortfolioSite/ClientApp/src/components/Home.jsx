import React, {Component} from 'react';
import LogoGrid from "./LogoGrid";
import GithubCalendar from "./GithubCalendar";
// import GithubCalendar from "./GithubCalendar";

export class Home extends Component {
    static displayName = this.name;

    render() {
        return (
            <div>
                <h1>Dale Diaz</h1>
                <h3>Senior Game Programmer | Unity Expert | Polymath | Lifetime Learner</h3>
                <hr/>
                <GithubCalendar username="Stropheum" />
                <hr/>
                <h1 align="center">About Me</h1>
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

                <hr />
                <h1 align="center">Credited Titles</h1>
                <LogoGrid/>
            </div>
        );
    }
}
