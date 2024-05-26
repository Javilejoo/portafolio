import React from 'react';
import profileImage from '../assets/img portafolio.jpg';
import '../Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={profileImage} alt="Foto de perfil" className="profile-image" />
                <span className="name">Javier Prado</span>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">ABOUT</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">PROJECTS</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;