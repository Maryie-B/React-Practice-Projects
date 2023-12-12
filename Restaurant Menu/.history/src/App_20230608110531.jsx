import { useState } from "react";
import Title from "./Title";
import menu from './data';
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all', ... new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log(category);
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return <main>
    <section>
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;