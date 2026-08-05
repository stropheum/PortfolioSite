import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {NavMenu} from './NavMenu';

export class Layout extends Component {
    static displayName = "Layout";

    render() {
        return (
            <div className="app-container">
                <NavMenu/>
                <main className="main-content">
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}
