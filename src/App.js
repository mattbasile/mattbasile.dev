import React, { Component } from 'react';

import Header from './components/header.js'
import Profile from './components/profile.js'
import Projects from './components/projects.js'
import Truths from './components/truths.js'
import Articles from './components/articles.js'
import Contact from './components/contact.js'


class App extends Component {
  waveGif=e=>{
    console.log(e.target.parentNode.parentNode.nextSibling.firstChild)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Profile waveGif={this.waveGif}/>
        <Projects/>
        <Truths/>
        <Articles/>
        <Contact/>
      </div>
    );
  }
}

export default App;
