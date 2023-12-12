import React, { useState } from 'react'
import SingleColor from './SingleColor';
import {nanoid} from 'nanoid';

const ColorList = ({colors}) => {
    console.log(colors);

  return (
    <section className='colors'>
      {colors.map((color) => {
        return <SingleColor key={nanoid()} color={color}/>;
      })}
    </section>
  )
}

export default ColorList
