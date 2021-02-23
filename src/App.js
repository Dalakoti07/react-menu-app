import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categoriesSet=['all',...new Set(items.map((item)=> item.category))]
console.log('categoriesSet: ',categoriesSet);
function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(categoriesSet);

  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems=items.filter((item)=> item.category===category);
    setMenuItems(newItems);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filter={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
