import React, { Component } from 'react'
import birthMockDesktop from '../img/birth_mock_desktop.png'
import donorMockDesktop from '../img/donor_mock_desktop.png'
import guidrMockDesktop from '../img/guidr_mock_desktop.png'
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
      <section className="mt-16 relative">
        <h2 className="text-4xl text-center">What I've built recently</h2>
        <p className="text-xl mt-2 text-center">As a student at Lambda School I've built a handful of projects that have helped me grow as a fullstack developer.</p>
        <div className="flex flex-wrap space-between mt-8 ">
          <div className="mx-auto my-4 w-4/5 md:w-1/3 text-center ">
            <h3>BirthRide</h3>
            <a className="block mx-auto w-4/5" target="blank" href="https://birthride.herokuapp.com/">
              <img className="hvr-float-shadow my-6" src={birthMockDesktop} alt="MockDesktop"/>
            </a> 
            <button onClick={e=>this.selectModal(e)} title="BirthRide" className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
          <div className=" mx-auto my-4 w-4/5 md:w-1/3 text-center ">
           <h3>Donor Management</h3>
           <a className="block mx-auto w-4/5 " target="blank" href="https://donor-management-landing-page.netlify.com/">
            <img className="hvr-float-shadow my-6" src={donorMockDesktop} alt="MockDesktop"/>
            </a>
            <button onClick={e=>this.selectModal(e)} title="Donor Management" className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
          <div className=" mx-auto my-4 w-4/5 md:w-1/3 text-center ">
           <h3>Guidr</h3>
           <a className="block mx-auto w-4/5" target="blank" href="https://guidr2.netlify.com/">
            <img className="hvr-float-shadow my-6" src={guidrMockDesktop} alt="MockDesktop"/>
            </a>
            <button onClick={e=>this.selectModal(e)} title="Guidr" className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            Learn More
            </button>
          </div>
        </div>
        <Modal selected={this.state.selected} openModal={this.state.openModal} hideModal={this.hideModal} />
      </section>

      </>
    )
  }
}
