import React, { useState } from "react";

function Item({ name, category }) {
  const [displayed, setDisplayed] = useState(false);

  function displayTheChat() {
    setDisplayed((displayed) => !displayed);
  }

  return (
    <li className={displayed ? "in-chart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={displayed ? "remove" : "add"} onClick={displayTheChat}>
        {displayed ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
