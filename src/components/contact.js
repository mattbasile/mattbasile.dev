import React from 'react'

export default function contact() {
  return (
    <section >
      <div className="mb-12 mt-32">
      <h2 className="text-4xl font-bold text-center">Other places you can reach me.</h2 >
      <div className="flex md:w-3/5 mx-auto justify-around">
        <a target="blank" href="mailto:matthewbasile2@gmail.com?Subject=Hey Matt! Just saw your Website...">
          <i className="text-3xl md:text-5xl my-8 far fa-envelope text-red-600 hover:text-red-400 "></i>
        </a>
        <a target="blank" href="https://twitter.com/mattcbasile">
        <i className="text-3xl md:text-5xl my-8 text-blue-400 hover:text-blue-600  fab fa-twitter"></i>
        </a>
        <a target="blank" href="https://github.com/mattbasile">
        <i className="text-3xl md:text-5xl my-8 text-purple-700  hover:text-purple-900 fab fa-github"></i>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/matthew-basile-070b279b/">
        <i className="text-3xl md:text-5xl my-8 text-blue-700  hover:text-blue-900 fab fa-linkedin"></i>
        </a>
        <a target="blank" href="https://angel.co/matthew-basile">
        <i className="text-3xl md:text-5xl my-8 text-gray-600 hover:text-gray-800 fab fa-angellist"></i>
        </a>
      </div>
      </div>
      <svg id="Layer_1" viewBox="0 0 1399 163"><path d="M1335.5,263.5" transform="translate(-85 322)" 
      style={{"fill":"#1C3D5A", "stroke":"#1C3D5A", "strokeMiterlimit":10}}/><path d="M512.5,99.5" transform="translate(-85 322)" 
      style={{"fill":"#1C3D5A", "stroke":"#1C3D5A", "strokeMiterlimit":10}}/><path d="M85-195S300-322,441-322c168,0,332,61.08,462,81,385,59,581-60,581-60v142H85Z" transform="translate(-85 322)" 
      style={{"fill":"#1C3D5A", "stroke":"#1C3D5A",}}/></svg>
      {/* <svg id="Layer_1" viewBox="0 0 1399 437">
      <path d="M1335.5,263.5" transform="translate(-127 775)"
      style={{"fill":"#1c3d5a","stroke":"#000",strokeMiterlimit:10}}/>
      <path d="M512.5,99.5" transform="translate(-127 775)"
      style={{"fill":"#1c3d5a","stroke":"#000",strokeMiterlimit:10}}/>
      <path d="M1526-556s-216-219-357-219c-168,0-362,153.93-492,200C292-438.54,127-765,127-765v427H1526Z" transform="translate(-127 775)" style={{"fill":"#1c3d5a"}}/></svg> */}
    </section>
  )
}
