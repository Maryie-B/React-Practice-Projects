import React, { useState } from 'react'
import {shortList, list, longList} from './data';
import { FaQouteRight } from 'react-icons/fa'


const Carousel = () => {
    const [people, setPeople] = useState(shortList);
  return (
    <section className='slider-container' > 
      {people.map((person) => {
        const { id, image, title, quote } = person;
        return <article className="slide" key={id} >
            <img src={image} alt={name} className='person-img'/>
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQouteRight />
        </article>
      })}
    
    </section>
  )
}

export default Carousel
