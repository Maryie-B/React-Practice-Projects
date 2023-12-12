import React, { useState } from 'react'

const ColorList = () => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <section className='container'>
      <h4>Color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e) => setColor(e.traget.value)} placeholder='#259988'/>
        <button className="btn" style={{background: color}}>Submit</button>
      </form>
    </section>
  )
}

export default ColorList
