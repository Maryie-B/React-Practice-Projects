import React, { useState } from "react";
import people from "./data"; 
import { FaEtsy } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  

  return <div>
    < FaEtsy />
    <h2>Reviews Starter</h2>
    </div>;
  
};
export default App;