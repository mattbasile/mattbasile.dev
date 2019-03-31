import React, { Component } from 'react'


export default class modal extends Component {
    
  render() {
    return (
      <section className={this.props.openModal ? "modal w-3/5 h-80 mx-auto border border-r-2 border-b-2 border-t-0 border-l-0 shadow-md": "hidden"}>
      <div className=" p-8">
        <div className="flex justify-end">
            <i onClick={()=>this.props.hideModal()}className="fas fa-times text-2xl hover:text-red"></i>
        </div>
        <h3 className="text-4xl ">BirthRide</h3>
        <p className="text-xl mt-2">Full Stack Engineer</p>
        <p className="text-xl mt-8 leading-loose">
        Bacon ipsum dolor amet tongue pork loin flank beef burgdoggen drumstick t-bone. Pork loin venison short loin, kevin tenderloin hamburger kielbasa brisket biltong. Salami buffalo tail picanha tongue turkey, pork chop kielbasa capicola spare ribs corned beef ham hock andouille. Salami buffalo tail picanha tongue turkey, pork chop kielbasa capicola spare ribs corned beef ham hock andouille. 
        </p>
        <p className="text-xl mt-8 leading-loose">
            <b>Stack Used:</b> React, Redux, Jest, Axios, Express, PostgresSQL, 
        </p>
        <div className="flex mt-4 w-1/2">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mr-2 w-1/2">
             See the Site
        </button>
        <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded w-1/2">
            See the Code
        </button>
        </div>
      </div>
      </section>
      
    )
  }
}
