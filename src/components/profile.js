import React, { Component } from 'react'
import ProPic from '../img/pro_square.png'

export default class profile extends Component {
  state={
    spinning:false
  }
 toggleSpin =()=>{
    this.setState({spinning:true});
    setTimeout(function(){
      this.setState({spinning:false})
    }.bind(this), 1000)
  }
  render() {
    return (
      <>
      <section className="flex flex-wrap flex-col-reverse md:flex-row justify-center mx-auto md:w-4/5">
      
        <div className="w-full md:w-1/2 text-2xl md:text-3xl mx-auto flex flex-col justify-center items-center md:items-start">
          <p className="my-1 flex">Hi, I'm<b onClick={this.toggleSpin}className="app_confetti underline hover:text-red cursor-pointer px-2">Matt</b></p>
          <p className="my-1 ">thank you for stopping by!</p>
          <p className="my-1">I'm a full stack developer</p>
          <p className="my-1">who's passionate about</p>
          <p className="my-1">finding solutions that create</p>
          <p className="my-1">a better tomorrow.</p> 
        </div>
        <div className="w-4/5 md:w-1/3 mx-auto my-4 md:my-0">
          <div className="pro-image">
            <img src={ProPic} alt=""/>
          </div>
        {/* <img className={this.state.spinning? 'rotate-center': null} src={ProPic} alt=""/> */}
          {/* <svg 
          id="Layer_1" 
          data-name="Layer 1"
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 498.23 500">
           <path d="M250.72,3a100.45,100.45,0,0,1,82.74,43.57l1.09,1.58,1.89-.32a101.59,101.59,0,0,1,17.05-1.45A100.34,100.34,0,0,1,452,165.69l-.37,1.93,1.63,1.11a101.83,101.83,0,0,1,15.08,12.59,100.33,100.33,0,0,1-1.09,141.86,101.64,101.64,0,0,1-13.47,11.14l-1.56,1.08.3,1.87a101.46,101.46,0,0,1,1.29,16A100.4,100.4,0,0,1,335.5,452l-1.91-.35-1.1,1.61A100.79,100.79,0,0,1,320,468.16a100.31,100.31,0,0,1-141.86-1.09,101.71,101.71,0,0,1-11.75-14.36l-1.08-1.6-1.9.32A100.37,100.37,0,0,1,48.33,333.66l.36-1.89-1.57-1.11a102.52,102.52,0,0,1-13.34-11.39,100.41,100.41,0,0,1,11.71-151L47,167.2l-.34-1.85a100.38,100.38,0,0,1,118-117.09l1.94.38L167.69,47a101.13,101.13,0,0,1,12.65-15.16A99.71,99.71,0,0,1,250.72,3m0-3a103.38,103.38,0,0,0-85.51,45.32A103.37,103.37,0,0,0,43.7,165.91a104.47,104.47,0,0,0-10.94,9.37A103.38,103.38,0,0,0,45.38,333.1,103.36,103.36,0,0,0,163.93,454.39,103.38,103.38,0,0,0,335,455,103.37,103.37,0,0,0,455.49,336.79,103.41,103.41,0,0,0,455,166.25a103.38,103.38,0,0,0-119-121.38A103.55,103.55,0,0,0,250.72,0Z" transform="translate(-1.94 0)"/></svg> */}
        </div>
      </section>
    
      </>
    )
  }
}




