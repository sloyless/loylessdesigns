import React, { Component } from 'react';
import './styles/styles.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Home from './content/Home';
import About from './content/About';
import Showcase from './content/Showcase';

class App extends Component {
  render() {
    return (
      <>
        <Content>
          <Home />
          <About />
          <Showcase />
        </Content>
      </>
    );
  }
}

export default App;
