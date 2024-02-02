import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, selectorFunction] = useState("All")

  function filterFunction(event){
    selectorFunction(event.target.value)
  }

  const itemsToDisplay = items.filter((item)=>{
    if (selectedCategory === "all") return true;


    return item.category === selectedCategory;
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterFunction}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
