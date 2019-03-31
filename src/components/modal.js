import React, { Component } from 'react'

export default class modal extends Component {
   state={
       
   }


  render() {
    return (
      <section className={this.props.openModal ? "modal w-3/5 h-auto mx-auto border border-r-2 border-b-2 border-t-0 border-l-0 shadow-md": "hidden"}>
      <div className=" p-8">
        <div className="flex justify-end">
            <i onClick={()=>this.props.hideModal()}className="fas fa-times text-2xl hover:text-red"></i>
        </div>
        <h3 className="text-4xl ">{this.props.selected.title}</h3>
        <p className="text-xl mt-2">{this.props.selected.role}</p>
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
        <div className="flex mt-4 w-1/2">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mr-2 w-1/2">
            <a href="">See the Site</a> 
        </button>
        <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded w-1/2">
            <a href="">See the Code</a>  
        </button>
        
        </div>
      </div>
      </section>
      
    )
  }
}
