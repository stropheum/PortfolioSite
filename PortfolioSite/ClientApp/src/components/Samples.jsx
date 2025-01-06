import React, {Component} from 'react';
// import React from "react";
import YouTube from "react-youtube";

const VideoEmbed = () => {
    const opts = {
        height: "576",
        width: "1024",
        quality: "1080",
        playerVars: {
            autoplay: 1, // Autoplay the video
        },
    };

    return (
        <div>
            <h2>Hex Visualizer</h2>
            <h3>Leveraging DOTS and signal processing to make pretty things to look at</h3>
            <YouTube videoId="8QoQzeEf6jY" opts={opts} />
        </div>
    );
};
export class Samples extends Component {
    static displayName = Samples.name;

    render() {
        return (
            <div>
                <h1>Samples</h1>
                <h2>Some videos and embedded demos of my projects</h2>
                <hr/>
                <VideoEmbed />
                <hr/>
            </div>
        );
    }
}