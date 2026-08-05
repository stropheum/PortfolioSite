import React from 'react';
import { useParams, Link } from 'react-router-dom';
import YouTube from "react-youtube";
import { samplesData } from './samplesData';
import './Samples.css';
import './Links.css';

const SampleCard = ({ sample, isDetail = false }) => {
    const opts = (autoplay) => ({
        height: "100%",
        width: "100%",
        quality: "1080",
        playerVars: {
            autoplay: autoplay ? 1 : 0,
        },
    });

    return (
        <div className="sample-table-container">
            <table className="sample-table">
                <tbody>
                    <tr>
                        <td className="line-number">01</td>
                        <td className="label-cell">NAME</td>
                        <td className="value-cell">
                            {isDetail ? (
                                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{sample.title}</span>
                            ) : (
                                <Link to={`/samples/${sample.id}`} className="custom-link">
                                    {sample.title}
                                </Link>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="line-number">02</td>
                        <td className="label-cell">DESC</td>
                        <td className="value-cell">{sample.description}</td>
                    </tr>
                    {isDetail && (
                        <tr>
                            <td className="line-number">03</td>
                            <td className="label-cell">MEDIA</td>
                            <td className="value-cell">
                                {sample.videoIds.map((videoId, index) => (
                                    <div key={videoId} className="youtube-embed-container" style={index > 0 ? { marginTop: "1rem" } : {}}>
                                        <YouTube 
                                            videoId={videoId} 
                                            opts={opts(index === 0 && sample.autoplayFirst)} 
                                            className="youtube-embed-video"
                                        />
                                    </div>
                                ))}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export const Samples = () => {
    const { sampleId } = useParams();

    if (sampleId) {
        const sample = samplesData.find(s => s.id === sampleId);
        if (!sample) return <div>Sample not found</div>;
        return (
            <div>
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/samples" className="custom-link" style={{ fontSize: '0.8rem' }}>
                        [ BACK TO SAMPLES ]
                    </Link>
                </div>
                <SampleCard sample={sample} isDetail={true} />
            </div>
        );
    }

    return (
        <div>
            <h1>Technical Samples</h1>
            <p style={{ marginBottom: '2rem' }}>A collection of technical demonstrations and project highlights.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {samplesData.map(sample => (
                    <SampleCard key={sample.id} sample={sample} />
                ))}
            </div>
        </div>
    );
};

export default Samples;
