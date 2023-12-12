import React,{ useState }from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowinfo] = useState(false);


  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
