import React from 'react'

export default function card(props) {
  return (
    <div className="h-60 bg-white border shadow-md w-1/4 flex flex-col items-center justify-around py-8">
      <img className="rounded-full w-48 h-48 border-4  border-black" src={props.article.thumbnail} alt=""/>
      <h3 className="text-center mt-4">{props.article.title}</h3>
      <a href={props.article.link} target="blank">
      <button class="my-2 text-2xl bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded mx-auto text-center">
            See the Post 
        </button>
        </a>
    </div>
  )
}
