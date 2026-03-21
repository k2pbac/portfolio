import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='nunita-bold'>
            <img className='rings' src="/images/pattern-rings.svg" alt="ring" />
            <h1 className='heading-xl'>Nice to meet you!<br></br> I'm <span className='underline'>Kris Bachan</span>.</h1>

            <p className='text-md nunita-medium'>Based in Canada, I’m a front-end developer passionate about building accessible web apps that users love.</p>

            <a href="https://www.linkedin.com/in/k2pbac/" className='underline nunita-bold' target="_blank" rel="noopener noreferrer">CONTACT ME</a>

            <img className='profile-pic' src="/images/image-profile-desktop.webp" alt="profile" />
        </header>
    );
}

export default Header;