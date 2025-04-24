import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" id="top">
            <div className="header-container">
                <nav className="header-nav">
                    <div className="title">
                        <div className="burger-menu" onClick={toggleMenu}>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                        </div>
                        <div className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                            <Link to="/main-page-en" onClick={closeMenu}>English</Link>
                            <Link to="/main-page-ru" onClick={closeMenu}>Русский</Link>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li className="link">
                            <Link to="#about-me">Мой опыт</Link>
                        </li>
                        <li className="link">
                            <Link to="#my-skills">Образование</Link>
                        </li>
                        <li className="link">
                            <Link to="#my-projects">Навыки</Link>
                        </li>
                        <li className="link">
                            <Link to="#my-projects">Последние проекты</Link>
                        </li>
                    </ul>
                    <a className="btn-nav" href="/dan-portfolio/portfolio.pdf" download>Скачать резюме</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
