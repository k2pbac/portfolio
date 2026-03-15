import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='space-grotesk-bold'>
            <img src="/images/pattern-rings.svg" alt="ring" />
            <h1>Nice to meet you!<br></br> I'm <span className='underline'>Kris Bachan</span>.</h1>

            <p>Based in Canada, I’m a front-end developer passionate about building accessible web apps that users love.</p>

            <a href="https://www.linkedin.com/in/k2pbac/" className='underline' target="_blank" rel="noopener noreferrer">Contact Me</a>
        </header>
    );
}

export default Header;