import React, { Component } from 'react';

import Header from './components/header.js'
import Profile from './components/profile.js'
import Projects from './components/projects.js'
import Truths from './components/truths.js'
import Articles from './components/articles.js'
import Contact from './components/contact.js'
import data from './data/data.json'

class App extends Component {
  state={
    modalTitle: 'BirthRide',
    modals: data.modals,
    selected: data.modals[0],
    openModal: false
  }
  selectModal = e =>{
    const val = e.target.title;
    console.log(this.state.modalTitle)
    this.setState({
      modalTitle: val,
      openModal:true,
      selected: this.state.modals.find(modal => val === modal.title)})
  }
  hideModal = e =>{
    this.setState({openModal:false})
  }
  render() {
    return (
      <div className="App z-0 bg-blue-100" >
        <Header/>
        <Profile />
        <Projects 
        
        openModal={this.state.openModal}
        hideModal={this.hideModal}
        selectModal ={this.selectModal}
        selected={this.state.selected}
        
        />
        <Truths />
        <Articles />
        <Contact />
      </div>
    );
  }
}

export default App;
