import React from 'react'

const SingleColor = ({index, color}) => {
    const {hex, weight} = color;
  return (
    <article className='color' style={{background: `#${hex}`}}> 
      Fuck
    </article>
  )
}

export default SingleColor
