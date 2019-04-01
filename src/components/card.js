import React from 'react'

export default function card(props) {
  return (
    <div className="h-60 bg-white border shadow-medium w-1/4 flex flex-col items-center justify-between">
      <img className="rounded-full w-48 h-48 border-4  border-black" src={props.article.thumbnail} alt=""/>
      <h3 className="text-center mt-4">{props.article.title}</h3>
      <button class="my-2 text-2xl w-4/5 h-16 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded mx-auto text-center">
            See the Post 
        </button>
    </div>
  )
}
