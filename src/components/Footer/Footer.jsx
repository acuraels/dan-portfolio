import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container" id="contact">
                <h2 className="footer-title">Контакты</h2>

                <p className="footer-text">
                    Если вы хотите связаться, не стесняйтесь! Я всегда открыт для обсуждения новых возможностей, сотрудничества
                    или просто обмена идеями. Буду рад вашему сообщению!
                </p>

                <div className="copyright">
                    <p className="copyright-text">Created by Daniil Ustinov 2024 - 2025 ©</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
