import React, {Component} from 'react';
import './Links.css';

export class Github extends Component {
    static displayName = Github.name;

    render() {
        return (
            <div>
                <h1>Github</h1>
                <a href="https://github.com/stropheum" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    My Github Profile
                </a>
                <hr/>
                <a href="https://github.com/stropheum/D-Squared-Engine" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    D-Squared Engine
                </a>
                <hr/>
                <a href="https://github.com/stropheum/Hivemind" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Hivemind
                </a>
                <hr/>
                <a href="https://github.com/stropheum/VoiceMeter" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    VoiceMeter
                </a>
                <hr/>
                <a href="https://github.com/stropheum/CrackHud" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    CrackHud
                </a>
                <hr/>
                <a href="https://github.com/stropheum/Voxel-Terrain-Generator" target="_blank" rel="noopener noreferrer"
                   className="custom-link">
                    Voxel Terrain Generator
                </a>
            </div>
        );
    }
}