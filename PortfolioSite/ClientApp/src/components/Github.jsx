import React, {Component} from 'react';
import './Links.css';

export class Github extends Component {
    static displayName = Github.name;

    render() {
        return (
            <div>
                <h1>
                    <a href="https://github.com/stropheum" target="_blank" rel="noopener noreferrer"
                       className="custom-link">
                        Github
                    </a>
                </h1>
                <p>My Github Profile. Where I host personal passion projects, potential solo endeavors, and technical
                    studies that I use as artifacts of my personal growth.</p>
                
                <hr/>
                <a href="https://github.com/stropheum/HexVisualizer" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Hex Visualizer
                </a>
                <p>Leveraging DOTS, signal processing, visual effects and shaders to make pretty abstract scenes</p>
                <hr/>
                <a href="https://github.com/stropheum/Snap" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Snap
                </a>
                <p>Attempting to recreate Marvel Snap as a technical study in Unity</p>
                <hr/>
                <a href="https://github.com/stropheum/D-Squared-Engine" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    D-Squared Engine
                </a>
                <p>A custom game engine with a flexible XML scripting language, support for DirectX, OpenGL, and Vulkan.
                    Originally a semester-long project at FIEA, under the discerning eye of Paul Varcholik, I took a lot
                    of pride in this project and while originally infuriating, the oddball XML scripting language really
                    opened my eyes to what a game engine is and can be, as well as how much of a nightmare it can be
                    trying to create a unified experience across multiple graphical frameworks. DirectX makes me
                    sad.</p>
                <hr/>
                <a href="https://github.com/stropheum/Hivemind" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Hivemind
                </a>
                <p>A bee colony simulation I wrote, utilizing the Artificial Bee Colony algorithm (developed by
                    Karaboga to optimize server selection based on observing bee food source selection behavior).
                    Used to demonstrate the theory that through no direct inter-hive communication, hives that
                    otherwise should starve out competitors will instead have emergent cooperative behavior</p>
                <hr/>
                <a href="https://github.com/stropheum/VoiceMeter" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    VoiceMeter
                </a>
                <p>A stream overlay tool I've developed to hook into a discord voice channel and monitor voice
                    activity. The bot relays information to the overlay and displays real time conversational data
                    such as time equity (% of total conversation spent yapping), longest contiguous segment (biggest
                    yap),
                    longest uninterrupted segment (biggest polite yap), as well as a live feed of participants vocal
                    streams. I shamelessly admit I enjoy my share of internet debates, but a common problem I noticed
                    was
                    the propensity for when people are losing to use tactics like gish galloping, frequent
                    interruptions,
                    as well as straight up filibustering to give the appearance of dominating the conversation. The goal
                    of this tool is to market it to debate streamers such that they can have an indisputable data-driven
                    reference for how fair an interlocutor is being during a conversation.</p>
                <hr/>
                <a href="https://github.com/stropheum/CrackHud" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    CrackHud
                </a>
                <p>An augmented reality tool I developed with the intention to market to magic the gathering pack
                    openers. The tool recognizes the card faces, looks up the secondary market value of the card, as
                    well
                    as market trend data. This data is displayed on the card face as well as added to a running total.
                    Roadmap features included profit trackers to compare against market cost of packs, and customizable
                    content. Unfortunately I didn't read the fine print and Wizards of the coast has extremely
                    prohibitive
                    IP utilization clauses, so this project got mothballed, but the tech is quite fascinating.</p>
                <hr/>
                <a href="https://github.com/stropheum/Voxel-Terrain-Generator" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Voxel Terrain Generator
                </a>
                <p>This is a voxel terrain generation tool I wrote in Unity as a challenge. Using Minecraft as
                    inspiration, I wrote a generation tool that has configurable chunk sizes, as well as configurable
                    proximity generation, and mesh optimization. Once the terrain data is generated for a given chunk,
                    each
                    voxel checks for occluded surfaces, removes those quads from the mesh and stitches itself back
                    together,
                    as well as checking adjacent chunks and notifying adjacent chunks to check themselves. The result is
                    a highly performant terrain generation tool that has minimal GPU overdraw and optimal runtime</p>
                computation performance. I would love to make another pass at this utilizing DOTS for the chunk
                generation, though.
                <hr/>
                <a href="https://github.com/stropheum/RTS" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    RTS Project
                </a>
                <p>This is a slow-going RTS project I'm using as a foundation for Unreal Engine skill building and exploration.
                    The end goal is to have a simple functional RTS game with editor tools such as a map editor</p>
                <hr/>
                <a href="https://github.com/stropheum/PortfolioSite" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Personal Portfolio Website
                </a>
                <p>I wrote this website, hosted it on Github pages, and I'm linking here back to the
                    Github project itself. This is my first foray into React, so judge me gently. I figured it's a
                    perfect
                    excuse to get some learning in.</p>
            </div>
        );
    }
}