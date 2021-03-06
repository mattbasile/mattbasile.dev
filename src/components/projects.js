import React from 'react'
import birthMockDesktop from '../img/birth_mock_desktop.png'
import donorMockDesktop from '../img/donor_mock_desktop.png'
import guidrMockDesktop from '../img/guidr_mock_desktop.png'
import Modal from './modal'

export default function projects(props) {
  return (
    <>
    <section className="mt-16 z-10 my-32">
      <h2 className="text-4xl font-bold	text-center">What I've built recently</h2>
      <p className="text-xl mt-2 text-center">As a student at Lambda School I've built a handful of projects that have helped me grow as a full stack developer.</p>
      <div className="flex flex-wrap space-between mt-8 relative">
        <div className="mx-auto my-4 w-full md:w-1/3 text-center relative md:static">
          <h3 className="text-2xl font-bold">BirthRide</h3>
          <a className="block mx-auto w-4/5" target="blank" href="https://birthride.herokuapp.com/">
            <img className="hvr-float-shadow my-6" src={birthMockDesktop} alt="MockDesktop"/>
          </a> 
          <button onClick={e=>props.selectModal(e)} title="BirthRide" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">
          Learn More
          </button>
          {props.selected.title !== 'BirthRide' ? null : 
          <Modal selected={props.selected} openModal={props.openModal} hideModal={props.hideModal} />
          }
        </div>
        <div className=" mx-auto my-4 w-full md:w-1/3 text-center relative md:static">
         <h3 className="text-2xl font-bold">Donor Management</h3>
         <a className="block mx-auto w-4/5 " target="blank" href="https://donor-management-landing-page.netlify.com/">
          <img className="hvr-float-shadow my-6" src={donorMockDesktop} alt="MockDesktop"/>
          </a>
          <button onClick={e=>props.selectModal(e)} title="Donor Management" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">
          Learn More
          </button>
          {props.selected.title !== 'Donor Management' ? null : 
          <Modal selected={props.selected} openModal={props.openModal} hideModal={props.hideModal} />
          }
          
        </div>
        <div className=" mx-auto my-4 w-full md:w-1/3 text-center relative md:static">
         <h3 className="text-2xl font-bold">Guidr</h3>
         <a className="block mx-auto w-4/5" target="blank" href="https://guidr2.netlify.com/">
          <img className="hvr-float-shadow my-6" src={guidrMockDesktop} alt="MockDesktop"/>
          </a>
          <button onClick={e=>props.selectModal(e)} title="Guidr" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded">
          Learn More
          </button>
          {props.selected.title !== 'Guidr' ? null : 
          <Modal selected={props.selected} openModal={props.openModal} hideModal={props.hideModal} />
          }
        </div>
        
      </div>  
    </section>
  </>
  )
}


