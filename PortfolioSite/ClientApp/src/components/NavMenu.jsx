import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="main-nav-bar navbar-expand-sm navbar-toggleable-sm mb-3" dark>
                    <Container>
                        <NavbarBrand>Navigation</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                                  navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem className="main-nav-bar-item">
                                    <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                </NavItem>
                                {/*<NavItem>*/}
                                {/*    <NavLink tag={Link} className="text-light" to="/counter">Counter</NavLink>*/}
                                {/*</NavItem>*/}
                                {/*<NavItem>*/}
                                {/*    <NavLink tag={Link} className="text-light" to="/fetch-data">Fetch data</NavLink>*/}
                                {/*</NavItem>*/}
                                <NavItem className="main-nav-bar-item">
                                    <NavLink tag={Link} className="text-light" to="/samples">Samples</NavLink>
                                </NavItem>
                                <NavItem className="main-nav-bar-item">
                                    <NavLink tag={Link} className="text-light" to="/Resume">Resume</NavLink>
                                </NavItem>
                                <NavItem className="main-nav-bar-item">
                                    <NavLink tag={Link} className="text-light" to="/Github">Github</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
