import React, { Component } from 'react'
import axios from 'axios'
import Card from './card'


export default class articles extends Component {
  constructor(){
    super();
    this.state={
      articles: []
    }
  }
  
  
  componentDidMount(){
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mattbasile")
    .then(res=> this.setState({articles: res.data.items}))
    .catch(err=>console.log(err))
  }
  render() {
    return (
    <section className="mt-24">
    <div className="text-center">
      <h3>I'm a blogger too!</h3>
      <p>Here are some of my most recent posts.</p>
    </div>
        
        <div className="flex justify-around my-8 w-full mx-auto">
          {
            this.state.articles.map(article =>{
              if(article.categories.length > 0){
                return <Card article={article}/>
              }
            })
          }
        </div>
    </section>
    )
  }
}
