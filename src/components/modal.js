import React, { Component } from 'react'

export default class modal extends Component {
   state={
       
   }


  render() {
    return (
      <section className={this.props.openModal ? "bg-white inset-0 z-10 modal absolute w-5/6 md:w-3/5 h-auto mx-auto border border-r-2 border-b-2 border-t-0 border-l-0 shadow-md": "hidden"}>
      <div className="bg-white border border-r-2 border-b-2 border-t-0 border-l-0 shadow-md p-8 modal-body">
        <div className="flex justify-end">
            <i onClick={()=>this.props.hideModal()}className="fas fa-times text-2xl hover:text-red-600"></i>
        </div>
        <h3 className="text-4xl font-bold ">{this.props.selected.title}</h3>
        <p className="text-xl mt-2 font-semi-bold">{this.props.selected.role}</p>
        <p className="text-xl mt-8 leading-loose">
        {this.props.selected.description}
        </p>
        <p className="text-xl mt-8 leading-loose">
            <b>Stack Used:</b> {this.props.selected.stack.map((tech, i)=>{
                if(this.props.selected.stack.length -1 === i){
                    return `${tech}.`
                }
                else{
                    return ` ${tech}, `
                }
            })}
        </p>
        <div className="flex mt-4 flex-wrap lg:flex-no-wrap lg:w-1/2">
        <a href={this.props.selected.siteURL} target="blank" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded lg:mr-2 w-full my-2 lg:w-1/2 text-center no-underline">See the Site</a> 
        <a href={this.props.selected.github} target="blank" className="bg-transparent hover:bg-blue-900 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  w-full my-2 lg:w-1/2 text-center no-underline">
           See the Code
        </a>  
        </div>
      </div>
      </section>
      
    )
  }
}
