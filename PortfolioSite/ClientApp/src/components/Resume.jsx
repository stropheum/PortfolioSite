import React, { Component } from 'react';
import "./Samples.css";
import { resumeData } from './resumeData';

export class Resume extends Component {
    static displayName = Resume.name;


    render() {
        let lineCounter = 1;
        const getLineNum = () => (lineCounter++).toString().padStart(2, '0');
        const resetLines = () => { lineCounter = 1; return null; };

        return (
            <div className="content-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <div>
                        <h1 style={{ margin: 0, color: 'var(--header-color)', fontSize: '2.5rem', fontWeight: '900' }}>{resumeData.name.toUpperCase()}</h1>
                        <p style={{ margin: '0.5rem 0 0 0', color: 'var(--accent-color)', fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>{resumeData.title}</p>
                    </div>
                    <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                        <a 
                            href="https://docs.google.com/document/d/e/2PACX-1vRKxJPgzRnxKNCPioitY4qX-nEd4miYswBVFgIWwarRzWpBciqMTMnXK0WyTZcDF7v8Gq_kIeOkfy2M/pub" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="side-nav-link"
                            style={{ marginBottom: '0.5rem', justifyContent: 'flex-end' }}
                        >
                            DOWNLOAD ORIGINAL
                        </a>
                        <div style={{ opacity: 0.6 }}>
                            {resumeData.contact.email}<br />
                            {resumeData.contact.phone}<br />
                            {resumeData.contact.portfolio}
                        </div>
                    </div>
                </div>

                {/* EXPERIENCE SECTION */}
                <div id="experience" style={{ marginBottom: '3rem' }}>
                    {resetLines()}
                    <div className="sample-table-container" style={{ marginBottom: '1rem' }}>
                        <table className="sample-table">
                            <tbody>
                                <tr className="header-row">
                                    <td className="line-number">{getLineNum()}</td>
                                    <td colSpan="2" className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.2em' }}>
                                        EXPERIENCE
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {resumeData.experience.map((exp, i) => (
                        <div className="sample-table-container" key={`exp-${i}`} style={{ marginBottom: '1rem' }}>
                            {resetLines()}
                            <table className="sample-table">
                                <tbody>
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">EMPLOYER</td>
                                        <td className="value-cell">
                                            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{exp.company}</span>
                                            <span style={{ float: 'right', opacity: 0.5, fontSize: '0.7rem' }}>{exp.period}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">ROLE</td>
                                        <td className="value-cell">{exp.role}</td>
                                    </tr>
                                    {exp.projects && (
                                        <tr>
                                            <td className="line-number">{getLineNum()}</td>
                                            <td className="label-cell">PROJECTS</td>
                                            <td className="value-cell" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{exp.projects}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">DESC</td>
                                        <td className="value-cell">{exp.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                {/* PROJECTS SECTION */}
                <div id="projects" style={{ marginBottom: '3rem' }}>
                    {resetLines()}
                    <div className="sample-table-container" style={{ marginBottom: '1rem' }}>
                        <table className="sample-table">
                            <tbody>
                                <tr className="header-row">
                                    <td className="line-number">{getLineNum()}</td>
                                    <td colSpan="2" className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.2em' }}>
                                        SELECTED PROJECTS
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {resumeData.projects.map((proj, i) => (
                        <div className="sample-table-container" key={`proj-${i}`} style={{ marginBottom: '1rem' }}>
                            {resetLines()}
                            <table className="sample-table">
                                <tbody>
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">PROJECT</td>
                                        <td className="value-cell">
                                            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{proj.name}</span>
                                            <span style={{ float: 'right', opacity: 0.5, fontSize: '0.7rem' }}>{proj.year}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">TYPE</td>
                                        <td className="value-cell" style={{ fontSize: '0.75rem' }}>{proj.type}</td>
                                    </tr>
                                    <tr>
                                        <td className="line-number">{getLineNum()}</td>
                                        <td className="label-cell">SUMMARY</td>
                                        <td className="value-cell">{proj.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                {/* SKILLS & LANGUAGES */}
                {resetLines()}
                <div className="sample-table-container" id="technical-stack" style={{ marginBottom: '2rem' }}>
                    <table className="sample-table">
                        <tbody>
                            <tr className="header-row">
                                <td className="line-number">{getLineNum()}</td>
                                <td colSpan="2" className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.2em' }}>
                                    TECHNICAL STACK
                                </td>
                            </tr>
                            <tr>
                                <td className="line-number">{getLineNum()}</td>
                                <td className="label-cell">LANGUAGES</td>
                                <td className="value-cell">
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}>[ADVANCED]</span>
                                        {resumeData.languages.advanced.join(" / ")}
                                    </div>
                                    <div>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', opacity: 0.6 }}>[PROFICIENT]</span>
                                        <span style={{ opacity: 0.8 }}>{resumeData.languages.proficient.join(" / ")}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="line-number">{getLineNum()}</td>
                                <td className="label-cell">SOFTWARE</td>
                                <td className="value-cell" style={{ fontSize: '0.8rem' }}>
                                    {resumeData.software.join(" • ")}
                                </td>
                            </tr>
                            <tr>
                                <td className="line-number">{getLineNum()}</td>
                                <td className="label-cell">SKILLS</td>
                                <td className="value-cell">
                                    {resumeData.skills.join(" | ")}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* EDUCATION SECTION */}
                {resetLines()}
                <div className="sample-table-container" id="education" style={{ marginBottom: '2rem' }}>
                    <table className="sample-table">
                        <tbody>
                            <tr className="header-row">
                                <td className="line-number">{getLineNum()}</td>
                                <td colSpan="2" className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.2em' }}>
                                    EDUCATION
                                </td>
                            </tr>
                            {resumeData.education.map((edu, i) => (
                                <tr key={`edu-${i}`}>
                                    <td className="line-number">{getLineNum()}</td>
                                    <td className="label-cell">ACADEMIC</td>
                                    <td className="value-cell">
                                        <div style={{ fontWeight: 'bold' }}>{edu.school}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)' }}>{edu.degree}</div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{edu.period}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* AWARDS */}
                {resetLines()}
                <div className="sample-table-container" id="awards" style={{ marginBottom: '2rem' }}>
                    <table className="sample-table">
                        <tbody>
                            <tr className="header-row">
                                <td className="line-number">{getLineNum()}</td>
                                <td colSpan="2" className="value-cell" style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.2em' }}>
                                    AWARDS
                                </td>
                            </tr>
                            {resumeData.awards.map((award, i) => (
                                <tr key={`award-${i}`}>
                                    <td className="line-number">{getLineNum()}</td>
                                    <td className="label-cell">HONOR</td>
                                    <td className="value-cell">{award}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <a 
                        href="https://docs.google.com/document/d/e/2PACX-1vRKxJPgzRnxKNCPioitY4qX-nEd4miYswBVFgIWwarRzWpBciqMTMnXK0WyTZcDF7v8Gq_kIeOkfy2M/pub" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="side-nav-link"
                        style={{ 
                            display: 'inline-flex',
                            border: '1px solid var(--border-color)', 
                            padding: '0.8rem 1.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        DOWNLOAD ORIGINAL
                    </a>
                </div>
            </div>
        );
    }
}