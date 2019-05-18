import React, { Component } from 'react'
import data from '../data/data.json'

export default class truths extends Component {
  state={
    truths: data.truths,
    lies: data.lies,
    tiOne: 0, 
    tiTwo: 0, 
    liOne: 0,
    questions: [],
    submitted: false,
    selected: '',
    winner: false,
    int: 0
  }
  getRandomInt=(max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }
  componentDidMount(){
    this.getQuestions()
  }
  getQuestions = () =>{
    var shuffler = this.getRandomInt(2)
    var questions = []
    let int1 = this.getRandomInt(this.state.truths.length);
    let int2 = this.getRandomInt(this.state.truths.length);
    if(int1 === int2){
      while(int1===int2){
        int2 =this.getRandomInt(this.state.truths.length);
      }
    }
    questions.push(this.state.truths[int1], this.state.truths[int2])
    console.log(questions)
    let lie = this.getRandomInt(this.state.lies.length)
    questions.splice(shuffler, 0, this.state.lies[lie])
    this.setState({tiOne:int1, tiTwo:int2, liOne:lie, questions})
  }
  selectOption = e =>{
    
    this.setState({selected:e.target.title, int:this.getRandomInt(3)})
  }
  submitGuess=e=>{
    e.preventDefault();
    this.setState({submitted: true})
    const lie = this.state.questions.find(question=> question.lie === true)
    console.log(lie)
    if(this.state.selected === lie.question){
      this.setState({winner:true})
    }
    else{this.setState({winner:false})}
  }
  playAgain=e=>{
    e.preventDefault();
    this.getQuestions()
    this.setState({submitted: false, selected: '', winner: false,})
  }
  render() {
    return (
      <section className="my-8">
        <h2 className="text-4xl font-bold text-center">Want to learn more about me?</h2>
        <p className="text-xl  mt-2 text-center">Let's play a game of 2 truths and a lie... see if you can spot that lie <span role="img">😏</span></p>
        <div className="w-4/5 md:w-3/5 h-auto bg-white my-8 border border-r-2 border-b-2 border-t-0 border-l-0 shadow-sm mx-auto ">
        {this.state.questions.map((question,i) =>{
          if(this.state.submitted === true){
           return ( <div className={
             this.state.selected === question.question ?
             this.state.winner ?
             "w-full text-center flex justify-center items-center h-32 border text-xl md:text-3xl bg-green-600":
             "w-full text-center flex justify-center items-center h-32 border text-xl md:text-3xl bg-red-400" :
             "w-full text-center flex justify-center items-center h-32 border text-xl md:text-3xl bg-gray-200"
             }>
              <p className={question.lie===true? "text-red-400" : "text-green-600"}>
              {question.lie===true? `Lie: ${question.answer}` : `Truth: ${question.answer}`}
              </p>
            </div>)
          } 
          if(this.state.submitted === false){
           return (
           <div title={question.question} onClick={e=>this.selectOption(e)}className={this.state.selected === question.question ? 
            "w-full text-center flex justify-center items-center h-32 border text-xl md:text-3xl bg-purple-400 text-white cursor-pointer"
            : "w-full text-center flex justify-center items-center h-32 border text-xl md:text-3xl bg-grey-200 cursor-pointer"
          }>
              <p title={question.question} onClick={e=>this.selectOption(e)}>
                {question.question}
              </p>
            </div>)
          } 
          })}
          
          <div className="w-full h-32 border flex flex-col justify-center items-center">
            {this.state.submitted ? this.state.winner ?
              (<>
              <button onClick={e=>this.playAgain(e)}  class="my-2 text-2xl w-4/5 h-16 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded mx-auto text-center">
              Play again?
              </button>
              <h4>Saw right through that one! Nice guessing over there.</h4>
              </>
              )
              :  (<>
              <button onClick={e=>this.playAgain(e)}  class="my-2 text-2xl w-4/5 h-16 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded mx-auto text-center">
              Play again?
              </button>
              <h4>Sorry nice try but that wasn't it!</h4>
              </>
              )
              :
              this.state.selected ? 
              (<>
              <button onClick={e=>this.submitGuess(e)} title="Guidr" class="my-2 text-2xl w-4/5 h-16 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded mx-auto text-center">
            Submit Guess
            </button>
            <h4>{
                  this.state.int === 2 ?
                 "That can't be it can it?" :
                  this.state.int === 1 ? 
                  "Hmmmm, not sure about that one" :
                  "Are you sure that's right?"
                }
              </h4>
            </>)
            :
            (<>
               <button onClick={e=>this.submitGuess(e)} title="Guidr" class="my-2 text-2xl w-4/5 h-16 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded mx-auto text-center">
            Submit Guess
            </button>
            </>)
            }
            {/* onClick={e=>this.selectModal(e)} */}
          </div>
         
        </div>
      </section>
    )
  }
}

