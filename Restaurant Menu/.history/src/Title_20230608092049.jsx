import React from 'react'

const Title = ({text}) => {
  return (
    <div>
      <h2 className='title align'>{text || 'Default Title'}</h2>
    </div>
  )
}

export default Title
