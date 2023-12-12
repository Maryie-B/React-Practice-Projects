import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <section className='container'>
      <h4>Color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#259988'/>
        <button className="btn" style={{background: color}}>Submit</button>
      </form>
    </section>
  )
}

export default Form
