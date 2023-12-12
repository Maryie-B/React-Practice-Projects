import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import {ToastContainer, toast} from 'react-toastify'


const App = () => {
  const [colors, setColors] = useState(new Values('#259988').all(10));
  toast.error('fuck you');
 
  return (
  <main>
    <Form />
    <ColorList colors={colors}/>
    <ToastContainer position="top-center"/>
  </main>
  );
};
export default App;