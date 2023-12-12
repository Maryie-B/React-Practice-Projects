import { useState } from "react";
import Title from "./Title";
import menu from './data';
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return <main>
    <section>
      <Title text='our menu'/>
      <Menu />
    </section>
  </main>;
};
export default App;
