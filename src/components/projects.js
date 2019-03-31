import React, { Component } from 'react'
import MockDesktop from '../img/mock_desktop.png'
import Modal from './modal'
import data from '../data/data.json'

export default class projects extends Component {
  constructor(){
    super();
    this.state={
      modalTitle: 'BirthRide',
      openModal: false,
      modals: data.modals,
      selected: data.modals[0],

    }
  }
  selectModal = e =>{
    const val = e.target.title;
    console.log(this.state.modalTitle)
    this.setState({modalTitle: val, openModal:true, selected: this.state.modals.find(modal => val === modal.title)})
    // this.changeSelected()
  }
//   changeSelected = e =>{
//     const newSelected = this.state.modals.find(modal => this.state.modalTitle === modal.title)
//     this.setState({selected: newSelected})
// }
  hideModal = e =>{
    this.setState({openModal:false})
  }

  render() {
    return (
    <>
      <section className="mt-16">
        <h2 className="text-4xl text-center">What I've built recently</h2>
        <p className="text-xl mt-2 text-center">As a student at Lambda School I've built a handful of projects that have helped me grow as a fullstack developer.</p>
        <div className="flex space-between mt-8 ">
          <div className="w-1/3 text-center">
            <h3>BirthRide</h3>
            <a href="/">
              <img className="hvr-float-shadow my-6" src={MockDesktop} alt="MockDesktop"/>
            </a> 
            <button onClick={e=>this.selectModal(e)} title="BirthRide" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
          <div className="w-1/3 text-center">
           <h3>Donor Management</h3>
           <a href="/">
            <img className="hvr-float-shadow my-6" src={MockDesktop} alt="MockDesktop"/>
            </a>
            <button onClick={e=>this.selectModal(e)} title="Donor Management" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
          <div className="w-1/3 text-center">
           <h3>Guidr</h3>
           <a href="/">
            <img className="hvr-float-shadow my-6" src={MockDesktop} alt="MockDesktop"/>
            </a>
            <button onClick={e=>this.selectModal(e)} title="Guidr" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
        </div>
      </section>
      <Modal selected={this.state.selected} openModal={this.state.openModal} hideModal={this.hideModal} />
      </>
    )
  }
}
