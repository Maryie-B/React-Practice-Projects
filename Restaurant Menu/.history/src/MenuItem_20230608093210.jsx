import React from 'react'

const MenuItem = ({img, title, price, desc}) => {
  return (
    <article>
      <img src={img} alt={title} className="img" />
    </article>
  )
}

export default MenuItem
