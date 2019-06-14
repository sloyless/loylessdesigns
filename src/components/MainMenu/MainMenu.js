import React from 'react';
import LogoLinkedin from '@carbon/icons-react/es/logo--linkedin/24';
import LogoGithub from '@carbon/icons-react/es/logo--github/24';
import LogoTwitter from '@carbon/icons-react/es/logo--twitter/24';

const Home = () => {
  return (
    <nav role="navigation" className="bx--row main-menu">
      <div className="bx--col">
        <ul className="main-nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#showcase">Showcase</a>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
        </ul>
      </div>
      <div className="bx--col">
        <ul className="social-nav">
          <li>
            <a
              href="https://www.linkedin.com/in/seanloyless/"
              target="_blank"
              rel="noopener noreferrer">
              <LogoLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sloyless"
              target="_blank"
              rel="noopener noreferrer">
              <LogoGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/crudebaron/"
              target="_blank"
              rel="noopener noreferrer">
              <LogoTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
