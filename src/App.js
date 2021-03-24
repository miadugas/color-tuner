import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list, setList] = useState(new Values('#7f00ff').all(10))
  
  const handleSubmit =(e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }


  return (
    <>
  <section className="container">
    <h3>color tuner</h3>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={color} 
      onChange={(e) => setColor(e.target.value)}
      placeholder="ie: #7f00ff" 
      className={`${error ? 'error' : null}`}
      />
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  </section>
  <section className="colors">
  {list.map((color, index) => {
          // console.log(color)
          const hex = color.hex
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
  </section>
  </>
  );
}

export default App
