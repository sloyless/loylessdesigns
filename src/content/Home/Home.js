import React from 'react';
import MainMenu from '../../components/MainMenu';

const Home = () => {
  return (
    <section className="bx--grid bx--grid--full-width home-page full-view">
      <MainMenu></MainMenu>
      <div className="bx--row">
        <div className="bx--col">
          <img
            className="logo"
            src="/assets/logo.svg"
            alt="Sean Loyless Designs Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
