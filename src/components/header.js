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
      <header id="confetti-canvas" className="h-80 bg-blue-darker relative">
      
        <div className="h-24"></div>
        <p className="flex justify-center text-white text-center text-5xl pt-16">Let's build something <b onClick={e=>this.toggleConfetti()}className="app_confetti underline hover:text-red cursor-pointer px-3">great <Firework active={this.state.active}/></b> together.
        
        </p>
        
          <svg className="absolute pin-b" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1399 163">
        <path d="M1335.5,263.5" 
        transform="translate(-85 322)"
        style={{"fill":"white","stroke":"#000", "strokeMiterlimit":10}}
        />
        <path d="M512.5,99.5"
        transform="translate(-85 322)"
        style={{"fill":"white","stroke":"#000", "strokeMiterlimit":10}}
        /><path d="M85-195S300-322,441-322c168,0,332,61.08,462,81,385,59,581-60,581-60v142H85Z"
        transform="translate(-85 322)" 
        style={{"fill":"white"}}/></svg>
        
      </header>
    )
  }
}
