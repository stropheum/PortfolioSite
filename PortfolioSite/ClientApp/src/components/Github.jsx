import React, {Component} from 'react';
import './Links.css';
import './Samples.css';

const ProjectTable = ({ id, title, link, description }) => {
    return (
        <div id={id} className="sample-table-container">
            <table className="sample-table">
                <tbody>
                    <tr>
                        <td className="line-number">01</td>
                        <td className="label-cell">PROJECT</td>
                        <td className="value-cell">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="custom-link">
                                {title}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="line-number">02</td>
                        <td className="label-cell">DESC</td>
                        <td className="value-cell">{description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export class Github extends Component {
    static displayName = Github.name;

    render() {
        const projects = [
            {
                id: "gasgun",
                title: "GasGun",
                link: "https://github.com/stropheum/GasGun",
                description: "Leveraging DOTS, signal processing, visual effects and shaders to make pretty abstract scenes"
            },
            {
                id: "hexvisualizer",
                title: "Hex Visualizer",
                link: "https://github.com/stropheum/HexVisualizer",
                description: "Leveraging DOTS, signal processing, visual effects and shaders to make pretty abstract scenes"
            },
            {
                id: "snap",
                title: "Snap",
                link: "https://github.com/stropheum/Snap",
                description: "Attempting to recreate Marvel Snap as a technical study in Unity"
            },
            {
                id: "d-squared-engine",
                title: "D-Squared Engine",
                link: "https://github.com/stropheum/D-Squared-Engine",
                description: "A custom game engine with a flexible XML scripting language, support for DirectX, OpenGL, and Vulkan. Originally a semester-long project at FIEA, under the discerning eye of Paul Varcholik."
            },
            {
                id: "hivemind",
                title: "Hivemind",
                link: "https://github.com/stropheum/Hivemind",
                description: "A bee colony simulation I wrote, utilizing the Artificial Bee Colony algorithm. Used to demonstrate emergent cooperative behavior."
            },
            {
                id: "voicemeter",
                title: "VoiceMeter",
                link: "https://github.com/stropheum/VoiceMeter",
                description: "A stream overlay tool to hook into a discord voice channel and monitor voice activity, relaying real-time conversational data."
            },
            {
                id: "crackhud",
                title: "CrackHud",
                link: "https://github.com/stropheum/CrackHud",
                description: "An augmented reality tool that recognizes card faces and looks up secondary market values."
            },
            {
                id: "voxel-terrain-generator",
                title: "Voxel Terrain Generator",
                link: "https://github.com/stropheum/Voxel-Terrain-Generator",
                description: "A voxel terrain generation tool with configurable chunk sizes, proximity generation, and mesh optimization."
            },
            {
                id: "rts",
                title: "RTS Project",
                link: "https://github.com/stropheum/RTS",
                description: "A foundation for Unreal Engine skill building and exploration, with the goal of a simple functional RTS game."
            },
            {
                id: "portfoliosite",
                title: "Personal Portfolio Website",
                link: "https://github.com/stropheum/PortfolioSite",
                description: "I wrote this website, hosted it on Github pages, and I'm linking here back to the Github project itself."
            },
            {
                id: "deformablemesh",
                title: "Deformable Mesh",
                link: "https://github.com/stropheum/DeformableMesh",
                description: "A procedural mesh project where the user can deform a mesh with mouse interaction, with a self-healing mesh."
            }
        ];

        return (
            <div>
                <div className="sample-table-container">
                    <table className="sample-table">
                        <tbody>
                            <tr>
                                <td className="line-number">00</td>
                                <td className="label-cell">PROFILE</td>
                                <td className="value-cell">
                                    <a href="https://github.com/stropheum" target="_blank" rel="noopener noreferrer" className="custom-link">
                                        Github Profile
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="line-number">01</td>
                                <td className="label-cell">SUMMARY</td>
                                <td className="value-cell">
                                    My Github Profile. Where I host personal passion projects, potential solo endeavors, and technical studies.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {projects.map((project) => (
                    <ProjectTable 
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
        );
    }
}