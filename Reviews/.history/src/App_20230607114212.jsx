import React, { useState } from "react";
import people from "./data"; 
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  

  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
      </div>

    </article>
    <h2>Reviews Starter</h2>
    </main>;
  
};
export default App;
