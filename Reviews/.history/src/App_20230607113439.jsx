import React, { useState } from "react";
import people from "./data"; 
import { Fa500Px } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  

  return <div>
    < Fa500Px />
    <h2>Reviews Starter</h2>
    </div>;
  
};
export default App;
