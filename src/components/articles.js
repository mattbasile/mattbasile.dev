import React, { Component } from 'react'
import axios from 'axios'

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
      <>

    {
      this.state.articles.map(article =>{
        if(article.categories.length > 0){
          return <div>{article.title}</div> 
        }
      })
      }
      </>
    )
  }
}
