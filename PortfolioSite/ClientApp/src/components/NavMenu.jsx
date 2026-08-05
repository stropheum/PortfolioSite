import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { samplesData } from './samplesData';
import './NavMenu.css';

export const NavMenu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'default');
  const searchRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const themes = [
    { id: 'default', name: 'EMBER', color: '#ff5f33' },
    { id: 'matrix', name: 'PHOSPHOR', color: '#00ff41' },
    { id: 'cobalt', name: 'COBALT', color: '#64ffda' },
    { id: 'crimson', name: 'CRIMSON', color: '#ff3333' },
    { id: 'gold', name: 'GOLD', color: '#ffcc33' },
    { id: 'amethyst', name: 'AMETHYST', color: '#bf94ff' },
    { id: 'frost', name: 'FROST', color: '#88c0d0' },
    { id: 'rose', name: 'ROSE', color: '#ff79c6' },
    { id: 'lime', name: 'LIME', color: '#a6e22e' },
    { id: 'greyscale', name: 'NOIRE', color: '#999999' },
  ];

  const themeCols = Math.ceil(themes.length / Math.ceil(themes.length / 8));

  const searchIndex = [
    { title: 'Home', path: '/', category: 'Page' },
    { title: 'About Me', path: '/#about', category: 'Section' },
    { title: 'Github Activity', path: '/#github-activity', category: 'Section' },
    { title: 'Credited Titles', path: '/#credited-titles', category: 'Section' },
    { title: 'Samples', path: '/samples', category: 'Page' },
    ...samplesData.map(s => ({ title: s.title, path: `/samples/${s.id}`, category: 'Sample' })),
    { title: 'Resume', path: '/resume', category: 'Page' },
    { title: 'Github', path: '/github', category: 'Page' },
    { title: 'GasGun (GitHub)', path: '/github#gasgun', category: 'Project' },
    { title: 'Hex Visualizer (GitHub)', path: '/github#hexvisualizer', category: 'Project' },
    { title: 'Snap (GitHub)', path: '/github#snap', category: 'Project' },
    { title: 'D-Squared Engine (GitHub)', path: '/github#d-squared-engine', category: 'Project' },
    { title: 'Hivemind (GitHub)', path: '/github#hivemind', category: 'Project' },
    { title: 'VoiceMeter (GitHub)', path: '/github#voicemeter', category: 'Project' },
    { title: 'CrackHud (GitHub)', path: '/github#crackhud', category: 'Project' },
    { title: 'Voxel Terrain Generator (GitHub)', path: '/github#voxel-terrain-generator', category: 'Project' },
    { title: 'RTS Project (GitHub)', path: '/github#rts', category: 'Project' },
    { title: 'Personal Portfolio Website (GitHub)', path: '/github#portfoliosite', category: 'Project' },
    { title: 'Deformable Mesh (GitHub)', path: '/github#deformablemesh', category: 'Project' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowResults(false);
      }
    };

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (currentTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (path) => {
    setSearchQuery('');
    setResults([]);
    setShowResults(false);
    
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      if (window.location.pathname === basePath) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(path);
        // Small delay to allow page to load before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">DALE DIAZ</div>
        <div className="sidebar-version">v1.1.0</div>
      </div>
      
      <div className="sidebar-search-container" ref={containerRef}>
        <div className="sidebar-search">
          <input 
            ref={searchRef}
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => searchQuery.length > 0 && setShowResults(true)}
          />
          <span className="search-key">Ctrl+K</span>
        </div>
        
        {showResults && (
          <div className="search-results">
            {results.length > 0 ? (
              results.map((result, index) => (
                <div 
                  key={index} 
                  className="search-result-item"
                  onClick={() => handleResultClick(result.path)}
                >
                  <div className="result-title">{result.title}</div>
                  <div className="result-category">{result.category}</div>
                </div>
              ))
            ) : (
              <div className="search-no-results">No results found</div>
            )}
          </div>
        )}
      </div>

      <div className="sidebar-content">
        <div className="sidebar-item">
          <NavLink className="sidebar-link" to="/" end>Home</NavLink>
        </div>
        
        <div className="sidebar-group">
          <div className="sidebar-label">PORTFOLIO</div>
          <div className="sidebar-item">
            <NavLink className="sidebar-link" to="/samples">Samples</NavLink>
            <div className="sidebar-sub-menu">
              {samplesData.map(sample => (
                <NavLink 
                  key={sample.id} 
                  className="sidebar-link sub-link" 
                  to={`/samples/${sample.id}`}
                >
                  {sample.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="sidebar-item">
            <NavLink className="sidebar-link" to="/resume">Resume</NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink className="sidebar-link" to="/github">Github</NavLink>
          </div>
        </div>

        <div className="sidebar-group">
          <div className="sidebar-label">THEME</div>
          <div className="theme-switcher" style={{ '--theme-cols': themeCols }}>
            {themes.map(t => (
              <button 
                key={t.id}
                className={`theme-btn ${currentTheme === t.id ? 'active' : ''}`}
                onClick={() => setCurrentTheme(t.id)}
                title={t.name}
                style={{ '--theme-color': t.color }}
              />
            ))}
          </div>
          <div className="theme-name">{themes.find(t => t.id === currentTheme)?.name}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
