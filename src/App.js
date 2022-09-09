import React, { useState } from 'react';
import './App.css';

const data = [
  {
    question : "Question 1",
    answer : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores numquam omnis, quis atque obcaecati eveniet hic quaerat, itaque nostrum soluta eaque, voluptas dolorem repudiandae ipsam cum illo. Quisquam, itaque molestias.`
  },
  {
    question : "Question 2",
    answer : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores numquam omnis, quis atque obcaecati eveniet hic quaerat, itaque nostrum soluta eaque, voluptas dolorem repudiandae ipsam cum illo. Quisquam, itaque molestias.`
  },
  {
    question : "Question 3",
    answer : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores numquam omnis, quis atque obcaecati eveniet hic quaerat, itaque nostrum soluta eaque, voluptas dolorem repudiandae ipsam cum illo. Quisquam, itaque molestias.`
  },
  {
    question : "Question 4",
    answer : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores numquam omnis, quis atque obcaecati eveniet hic quaerat, itaque nostrum soluta eaque, voluptas dolorem repudiandae ipsam cum illo. Quisquam, itaque molestias.`
  },
  {
    question : "Question 5",
    answer : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores numquam omnis, quis atque obcaecati eveniet hic quaerat, itaque nostrum soluta eaque, voluptas dolorem repudiandae ipsam cum illo. Quisquam, itaque molestias.`
  },
]




function App() {

  let [selected, setSeleted] = useState(null)

  let toggle = (i)=> {
    if (selected === i) {
      return setSeleted(null)
    }
    setSeleted(i)
  }

  return (
    
    <div className="wrapper">
      <div className="accordion">
        {
          data.map((item, i)=> (
            <div className="item" key={i}>
              <div className="title" onClick={()=> toggle(i)}>
                <h2>{item.question}</h2> <span>{ selected  === i? "➖" : "➕"}</span>
              </div>
              <div className={ selected  === i? "content show":"content" }>{item.answer}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
