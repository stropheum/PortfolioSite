import React, {Component} from 'react';
import './Links.css';

export class Github extends Component {
    static displayName = Github.name;

    render() {
        return (
            <div>
                <h1>Github</h1>
                <h2>TODO: notable repository links go here</h2>
                <a href="https://github.com/stropheum" target="_blank" rel="noopener noreferrer" className="custom-link">
                    My Github Profile
                </a>
            </div>
        );
    }
}