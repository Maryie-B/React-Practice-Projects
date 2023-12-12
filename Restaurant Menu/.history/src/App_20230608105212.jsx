import { useState } from "react";
import Title from "./Title";
import menu from './data';
import Menu from "./Menu";

const tempCat = ['all', ... new Set(menu.map((item) => item.category))];
console.log(tempCat);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return <main>
    <section>
      <Title text='our menu'/>
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
