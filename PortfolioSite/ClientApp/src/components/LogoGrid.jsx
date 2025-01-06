import React from 'react';
import './LogoGrid.css';
import rdr2 from "./assets/logos/rdr2.png";
import proEra1 from "./assets/logos/proera1.png";
import proEra2 from "./assets/logos/proera2.jpg";
import proEra2025 from "./assets/logos/proera2025.jpg";

const logos = [
    rdr2,
    proEra1,
    proEra2,
    proEra2025,
];

const LogoGrid = () => {
    return (
        <div className="logo-grid">
            {logos.map((logo, index) => (
                <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="logo"
                    key={index}
                />
            ))}
        </div>
    );
};

export default LogoGrid;