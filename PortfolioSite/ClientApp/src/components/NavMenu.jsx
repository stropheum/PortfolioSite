import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink as RsNavLink} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './NavMenu.css';
import "./Card.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
        <nav className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-brand">DALE DIAZ</div>
            <div className="sidebar-version">v1.0.0</div>
          </div>
          
          <div className="sidebar-search">
            <input type="text" placeholder="Search..." disabled />
            <span className="search-key">Ctrl+K</span>
          </div>

          <div className="sidebar-content">
            <div className="sidebar-item">
              <NavLink className="sidebar-link" to="/" end>Home</NavLink>
            </div>
            
            <div className="sidebar-group">
              <div className="sidebar-label">PORTFOLIO</div>
              <div className="sidebar-item">
                <NavLink className="sidebar-link" to="/samples">Samples</NavLink>
              </div>
              <div className="sidebar-item">
                <NavLink className="sidebar-link" to="/resume">Resume</NavLink>
              </div>
              <div className="sidebar-item">
                <NavLink className="sidebar-link" to="/github">Github</NavLink>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}
