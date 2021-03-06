import React, { Component } from 'react'
import Firework from './firework'

export default class header extends Component {
  constructor(){
    super();
    this.state={
      "active":false,
    }
  }
  toggleConfetti =()=>{
    this.setState({active:true});
    setTimeout(function(){
      this.setState({active:false})
    }.bind(this), 1000)
    
  }
  render() {
    return (
      <header id="confetti-canvas" className="h-80 lg:h-auto bg-blue-900 relative pb-1">
      
        <div className="hidden md:block md:h-24 "></div>
        <p className="flex flex-wrap justify-center text-white text-center title-size pt-6 md:pt-16">Let's build something <b onClick={e=>this.toggleConfetti()}className="app_confetti underline hover:text-red-600 cursor-pointer px-3">great <Firework active={this.state.active}/></b> together.
  
        </p>
        
        <svg className="absolute bottom-0 z-10 -mb-1" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1399 163">
        <path d="M1335.5,263.5" 
        transform="translate(-85 322)"
        style={{"fill":"#EBF8FF", }}
        />
        <path d="M512.5,99.5"
        transform="translate(-85 322)"
        style={{"fill":"#EBF8FF", }}
        /><path d="M85-195S300-322,441-322c168,0,332,61.08,462,81,385,59,581-60,581-60v142H85Z"
        transform="translate(-85 322)" 
        style={{"fill":"#EBF8FF", }}/></svg>
        
      </header>
    )
  }
}
