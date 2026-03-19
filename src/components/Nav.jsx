import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
        <div className="nav-logo">krisbachan</div> 
        <div className="nav-spacer"></div>
        <div className="nav-links">
        <a href="https://github.com/k2pbac" target="_blank" rel="noopener noreferrer">
          <img
            src="./images/icon-github.svg"
            alt="GitHub"
          />
        </a>
        <a href="https://www.frontendmentor.io/profile/k2pbac" target="_blank" rel="noopener noreferrer">
          <img
            src="./images/icon-frontend-mentor.svg"
            alt="Frontend Mentor"
          />
        </a>
        <a href="https://www.linkedin.com/in/k2pbac" target="_blank" rel="noopener noreferrer">
          <img
            src="./images/icon-linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        </div>
    </nav>

  );
}
