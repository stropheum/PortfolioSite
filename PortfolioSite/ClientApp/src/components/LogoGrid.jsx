import React from 'react';
import './LogoGrid.css';
import rdr2 from "./assets/logos/rdr2.png";
import proEra1 from "./assets/logos/proera1.jpg";
import proEra2 from "./assets/logos/proera2.jpg";
import proEra2025 from "./assets/logos/proera2025.jpg";

const logoData = [
    { src: rdr2, title: "RED DEAD REDEMPTION 2", meta: "RELEASED", code: "RDR2" },
    { src: proEra1, title: "NFL PRO ERA", meta: "RELEASED", code: "NPE1" },
    { src: proEra2, title: "NFL PRO ERA II", meta: "RELEASED", code: "NPE2" },
    { src: proEra2025, title: "NFL PRO ERA 2025", meta: "RELEASED", code: "NPE3" },
];

const LogoGrid = () => {
    return (
        <div className="logo-window-grid">
            {logoData.map((logo, index) => (
                <div className="side-window" key={index}>
                    <div className="side-window-header">
                        <span>{logo.title}</span>
                        <span style={{ opacity: 0.5 }}>{logo.meta}</span>
                    </div>
                    <div className="side-window-body">
                        <img
                            src={logo.src}
                            alt={logo.title}
                            className="logo-compact"
                        />
                    </div>
                    <div className="side-window-footer">
                        {logo.code}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;