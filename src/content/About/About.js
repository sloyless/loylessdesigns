import React from 'react';

const About = () => {
  return (
    <section className="bx--grid bx--grid--full-width page-about full-view">
      <div className="bx--row">
        <div className="bx--col">
          <div className="masthead masthead-reverse">
            <div className="masthead-content masthead-red">
              <h1>Hi, my name is</h1>
              <h2>Sean Loyless</h2>
              <h3>I've been a web developer for over 20 years.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bx--row about-content">
        <div className="bx--col">
          <h2>Development</h2>
          <p>
            I pride in offering my clients secure, accessible, responsive, and
            leading-edge technology to push their sites to the next level. Sites
            that scale to any device, work reliably on any modern browser, and
            support visually impaired users.
          </p>
        </div>
        <div className="bx--col">
          <h2>Architecture</h2>
          <p>
            I can organize, engineer, and set up structure to create a site from
            the ground up. My diverse experience allows me to recognize the
            right and most cost-effective solution for my clients, and also
            supporting future iterations to come.
          </p>
        </div>
        <div className="bx--col">
          <h2>Design</h2>
          <p>
            My original background was in graphic and web design, and I continue
            to take that practice into my development. I understand design
            language and modern UX/UI techniques that will be visually appealing
            in addition to easy to use.
          </p>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col">
          <div className="skill-list">
            <ul className="bx--row">
              <li className="bx--col">
                <img
                  src="/assets/html.png"
                  alt="HTML5 logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/css.png"
                  alt="CSS3 logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/js.png"
                  alt="JavaScript logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/reactjs.png"
                  alt="ReactJS logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/angularjs.png"
                  alt="AngularJS logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/sass.png"
                  alt="Sass logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/nodejs.png"
                  alt="NodeJS logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/wordpress.png"
                  alt="Wordpress logo"
                  role="presentation"
                />
              </li>
              <li className="bx--col">
                <img
                  src="/assets/sketch.png"
                  alt="Sketch logo"
                  role="presentation"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
