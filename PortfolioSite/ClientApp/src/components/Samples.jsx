import React, {Component} from 'react';
import YouTube from "react-youtube";
import './Samples.css';

const VideoEmbed = () => {
    const opts = {
        height: "100%",
        width: "100%",
        quality: "1080",
        playerVars: {
            autoplay: 1, // Autoplay the video
        },
    };
    const opts_no_autoplay = {
        height: "100%",
        width: "100%",
        quality: "1080",
        playerVars: {
            autoplay: 0,
        },
    };
    const youtubeEmbedContainer = "youtube-embed-container";
    const youtubeEmbedVideo = "youtube-embed-video";

    return (
        <div>
            {/*Hex Visualizer*/}
            <div className="card-no-alignment">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <h2>Hex Visualizer</h2>
                    <p>Leveraging DOTS and signal processing to make pretty things to look at</p>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="8QoQzeEf6jY" opts={opts} className={youtubeEmbedVideo}/>
                    </div>
                    <hr/>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="oBIULjBv9Bs" opts={opts_no_autoplay} className={youtubeEmbedVideo}/>
                    </div>
                </div>
            </div>
            <hr/>

            {/*GasGun*/}
            <div className="card-no-alignment">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <h2>GasGun</h2>
                    <p>A highly customizable gun-based game using the gameplay ability system</p>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="SkMGIFy6trA" opts={opts_no_autoplay} className={youtubeEmbedVideo}/>
                    </div>
                </div>
            </div>
            <hr/>

            {/*HallCrawl*/}
            <div className="card-no-alignment">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <h2>HallCrawl</h2>
                    <p>A simple shooter game I'm building to improve my UE5 knowledge base</p>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="7pfnAtpJf9U" opts={opts_no_autoplay} className={youtubeEmbedVideo}/>
                    </div>
                </div>
            </div>
            <hr/>

            {/*Nisgab*/}
            <div className="card-no-alignment">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <h2>Nisgab</h2>
                    <p>A simple code generation tool for automatically generating global action bindings for unity's input system</p>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="SyeoqOclxF4" opts={opts_no_autoplay} className={youtubeEmbedVideo}/>
                    </div>
                </div>
            </div>
            <hr/>

            {/*Logician*/}
            <div className="card-no-alignment">
                <div style={{display: "flex", flexDirection: "column", marginLeft: "0"}}>
                    <div>
                        <h2>The Logician</h2>
                        <p>FIEA capstone project that I pitched and was a core developer on over a 9 month period</p>
                    </div>
                    <div className={youtubeEmbedContainer}>
                        <YouTube videoId="QeR5xUprkFI" opts={opts_no_autoplay} className={youtubeEmbedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export class Samples extends Component {
    static displayName = Samples.name;

    render() {
        return (
            <div>
                <h4 align={"center"}>Some videos and embedded demos of my projects</h4>
                <hr/>
                <VideoEmbed/>
                <hr/>
            </div>
        );
    }
}