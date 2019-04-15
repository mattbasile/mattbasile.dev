import React, { Component } from 'react';

import Header from './components/header.js'
import Profile from './components/profile.js'
import Projects from './components/projects.js'
import Truths from './components/truths.js'
import Articles from './components/articles.js'
import Contact from './components/contact.js'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Projects/>
        <Truths/>
        <Articles/>
        <Contact/>
      </div>
    );
  }
}

export default App;
